# Inkblot
A digital tool for therapists

## Description
Learn more about our project at our [devpost](https://devpost.com/software/inkblot)

## Requirements
* NodeJS
* NPM
* Angular CLI
* Python3

## How to Run

### Front End / UI
If you dont have Angular CLI installed, first run (you might need sudo)
> `npm install -g @angular/cli`

Under *Inkblot/front_end/* run the command
> `npm install && ng serve`

You can now access the page at http://localhost:4200/

### Back End / Flask Server (API)
Make sure to install all the python requirements.

Under Inkblot/server/ run the command
> `pip install -r requirements.txt`

To start the API locally run
> `python3 app.py`

The server will by default run on port 80 and you may need sudo permissions.
> `sudo python3 app.py`

## IMPORTANT NOTE
### Pointing the WebApp to the correct API endpoint
The API is meant to be run on a GCP Compute Instance. To direct the front-end to the correct API to use, change
> `url = "http://35.221.34.118/process/";`

To where your API is being hosted. If running it locally, change it to
> `url = "http://127.0.00.1/process/";`

This is located in *Inkblot/front_end/src/app/services/getdata.service.ts*

### Pointing the API to a Bucket
Under */Users/daniwang/PRMHackPrinceton/server/capture.py* the API expects 2 things

* It needs a path to a video, which by default is included in this repo.
* It also needs the name to a google bucket to push the extracted .wav file to
> video_path = '../FACIAL_EXPR.mp4'
> google_bucket = 'audio-hackprinceton19'

### Caveats to Running Locally
* You might experience CORS blocking you from calling your API if you run both the front-end and back-end locally
* You will need to set up a GCP API Key and enable access to both Google Vision API as well as Google Speech to Text API
  * Vision: https://cloud.google.com/vision/docs/
  * Speech to Text: https://cloud.google.com/speech-to-text/
