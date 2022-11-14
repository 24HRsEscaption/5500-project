import re
import argparse
from string import punctuation

from g2p_en import G2p


def read_lexicon(lex_path):
    lexicon = {}
    with open(lex_path) as f:
        for line in f:
            temp = re.split(r"\s+", line.strip("\n"))
            word = temp[0]
            phones = temp[1:]
            if word.lower() not in lexicon:
                lexicon[word.lower()] = phones
    return lexicon


def get_phones(text, lex_path):
    text = text.rstrip(punctuation)
    lexicon = read_lexicon(lex_path)

    g2p = G2p()
    phones = []
    words = re.split(r"([,;.\-\?\!\s+])", text)
    for w in words:
        if w.lower() in lexicon:
            phones += lexicon[w.lower()]
        else:
            phones += list(filter(lambda p: p != " ", g2p(w)))
    
    phones = "{" + "}{".join(phones) + "}"
    phones = re.sub(r"\{[^\w\s]?\}", "{sp}", phones)
    phones = phones.replace("}{", " ")

    phones = phones.strip("\{\}").split()

    # print("Raw Text Sequence: {}".format(text))
    # print("Phoneme Sequence: {}".format(phones))

    return phones


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--text",
        type=str,
        default="",
        help="Raw text to convert to phones",
    )

    parser.add_argument(
        "--lex-path",
        type=str,
        required=True,
        help="Path to the lexicon file",
    )

    args = parser.parse_args()
    phones = get_phones(args.text, args.lex_path)

    print(phones)