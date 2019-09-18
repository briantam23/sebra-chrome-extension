import ptvsd
import time
import os
import json

from typing import List, Dict
from flask import Flask, g
from flask_restful import Resource, Api, reqparse
import mysql.connector


app = Flask(__name__)

address = ('0.0.0.0', 81)
ptvsd.enable_attach(address)
ptvsd.wait_for_attach()


mysql_config = {
        'user': 'root',
        'password': 'e0N28ttq@%B',
        'host': 'db',
        'port': '3306',
        'database': 'sebra'
    }

def get_consumers():
    connection = dbConn(mysql_config)
    cursor = getCursor(connection)
    cursor.execute('SELECT * FROM consumers')
    results = [{'name': fname, 'lname': lname} for (fname, lname) in cursor]
    killDb(connection, cursor)
    return results

def dbConn(mysql_config):
    return mysql.connector.connect(**mysql_config)

def getCursor(connection):
    return connection.cursor()

def killDb(connection, cursor):
    if connection is not None:
        connection.close()
    if cursor is not None:
        cursor.close()

@app.route('/')
def index() -> str:
    return json.dumps({'results': get_consumers()})
