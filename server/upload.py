import firebase_admin, json
from firebase_admin import credentials
from firebase_admin import firestore
from google.cloud import speech
from google.cloud.speech import enums
from google.cloud.speech import types
from pydub import AudioSegment
from multiprocessing import Pool
import pickle

content = None
frames = None
# read frame data

def process_clip(filepath):

    client = speech.SpeechClient()

    audio = types.RecognitionAudio(uri='gs://audio-hackprinceton19/video.wav')
    config = types.RecognitionConfig(
        encoding = enums.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz = 48000,
        language_code='en-US',
        enable_word_time_offsets = True)
    response = client.long_running_recognize(config=config, audio=audio).result()
    return response.results

def split():
    data = None
    with open("test.pickle",  "rb") as f:
        data = pickle.load(f)
    i = 0

def upload():

    global content, frames

    with open("data.json") as f:
        frames = json.load(f)

    audio_filepath = "./video.wav"
    sound = AudioSegment.from_wav(audio_filepath)
    sound = sound.set_channels(1)
    sound.export(audio_filepath, format="wav")

    trans_results = process_clip(audio_filepath)
    content = []
    for i in range(len(trans_results)):
        content.append(trans_results[i].alternatives[0].words)
    content = [(content[i][j].start_time.seconds, content[i][j].start_time.nanos, content[i][j].end_time.seconds, content[i][j].end_time.nanos, content[i][j].word) for i in range(len(content)) for j in range(len(content[i]))]

    with open("test.pickle", "wb") as f:
        pickle.dump(content, f)
    with open("lmao.txt", "w") as file:
        file.write(str(trans_results))

if __name__  == '__main__':
    #upload()
    split()