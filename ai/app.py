# pip install flask
from flask import Flask, request, jsonify
from Segmentation import segment 

app = Flask(__name__)

@app.route('/segment', methods=['POST'])
def segment_image():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    filename = "mammogram.jpg"
    file.save(filename)

    area = segment(filename)
    return jsonify({"area": area})

if __name__ == '__main__':
    app.run(port=5000)
