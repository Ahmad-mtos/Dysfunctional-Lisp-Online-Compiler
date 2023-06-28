from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import uuid

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['POST'])
def post_data():
    data = request.get_json()
    code = data["message"]
    params = data["params"]
    filename = str(uuid.uuid4().hex)
    if params:
        os.system(f'echo "{code}" > {filename}')
        os.system(f'echo "{params}" | ./compiler -f {filename}  > {filename}.out')
    else:
        os.system(f'echo "{code}" > temp && ./compiler -f {filename}  > {filename}.out')
    os.system(f'rm {filename}')
    output = ""
    with open(f"{filename}.out", "r") as f:
        output = f.read()
    if output [0:18] == "Enter prog params:":
        output = output[19:]
    if output[0:17] == "done interpreting":
        output = output[18:]
    response = {'message': f'{output}'}
    os.system(f'rm {filename}.out')
    return jsonify(response)

@app.route('/', methods=['GET'])
def home():
    return "<h1> Welcome to flask server! </h1>"

if __name__ == '__main__':
    app.run()