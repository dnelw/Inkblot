import cv2
import time
import os
import sys
import json
import base64
import functools
from multiprocessing import Pool
from google.cloud import vision

video_path = 'VID_20191109_100400.mp4'
client = vision.ImageAnnotatorClient()

def video_to_mp3(file_name):
    """ Transforms video file into a MP3 file """
    try:
        file, extension = os.path.splitext(file_name)
        # Convert video into .wav file
        os.system('ffmpeg -i {file}{ext} {file}.wav'.format(file=file, ext=extension))
    except OSError as err:
        print(err.reason)
        exit(1)


def analyze_frame(frame):
    print("Analyzing frame %d" % frame)
    vid = cv2.VideoCapture(video_path)
    vid.set(cv2.CAP_PROP_POS_MSEC, frame)
    success, image = vid.read()
    if(success):
        print("Successful read on frame %d" % frame)
        response = None
        cv2.imwrite('opencv%d.png' % frame, image)
        with open('opencv%d.png' % frame, 'rb') as image:
            content = image.read()
            encoded = base64.b64encode(content)
            response = client.face_detection({
                'content': content,
            })
        print("Succesfully returned from google on frame %d" % frame)
        joy = 1
        sorrow = 1
        surprise = 1
        anger = 1
        if(len(response.face_annotations) > 0):
            joy = response.face_annotations[0].joy_likelihood
            sorrow = response.face_annotations[0].sorrow_likelihood
            surprise = response.face_annotations[0].surprise_likelihood
            anger = response.face_annotations[0].anger_likelihood
        data = {
            #'image': encoded.decode("utf-8"),
            'joy': joy,
            'sorrow': sorrow,
            'surprise': surprise,
            'anger': anger
        }
    print("Done frame analysis on frame %d" % frame)
    return data


def main():
    video_to_mp3(video_path)
    vid = cv2.VideoCapture(video_path)
    vid.set(cv2.CAP_PROP_POS_AVI_RATIO,1)
    duration = vid.get(cv2.CAP_PROP_POS_MSEC)
    frames_needed = [i for i in range(0, int(duration), 5000)]

    p = Pool(8)
    print(frames_needed)
    results = p.map(analyze_frame, frames_needed)
    print(results)
    #with open('data.json', 'w') as file:
    #    json.dump(data, file, indent=4)

if __name__ == "__main__":
    main()
