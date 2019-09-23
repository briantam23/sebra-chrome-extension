import os, hashlib, jwt, datetime, ptvsd, mysql.connector
from flask import Flask, g, session, request, json
from flask_restful import Resource, Api, reqparse
from libra_actions import account, balance, mint, transfer
from api_helpers import ApiHelper 
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = os.urandom(24)
app.config['SECRET_KEY'] = 'zj8F?7uj9x41'

#DEBUGGING
address = ('0.0.0.0', 81)
ptvsd.enable_attach(address)
ptvsd.wait_for_attach()
#DEBUGGING

CORS(app, supports_credentials=True)

@app.route('/')
def index():
    return json.dumps({'results': 'hi'})

apiHelper = ApiHelper()

#-----------LOG IN-----------
@app.route('/api/authCustomer', methods=['POST', 'GET'])
def authCustomer():
    return authenticate('customer', request)

@app.route('/api/authBusiness', methods=['POST', 'GET'])
def authBusiness():
    return ('business', request)


#-----------REGISTER BUSINESS-----------
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    if('username' not in data or 'password' not in data or 'type' not in data):
        missingValue = "Something"
        if('username' not in data):
            missingValue = 'username field'
        elif('username' not in data):
            missingValue = 'password field'
        elif('userType' not in data):
            missingValue = 'userType field'

        return json.dumps({'message': 'error', 'data': missingValue + ' is missing.'}), 400

    dbObj = apiHelper.dbConn()
    if(existingUserCheck(dbObj, data['username'])):
        return json.dumps({'message': 'error', 'data': 'Already registered.'}), 409
    acc = account()
    acc['password'] = hashlib.md5(data['password'].encode('utf-8')).hexdigest()
    acc['username'] = data['username'].lower()
    acc['userType'] = data['userType'].lower()
    userId = registerNewUser(dbObj, acc)

    dbObj['db'].close()
    if(userId is not None):
        ret = {}
        ret['username'] = acc['username']
        ret['address'] = acc['address']
        ret['accountBalance'] = balance(acc['address'])
        ret['type'] = acc['type']
        return json.dumps({'message': 'success', 'data': ret})
    else:
        return json.dumps({'message': 'error', 'data': 'Could not register user.'}), 500


def authenticate(userType, request):
    token = None
    if(request.method == 'GET' and 'authorization' in request.headers):
        token = request.headers.get('authorization')
        data = apiHelper.verifyToken(token)
        userIdFromData = None
        if(data is not None and 'userId' in data):
            userIdFromData = data['userId']
            session['userId'] = userIdFromData
            session['userType'] = userType
            userData = apiHelper.getUserById(userIdFromData, userType)
            ret = apiHelper.returnSuccessfulLogin(userIdFromData, userData['mnemonic'], userType)
            return json.dumps({'message': 'success', 'data': ret})
        else:
            return json.dumps({'message': 'Token invalid'}), 401
    elif(request.method == 'POST'):
        data = request.get_json() 
        if(data is not None and 'username' in data and 'password' in data):    
            username =  data['username'].lower()
            password =  data['password']
            ret = apiHelper.verifyUserByPassword(username, password, userType)
            return ret
        return json.dumps({'message': 'Token invalid'}), 401
    else:  
        return json.dumps({'message': 'Bad Request'}), 400