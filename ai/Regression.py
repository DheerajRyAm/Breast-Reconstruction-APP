from sklearn.linear_model import LinearRegression
import numpy as np

# Trains a linear regression model with given datasets (Can change to diff regression models)
# Requires: datasets trainX and trainY as array
def model(trainX, trainY):
    model = LinearRegression()
    regressor.fit(trainX, trainY)
    return regressor

# Predicts implant size given parameter info and the model to use (can be changed to test best)
def predict(model, features):
    prediction = model.predict(features)
    return prediction[0]

# Test usage
# Make up training data for the model: trainX array of features and trainY implant size result

# Set the model = model(trainX, trainY)

# Get new input in array format ex. features = [topArea, sideArea, density]
# Set predicted = predict(model, features)