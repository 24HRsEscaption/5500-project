from flask import Flask, send_file, request, make_response
import json
import sys
import synthesize  

app = Flask(__name__)

@app.route('/get_audio', methods=['POST'])
def AudioHandler():
    args = {
      'mode': 'single',
      'restore_step': 900000,
      'preprocess_config': 'config/LJSpeech/preprocess.yaml',
      'model_config': 'config/LJSpeech/model.yaml',
      'train_config': 'config/LJSpeech/train.yaml',
      'source': None,
      'speaker_id': 0
    }
    # Check source texts
    request_dict = json.loads(request.get_data())
    print(request_dict)
    args['text'] = request_dict.get('text', 'none')
    args['pitch_control'] = request_dict.get('pitch', 1.0)
    args['energy_control'] = request_dict.get('energy', 1.0)
    args['duration_control'] = request_dict.get('duration', 1.0)
    synthesize.synthesize_with_args(args)
    response = make_response(
        send_file(
            'output/result/LJSpeech/' + args['text'] + '.wav',
            mimetype='audio/wav'
        )
    )
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response
