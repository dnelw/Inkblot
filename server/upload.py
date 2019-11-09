import firebase_admin, json
from firebase_admin import credentials
from firebase_admin import firestore
from google.cloud import speech
from google.cloud.speech import enums
from google.cloud.speech import types
from pydub import AudioSegment
from multiprocessing import Pool

content = None
frames = None
# read frame data

def process_clip(content):

    client = speech.SpeechClient()

    audio = types.RecognitionAudio(content=content)
    config = types.RecognitionConfig(
        encoding = enums.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz = 48000,
        language_code='en-US')
    response = client.recognize(config, audio)

    text = []
    for result in response.results:
        text.append(result.alternatives[0].transcript)

    return ''.join(text)


def analyze(data):

    global content, frames
    index, start, finish, frame = data[0], data[1], data[2], data[3]
    text = process_clip(content[start:finish])
    return text


def upload():

    global content, frames

    with open("data.json") as f:
        frames = json.load(f)

    sound = AudioSegment.from_wav("video.wav")
    sound = sound.set_channels(1)
    sound.export("video.wav", format="wav")

    with open("video.wav", "rb") as audio_file:
        content = audio_file.read()

    # since the binary is read in as bytes, divide the content into roughly equal parts
    duration = len(content) // len(frames)

    start = 0
    finish = duration

    data = []

    for i, frame in enumerate(frames):
        frame["emotions"] = {
            emotion: score for emotion, score in frame.items() if emotion not in ("image", "text", "file")
        }
        frames[i] = {k: v for k, v in frame.items() if k not in ("anger", "joy", "sorrow", "surprise")}
        data.append((i, start, finish, frame))
        start += duration
        finish += duration

    with Pool(4) as pool:
        result = pool.map(analyze, data)

    for i, frame in enumerate(frames):
        frames[i]["text"] = result[i]
    with open("response.json", "w") as f:
        json.dump(frames, f)


if __name__  == '__main__':
    upload()