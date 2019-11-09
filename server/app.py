from flask import Flask, jsonify, make_response, request
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import json

cred = credentials.Certificate('hackprinceton.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask(__name__)

@app.route('/analysis/<uid>')
def analysis(uid):
    frame_analysis = None
    with open("response.json") as f:
        frame_analysis = json.load(f)
    return jsonify(frame_analysis)

if __name__ == '__main__':
    app.run(port = 5001)
