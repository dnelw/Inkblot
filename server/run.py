import subprocess
import os, sys

CAPTURE = False

if CAPTURE:
    if os.path.exists("video.wav"):
        subprocess.call(["chmod", "777", "capture-frames/video.wav"], cwd="../")
    if os.path.exists("video.wav"):
        subprocess.call(["chmod", "777", "video.wav"])
    if os.path.exists("video.wav"):
        os.remove("../capture-frames/video.wav")
    if os.path.exists("video.wav"):
        os.remove("video.wav")
    subprocess.call(["python3", "capture.py"], cwd="../capture-frames")
    subprocess.call(["cp", "../capture-frames/video.wav", "./"])
    subprocess.call(["cp", "../capture-frames/data.json", "./"])
subprocess.call(["python3", "upload.py"])
subprocess.call(["rm", "-rf", "*.png"], cwd="../capture-frames")