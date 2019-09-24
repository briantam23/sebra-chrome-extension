import os, hashlib, jwt, datetime, ptvsd, mysql.connector
from flask import Flask, g, session, request, json
from flask_restful import Resource, Api, reqparse
from libra_actions import account, balance, mint, transfer
from api_helpers import ApiHelper 
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = os.urandom(24)
app.config['SECRET_KEY'] = 'zj8F?7uj9x41'

#---------DEBUGGING-------------
address = ('0.0.0.0', 81)
ptvsd.enable_attach(address)
ptvsd.wait_for_attach()
#---------DEBUGGING-------------

CORS(app, supports_credentials=True)
@app.route('/')
def index():
    return json.dumps({'results': 'hi'})

_apiHelper = ApiHelper()

#-----------LOG IN-----------
@app.route('/api/authCustomer', methods=['POST', 'GET'])
def authCustomer():
    return authenticate('customer', request)

@app.route('/api/authBusiness', methods=['POST', 'GET'])
def authBusiness():
    return authenticate('business', request)


#-----------REGISTER BUSINESS-----------
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    if('username' not in data or 'password' not in data or 'userType' not in data):
        return requiredParams(data, 'username', 'password', 'userType')

    dbObj = _apiHelper.dbConn()
    if(_apiHelper.existingUserCheck(dbObj, data['username'], data['userType'])):
        return json.dumps({'message': 'error', 'data': 'Already registered.'}), 409

    acc = account()
    acc['password'] = hashlib.md5(data['password'].encode('utf-8')).hexdigest()
    acc['username'] = data['username'].lower()
    acc['userType'] = data['userType'].lower()
    userId = _apiHelper.registerNewUser(dbObj, acc)

    dbObj['db'].close()
    if(userId is not None):
        ret = {}
        ret['username'] = acc['username']
        ret['address'] = acc['address']
        ret['accountBalance'] = balance(acc['address'])
        ret['type'] = acc['userType']
        return json.dumps({'message': 'success', 'data': ret})
    else:
        return json.dumps({'message': 'error', 'data': 'Could not register user.'}), 500


#TODO: 
#Mint when we REGISTER customers
#Authenticate based on Articles read
#Check the header (JWT) based auth works as it did before.
def authenticate(userType, request):
    token = None
    if(request.method == 'GET' and 'authorization' in request.headers):
        token = request.headers.get('authorization')
        data = _apiHelper.verifyToken(token, app)
        userIdFromData = None
        if(data is not None and 'userId' in data):
            userIdFromData = data['userId']
            session['userId'] = userIdFromData
            session['userType'] = userType
            userData = _apiHelper.getUserById(userIdFromData, userType)
            ret = _apiHelper.returnSuccessfulLogin(userIdFromData, userData['mnemonic'], userType)
            return json.dumps({'message': 'success', 'data': ret})
        else:
            return json.dumps({'message': 'Token invalid'}), 401
    elif(request.method == 'POST'):
        data = request.get_json() 
        if(data is not None and 'username' in data and 'password' in data and 'userType' in data):    
            username =  data['username'].lower()
            password =  data['password']
            ret = _apiHelper.verifyUserByPassword(username, password, userType, app)
            return ret
        else:
            return requiredParams(data, 'username', 'password')
        return json.dumps({'message': 'Token invalid'}), 401
    else:  
        return json.dumps({'message': 'Bad Request'}), 400

def requiredParams(data, *args):
    missingValue = "Something"
    for arg in args: 
        if(arg not in data):
            missingValue = arg+' field'
    return json.dumps({'message': 'error', 'data': missingValue + ' is missing.'}), 400
