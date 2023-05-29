from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['POST'])
def post_data():
    data = request.get_json()
    code = data["message"]
    params = data["params"]
    if params:
        os.system(f'echo "{code}" > temp')
        os.system(f'echo "{params}" | ./compiler -f temp  > output')
    else:
        os.system(f'echo "{code}" > temp && ./compiler -f temp > output')
    output = ""
    with open("output", "r") as f:
        output = f.read()
    if output [0:18] == "Enter prog params:":
        output = output[19:]
    if output[0:17] == "done interpreting":
        output = output[18:]
    response = {'message': f'{output}'}
    return jsonify(response)


if __name__ == '__main__':
    app.run()