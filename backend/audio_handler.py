from flask import Flask, send_file, request
import json
import sys

app = Flask(__name__)

@app.route('/get_audio', methods=['POST'])
def AudioHandler():
    print(json.loads(request.get_data()).get('energy', None), file=sys.stderr)
    print(json.loads(request.get_data()).get('pitch', None), file=sys.stderr)
    return send_file('test-audio.mp3', mimetype='audio/mp3')
