from flask import Flask, jsonify, request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  

affirmations = [
    "You're one in 8.142 billion!", 
    "You're super cool!", 
    "You smell super yummy!", 
    "You inspire others to be better!", 
    "You're going to do AWESOME things in life", 
    "You're a BADDIE",
    "Someone is missing you!"
]

@app.route('/')
def home(): 
    return "Welcome to affirmations!"

@app.route('/affirmations', methods=['GET'])
def get_affirmations():
    return jsonify({"affirmation": random.choice(affirmations)})

@app.route("/affirmation", methods=['POST'])
def add_affirmation():
    data = request.json
    new_affirmation = data.get("affirmation")
    if not new_affirmation or not isinstance(new_affirmation, str):
        return jsonify({"error": "please provide a valid affirmation"}), 400
    affirmations.append(new_affirmation)
    return jsonify({"message": "affirmation added!"}), 201

if __name__ == "__main__": 
    app.run(debug=True)
