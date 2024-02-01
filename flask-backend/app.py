from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import uuid
import threading

app = Flask(__name__)
CORS(app)

def run_prog(filename, params):
    if params:
        os.system(f'echo "{params}" | ./compiler -f {filename}  > {filename}.out')
    else:
        os.system(f'./compiler -f {filename}  > {filename}.out')

@app.route('/api/data', methods=['POST'])
def post_data():
    data = request.get_json()
    code = data["message"]
    params = data["params"]

    filename = str(uuid.uuid4().hex)
    os.system(f'echo "{code}" > {filename}')

    MAX_TIMEOUT = 0.5
    task = threading.Thread(target=run_prog, args=(filename, params))
    task.start()
    task.join(timeout=MAX_TIMEOUT)

    if task.is_alive():
        os.system(f"echo 'execution timeout!' > {filename}.out")

    os.system(f'rm {filename}')

    output = ""
    with open(f"{filename}.out", "r") as f:
        output = f.read()
    if output [0:18] == "Enter prog params:":
        output = output[19:]
    if output[0:17] == "done interpreting":
        output = output[18:]
    os.system(f'rm {filename}.out')
    response = {'message': f'{output}'}
    return jsonify(response)

@app.route('/', methods=['GET'])
def home():
    return "<h1> Welcome to flask server! </h1>"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)