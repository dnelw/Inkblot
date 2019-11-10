from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import json
from capture import main
from upload import get_frames
import os

cred = credentials.Certificate('hackprinceton.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask(__name__)
CORS(app)

@app.route('/process/<interval>')
def process(interval):
    os.system("python3 capture.py" + " " + str(1000*int(interval)))
    frame_analysis = get_frames(int(interval))
    os.system("rm -rf *.png")
    return jsonify(frame_analysis)

if __name__ == '__main__':
    app.run(port = 5004, debug = True)
