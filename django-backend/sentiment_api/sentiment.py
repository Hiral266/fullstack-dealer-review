from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/sentiment', methods=['POST'])
def analyze_sentiment():
    text = request.json.get('text', '')
    if "good" in text.lower():
        return jsonify(sentiment="positive")
    elif "bad" in text.lower():
        return jsonify(sentiment="negative")
    return jsonify(sentiment="neutral")

if __name__ == '__main__':
    app.run(port=5005)
