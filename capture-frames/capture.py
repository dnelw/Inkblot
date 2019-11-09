import cv2
import time
import os
import sys
import json
import base64
from google.cloud import vision

video_path = 'VID_20191109_100400.mp4'

def video_to_mp3(file_name):
    """ Transforms video file into a MP3 file """
    try:
        file, extension = os.path.splitext(file_name)
        # Convert video into .wav file
        os.system('ffmpeg -i {file}{ext} {file}.wav'.format(file=file, ext=extension))
    except OSError as err:
        print(err.reason)
        exit(1)


def main():
    vid = cv2.VideoCapture(video_path)
    video_to_mp3(video_path)
    client = vision.ImageAnnotatorClient()
    data = []
    vid.set(cv2.CAP_PROP_POS_AVI_RATIO,1)
    duration = vid.get(cv2.CAP_PROP_POS_MSEC)
    success, image = vid.read()
    for frame in range(0, int(duration), 5000):
        vid.set(cv2.CAP_PROP_POS_MSEC,frame)
        success, image = vid.read()
        if(success):
            response = None
            cv2.imwrite('opencv%d.png' % frame, image)
            with open('opencv%d.png' % frame, 'rb') as image:
                content = image.read()
                encoded = base64.b64encode(content)
                response = client.face_detection({
                    'content': content,
                })
            print(response)
            if(len(response.face_annotations) == 0):
                data.append({
                    'image': encoded.decode("utf-8"),
                    'joy': 1,
                    'sorrow': 1,
                    'surprise': 1,
                    'anger': 1
                })
            else:
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
        json.dump(data, file, indent=4)

main()
