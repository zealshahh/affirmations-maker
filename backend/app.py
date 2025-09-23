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
    "Someone is missing you!",
    "You are enough just as you are",
    "Your potential is limitless",
    "You radiate positivity",
    "You are a magnet for success",
    "Your smile brightens the world",
    "You are brave and strong",
    "You make a difference every day",
    "You are worthy of love and respect",
    "Your ideas are valuable",
    "You attract happiness effortlessly",
    "You are a beautiful person inside and out",
    "You have the power to change your life",
    "Your dreams are valid",
    "You are courageous",
    "You inspire those around you",
    "You are capable of amazing things",
    "You are a gift to this world",
    "You have a bright future ahead",
    "You deserve to be happy",
    "Your kindness is contagious",
    "You are creative and resourceful",
    "You have inner strength",
    "You are confident in your abilities",
    "You are proud of yourself",
    "You are worthy of success",
    "Your presence matters",
    "You make life more fun",
    "You are unique and special",
    "You are unstoppable",
    "You are full of energy and vitality",
    "You attract positive people",
    "You are a source of inspiration",
    "You are deserving of great things",
    "You are making progress every day",
    "You are full of love and compassion",
    "You are fearless",
    "You are an amazing friend",
    "You have a beautiful soul",
    "You are filled with joy",
    "You are constantly growing",
    "You are amazing just as you are",
    "You are loved more than you know",
    "You have a bright mind",
    "You are talented",
    "You can achieve anything",
    "You are patient and persistent",
    "You are confident in who you are",
    "You bring happiness to others",
    "You are thoughtful and kind",
    "You are an amazing human being",
    "You are deserving of all good things",
    "You are a light in the world",
    "You are important",
    "You are successful in your own way",
    "You are proud of your accomplishments",
    "You are beautiful inside and out",
    "You are unstoppable when you set your mind to it",
    "You are a problem solver",
    "You are full of potential",
    "You are a blessing to others",
    "You are talented and creative",
    "You are making a positive impact",
    "You are resilient",
    "You are fearless in pursuing your goals",
    "You are smart and capable",
    "You are amazing at what you do",
    "You are a source of positivity",
    "You are appreciated",
    "You are full of confidence",
    "You are successful",
    "You are kind-hearted",
    "You are worthy of respect",
    "You are courageous and strong",
    "You are full of light",
    "You are constantly improving",
    "You are valuable",
    "You are proud of who you are",
    "You are ambitious and driven",
    "You are making a difference",
    "You are talented beyond measure",
    "You are a joy to be around",
    "You are loved and cherished",
    "You are unstoppable in achieving your dreams",
    "You are full of hope",
    "You are extraordinary",
    "You are unique and wonderful",
    "You are a positive force in the world",
    "You are growing stronger every day",
    "You are amazing just being you",
    "You are destined for greatness",
    "You are inspiring others with your actions",
    "You are proud of your journey"
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
