from flask import Flask

api = Flask(__name__)
@api.route('/')
def index():
    response_body = {
        "response": "Hallo",
        }
    
    return response_body
