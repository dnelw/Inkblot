import cv2
import time
import os
import json
import base64
from google.cloud import vision

client = vision.ImageAnnotatorClient()

data = []
time_passed = 0
previous = time.time()
delta = 0
while time_passed < 10:
    current = time.time()
    delta = current - previous
    if delta > 5:
        camera = cv2.VideoCapture(0)
        response = None
        encoded = ""
        previous = current
        time_passed += 5
        return_value, image = camera.read()
        cv2.imwrite('opencv.png', image)
        with open('opencv.png', 'rb') as image:
            content = image.read()
            encoded = base64.b64encode(content)
            response = client.face_detection({
                'content': content,
            })
        os.remove('opencv.png')
        camera.release()
        joy = response.face_annotations[0].joy_likelihood
        sorrow = response.face_annotations[0].sorrow_likelihood
        surprise = response.face_annotations[0].surprise_likelihood
        anger = response.face_annotations[0].anger_likelihood
        data.append({
            'image': encoded.decode("utf-8"),
            'joy': joy,
            'sorrow': sorrow,
            'surprise': surprise,
            'anger': anger
        })

with open('data.json', 'w') as file:
    json.dump(data, file)
