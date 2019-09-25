import os, hashlib, jwt, datetime, time, ptvsd, mysql.connector
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
    dbObj = _apiHelper.dbConn()
    ret = None
    if('username' not in data or 'password' not in data or 'userType' not in data):
        ret = requiredParams(data, 'username', 'password', 'userType')

    if(_apiHelper.existingUserCheck(dbObj, data['username'], data['userType'])):
        ret = json.dumps({'message': 'error', 'data': 'Already registered.'}), 409

    acc = account()
    acc['password'] = hashlib.md5(data['password'].encode('utf-8')).hexdigest()
    acc['username'] = data['username'].lower()
    acc['userType'] = data['userType'].lower()
    if(acc['userType'] == 'customer'):
        #Customers get minted free Testnet money :D
        mintamount = 1000
        mint(acc['mnemonic'], mintamount)
    userId = _apiHelper.registerNewUser(dbObj, acc)

    if(userId is not None):
        result = {}
        result['username'] = acc['username']
        result['address'] = acc['address']
        result['accountBalance'] = balance(acc['address'])
        result['userType'] = acc['userType']
        result['token'] = _apiHelper.createToken(userId, app)
        session['userId'] = userId
        session['userType'] = acc['userType']
        ret = json.dumps({'message': 'success', 'data': result})
    else:
        ret = json.dumps({'message': 'error', 'data': 'Could not register user.'}), 500

    dbObj['db'].close()
    return ret

#req params: None
@app.route('/api/logout', methods=['POST'])
def logout():
    session.pop('userId', None)
    session.pop('userType', None)
    return json.dumps({'message': 'success', 'data': 'Logged out'})

#Transactions
@app.route('/api/transaction', methods=['POST'])
def transaction():
    data = request.get_json()
    dbObj = _apiHelper.dbConn()
    customerInfo = None
    recipientUsername =  data['recipientUsername']
    amount =  data['amount']
    senderUsername=  data['senderUsername']
    token = request.headers.get('authorization')
    tokenInfo = _apiHelper.verifyToken(token, app)
    if(tokenInfo is not None and 'userId' in tokenInfo):
        customerInfo = _apiHelper.getUserByUniqueValue('id', dbObj, tokenInfo['userId'], 'customer')
    else:
        ret = json.dumps({'message': 'Token not valid'}), 401

    recipientInfo = _apiHelper.getUserByUniqueValue('username', dbObj, recipientUsername, 'business')

    if(customerInfo is not None and 'username' in customerInfo and customerInfo['username'] == senderUsername \
        and recipientInfo is not None):
        senderMnemonic = customerInfo['mnemonic']
        sequenceNumber = customerInfo['sequence']
        newSequenceNumber = transfer(senderMnemonic, recipientInfo['address'], amount, sequenceNumber)
        result = {}
        result['success'] = True
        result['transferAmount'] = amount
        result['recipientUsername'] = recipientUsername
        result['senderUsername'] = senderUsername
        #_apiHelper.updateCustomerSequence(dbObj, tokenInfo['userId'], 'customer', newSequenceNumber)
        ret = json.dumps({'message': 'Success', 'data': result})
    else :
        ret = json.dumps({'message': 'Not authorized', 'session': 'none'}), 401
    dbObj['db'].close()
    return ret

@app.route('/api/addDbScript', methods=['GET'])
def addDbScript():
    dbObj = _apiHelper.dbConn()
    
    script = "DROP TABLE `consumerArticles`;"
    script2 = "CREATE TABLE `consumerArticles` (\
                `id` int(11) NOT NULL,\
                `userId` int(11) NOT NULL,\
                `username` varchar(500) NOT NULL,\
                `url` varchar(500) NOT NULL,\
                `timestamp` varchar(500) NOT NULL\
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\
            "
    script3 =  "ALTER TABLE `consumerArticles`\
                ADD PRIMARY KEY (`id`);\
            "
    script4 = "ALTER TABLE `consumerArticles`\
            MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;"

    cursor = dbObj['cursor']

    cursor.execute(script)
    cursor.execute(script2)
    cursor.execute(script3)
    cursor.execute(script4)

    dbObj['db'].commit()
    return json.dumps({'message': 'success'})

@app.route('/api/insertRecord', methods=['GET'])
def insertRecord():
    dbObj = _apiHelper.dbConn()
    userId = '5'
    username = 'allen3'
    url = 'http://www.google.com'
    ts = time.time()
    timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
    script = "INSERT INTO consumerArticles (userId, username, url, timestamp) \
                VALUES ('{userId}', '{username}', '{url}', '{timestamp}')"\
                .format(userId=userId, username=username, url=url, timestamp=timestamp)
    cursor = dbObj['cursor']
    cursor.execute(script)
    dbObj['db'].commit()
    return json.dumps({'message': 'success'})

@app.route('/api/checkRecord', methods=['GET'])
def checkRecord():
    dbObj = _apiHelper.dbConn()
    script = "SELECT * FROM consumerArticles"
    cursor = dbObj['cursor']
    cursor.execute(script)
    res = cursor.fetchall()
    result = {}
    fieldMap = _apiHelper.fields(cursor)
    for row in res:
        result['id'] = row[fieldMap['id']]


#TODO: 
#Authenticate based on Articles read
#Check the header (JWT) based auth works as it did before.
#SECURITY: SQL injection before we go live...
#SECURITY: How do we ensure transaction requests don't get modified to go to anyone...?
def authenticate(userType, request):
    dbObj = _apiHelper.dbConn()
    token = None
    ret = None
    if(request.method == 'GET' and 'authorization' in request.headers):
        token = request.headers.get('authorization')
        data = _apiHelper.verifyToken(token, app)
        userId = None
        if(data is not None and 'userId' in data):
            userId = str(data['userId'])
            session['userId'] = userId
            session['userType'] = userType
            userInfo = _apiHelper.getUserByUniqueValue(dbObj, 'id', userId, userType)
            result = _apiHelper.returnSuccessfulLogin(userInfo, userType, app)
            ret = json.dumps({'message': 'success', 'data': result})
        else:
            ret = json.dumps({'message': 'Token invalid'}), 401
    elif(request.method == 'POST'):
        data = request.get_json() 
        if(data is not None and 'username' in data and 'password' in data and 'userType' in data):    
            username =  data['username'].lower()
            password =  data['password']
            ret = _apiHelper.verifyUserByPassword(dbObj, username, password, userType, app)
        else:
            ret = requiredParams(data, 'username', 'password')
    else:  
        ret = json.dumps({'message': 'Bad Request'}), 400
    
    dbObj['db'].close()
    return ret

#api shared method
def requiredParams(data, *args):
    missingValue = "Something"
    for arg in args: 
        if(arg not in data):
            missingValue = arg+' field'
    return json.dumps({'message': 'error', 'data': missingValue + ' is missing.'}), 400
