## Server Details
Created with Python. Utilises:

- PyLibra for integration with Libra Testnet (https://github.com/jnsead/pylibra)
- Flask for REST API capabilities (https://palletsprojects.com/p/flask/)
- Authentication uses JWT standard (https://jwt.io/introduction/)
- Docker for containerisation / deployment (https://www.docker.com/)
- MySQL

## Run Locally:
In the api directory, run: docker-compose build followed by docker-compose up. By default, the server is hosted on port :80

## Debugging
Debugging is possible via VS Code:
- Ensure `ptvsd` is installed. 
- Uncomment 3 lines of code labeled as 'DEBUGGING' in `/sebra/__init__.py`
- Run `docker-compose up` in Terminal and launch Debugger from VS Code

