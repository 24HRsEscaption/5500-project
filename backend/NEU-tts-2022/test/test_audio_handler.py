import pytest
import audio_handler


@pytest.fixture
def client():
    audio_handler.app.config['TESTING'] = True

    with audio_handler.app.test_client() as client:
        yield client

def test_get_phones(client):
    # data = {'text': "Hello there", "lex_path": "lexicon/librispeech-lexicon.txt", }
    data = {'text': "Hello there"}

    rv = client.post('/get_phones', json=data)
    json_data = rv.get_json()
    assert str(json_data) == "['HH', 'AH0', 'L', 'OW1', 'DH', 'EH1', 'R']"

def test_get_audio(client):
    data = {'text': "Hello there"}

    rv = client.post('/get_audio', json=data)
    # TODO: