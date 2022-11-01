from flask import Flask, send_file, request
import json
import sys

app = Flask(__name__)

@app.route('/get_audio', methods=['POST'])
def AudioHandler():
    print(json.loads(request.get_data()).get('energy', None), sys.stderr)
    print(json.loads(request.get_data()).get('pitch', None), sys.stderr)
    # args = {
    #   'mode': 'single',
    #   'restore_step': 900000,
    #   'preprocess_config': 'config/LJSpeech/preprocess.yaml',
    #   'model_config': 'config/LJSpeech/model.yaml',
    #   'train_config': 'config/LJSpeech/train.yaml',
    # }
    # # Check source texts
    # args.text = json.loads(request.get_data()).get('text', 'test')
    # args.pitch_control = json.loads(request.get_data()).get('pitch', 1.0)
    # args.energy_control = json.loads(request.get_data()).get('energy', 1.0)

    # synthesize.synthesize_with_args(args)
    return send_file('test-audio.mp3', mimetype='audio/mp3')
