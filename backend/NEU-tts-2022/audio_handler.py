from flask import Flask, send_file, request, make_response
import json
import sys
import synthesize  
import text2phones

app = Flask(__name__)

with open("handler_args.json", "r") as f:
    args = json.load(f)

@app.route('/get_audio', methods=['POST'])
def AudioHandler():
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


@app.route('/get_phones', methods=['POST'])
def Text2PhoneHandler():
    kwargs = {}
    request_dict = json.loads(request.get_data())
    print(request_dict)

    if 'text' not in request_dict:
        return '`text` param not provided', 400
    
    kwargs['text'] = request_dict.get('text')
    kwargs['lex_path'] = request_dict.get('lex_path', args["lex_path"])

    result = text2phones.get_phones(**kwargs)
    response = make_response(result)
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response
