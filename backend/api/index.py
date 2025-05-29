import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

model_path = os.path.join(os.path.dirname(__file__), '..', 'model.pkl')
with open(model_path, 'rb') as f:
    scaler, model = pickle.load(f)

app = Flask(__name__)
CORS(app)

def preprocess_data(data):
    weight = float(data['weight'])
    height = float(data['height'])/100
    bmi = weight/(height**2)

    gender = 1 if data['gender'].lower() == "male" else 0
    marital = 1 if data['maritalStatus'].lower() == "married" else 0
    neck = 1 if data['neckPain'].lower() == "yes" else 0
    head = 1 if data['headache'].lower() == "yes" else 0

    features = [
        data['age'],
        gender,
        data['coffeeIntake'],
        data['teaIntake'],
        data['electronicsUsage'],
        marital,
        neck,
        bmi,
        head
    ]

    return [features]

@app.route('/api/psqi-test', methods=['POST'])
def predict():
    try:
        data = request.json
        input_features = preprocess_data(data)
        input_features = scaler.transform(input_features)
        prediction = model.predict(input_features)[0]
        return jsonify({'prediction': str(prediction)})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/hello', methods=['GET'])
def hello():
    try:
        return jsonify({'message': 'Hello, world!'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def handler(environ, start_response):
    return app.wsgi_app(environ, start_response)