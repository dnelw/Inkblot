import cv2
import time
import os
import sys
import json
import base64
import functools
from multiprocessing import Pool
from multiprocessing import cpu_count
from google.cloud import vision

video_path = 'video.mp4'
client = vision.ImageAnnotatorClient()
debug_mode = 1

def video_to_mp3(file_name):
    """ Transforms video file into a MP3 file """
    try:
        file, extension = os.path.splitext(file_name)
        # Convert video into .wav file
        os.system('ffmpeg -y -i {file}{ext} {file}.wav'.format(file=file, ext=extension))
    except OSError as err:
        print(err.reason)
        exit(1)


def analyze_frame(frame):
    print("Analyzing frame %d" % frame)
    success = False
    image = None
    vid = cv2.VideoCapture(video_path)
    vid.set(cv2.CAP_PROP_POS_MSEC, frame)
    success, image = vid.read()
    vid.release()
    if(success):
        print("Successful read on frame %d" % frame)
        response = None
        filename = 'opencv%d.png' % frame
        cv2.imwrite(filename, image)
        with open(filename, 'rb') as image:
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
            'image': encoded.decode("utf-8"),
            'joy': joy,
            'sorrow': sorrow,
            'surprise': surprise,
            'anger': anger,
        }
        if(debug_mode):
            data['file'] = filename
    print("Done frame analysis on frame %d" % frame)
    return data


def main(intervals = 5000):
    video_to_mp3(video_path)
    vid = cv2.VideoCapture(video_path)
    vid.set(cv2.CAP_PROP_POS_AVI_RATIO,1)
    duration = vid.get(cv2.CAP_PROP_POS_MSEC)
    vid.release()
    frames_needed = [i for i in range(0, int(duration), intervals)]
    workers = min(len(frames_needed), cpu_count() * 2)
    print("Initialized a pool of %d workers" % workers)
    with Pool(workers) as p:
        results = p.map(analyze_frame, frames_needed)
    print("Analyzed %d frames" % len(results))
    with open('data.json', 'w') as file:
        json.dump(results, file, indent=4)

if __name__ == "__main__":
    start = time.time()
    main()
    print(time.time() - start)
