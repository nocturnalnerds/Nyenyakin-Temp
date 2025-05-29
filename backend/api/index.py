import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS

with open('model.pkl', 'rb') as f:
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
    data = request.json
    input_features = preprocess_data(data)
    # print(input_features)
    input_features = scaler.transform(input_features)
    # print(input_features)
    prediction = model.predict(input_features)[0]
    # print(prediction)
    return jsonify({'prediction': str(prediction)})

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello, world!'})

if __name__ == "__main__":
    app.run(debug=True, port=5000)