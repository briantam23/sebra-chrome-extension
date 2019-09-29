import os, json, hashlib, jwt, datetime, time, mysql.connector
from flask import session
from libra_actions import account, balance, mint, transfer
port = int(os.environ.get("PORT", 3306))
class ApiHelper:
    def dbConn(self):
        if 'RUNNING_ON_HEROKU' in os.environ:
            config = {
                'host': 'us-cdbr-iron-east-02.cleardb.net',
                'port': 3306,
                'database': 'heroku_c4d228263403f24',
                'user': 'b7127d57b25e59',
                'password': 'e18842fa',
                'charset': 'utf8',
                'use_unicode': True,
                'get_warnings': True,
            }
        else:
            config = {
                'host': 'db',
                'port': port,
                'database': 'sebra',
                'user': 'root',
                'password': 'e0N28ttq@%B',
                'charset': 'utf8',
                'use_unicode': True,
                'get_warnings': True,
            }
        ret = {}
        db = mysql.connector.Connect(**config)
        cursor = db.cursor()
        ret['db'] = db
        ret['cursor'] = cursor
        return ret
    #TODO: Value provided must be unique otherwise we will return several results.
        #Check needs to be inplace that dbField is a unique key...
    def getUserByUniqueValue(self, dbField, dbObj, dbValue, userType):
        cursor = dbObj['cursor']
        result = {}
        table = 'customers'
        if(userType == 'business'):
            table = 'businesses'
        cursor.execute("SELECT * FROM `"+table+"` WHERE "+dbField+" = '"+str(dbValue)+"' LIMIT 1" )
        res = cursor.fetchall()
        if(cursor.rowcount == 0):
            result['success'] = False
            result['message'] = "Not registered"
        else:   
            fieldMap = self.fields(cursor)
            for row in res:
                result['success'] = True
                result['id'] = row[fieldMap['id']]
                result['username'] = row[fieldMap['username']]
                result['address'] = row[fieldMap['address']]
                result['password'] = row[fieldMap['password']]
                result['mnemonic'] = row[fieldMap['mnemonic']]  
                result['sequence'] = row[fieldMap['sequence']]  
        return result

    #Decode JWT token, check for validity
    def verifyToken(self, token, app):
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            return data
        except:
            return None
            
    def createToken(self, userId, app):
        tokenResp = jwt.encode({'userId': userId, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60)}, app.config['SECRET_KEY'])
        return tokenResp.decode('UTF-8')

    def fields(self, cursor):
        results = {}
        column = 0
        for d in cursor.description:
            results[d[0]] = column
            column = column + 1
        return results

    def verifyUserByPassword(self, dbObj, username, password, userType, itemUrl, app):
        userInfo = self.getUserByUniqueValue('username', dbObj, username, userType)
        passProvided = hashlib.md5(password.encode('utf-8')).hexdigest()
        if(userInfo['success'] and userInfo['password'] == passProvided and userInfo['id'] is not None and userInfo['mnemonic'] is not None):
            session['userId'] = userInfo['id']
            session['userType'] = userType
            ret = self.returnSuccessfulLogin(userInfo, userType, app)
            articleGranted = False
            if(itemUrl is not None):
                articleGranted = self.checkIfItemPurchased(dbObj, itemUrl, userInfo['id'])
            
            ret['articleGranted'] = articleGranted
            response = json.dumps({'message': 'success', 'data': ret})
            return response
        else:
            return json.dumps({'message': 'Not authorized'}), 401

    def returnSuccessfulLogin(self, userInfo, userType, app):
        ret = {}
        acc = account(userInfo['mnemonic'])
        ret['address'] = acc['address']
        ret['accountBalance'] = balance(acc['address'])
        ret['userName'] = userInfo['username']
        ret['userType'] = userType
        tokenResp = jwt.encode({'user': userInfo['id'], 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60)}, app.config['SECRET_KEY'])
        ret['token'] = self.createToken(userInfo['id'], app)
        return ret

    def existingUserCheck(self, dbObj, userName, userType):
        table = 'customers'
        if(userType == 'business'):
            table = 'businesses'
        cursor = dbObj['cursor']
        cursor.execute("SELECT * FROM `"+table+"` WHERE username = '" + userName + "' LIMIT 1" )
        #test - but delete if diesnot work
        cursor.fetchall()
        return cursor.rowcount > 0

    def updateCustomerSequenceAndItems(self, dbObj, userId, userType, username, newSequenceNumber, itemUrl):
        table = 'customers'
        if(userType == 'business'):
            table = 'businesses'
        cursor = dbObj['cursor']
        #commenting out until we fix Libra Testnet Integration for transfers
        #affectedCount = cursor.execute("UPDATE `"+table+"` SET sequence = "+newSequenceNumber+" WHERE id = '"+userId+"'")
       
        if(userType == 'business' and itemUrl is not None):
            insertScript = "INSERT INTO consumerarticles (userId, username, url, timestamp)\
                VALUES ('{userId}', '{username}', '{itemUrl}', '{timestamp}')"\
                .format(userId=userId, username=username, itemUrl=itemUrl, timestamp=getTimestamp())
            cursor.execute(insertScript)
        dbObj['db'].commit()
        
        #return affectedCount
        #UNDO this once Testnet changes are done.
        return 0
    def registerNewUser(self, dbObj, acc):
        table = 'customers'
        if(acc['userType'] == 'business'):
            table = 'businesses'
        cursor = dbObj['cursor']
        cursor.execute("INSERT INTO `"+table+"` (username, password, mnemonic, address) VALUES ('"+acc['username']+"', '"+acc['password']+"', '"+acc['mnemonic']+"', '"+acc['address']+"')" )
        if(cursor.rowcount > 0):
            dbObj['db'].commit()
            return cursor.lastrowid
        return None

    def checkIfItemPurchased(self, dbObj, itemUrl, userId):
        cursor = dbObj['cursor']
        script ="SELECT * FROM consumerarticles WHERE userId = {userId} AND url = '{itemUrl}'"\
                    .format(userId=userId, itemUrl=itemUrl)
        cursor.execute(script)
        res = cursor.fetchall()
        return cursor.rowcount > 0
    
    def getTimestamp():
        ts = time.time()
        return datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')