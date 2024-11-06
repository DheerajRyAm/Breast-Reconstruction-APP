from sklearn.linear_model import LinearRegression
import numpy as np
import cv2
from Segmentation import segment
import os

# Trains a linear regression model with given datasets (Can change to diff regression models)
# Requires: datasets trainX and trainY as array
def model(trainX, trainY):
    model = LinearRegression()
    model.fit(trainX, trainY)
    return model

# Predicts implant size given parameter info and the model to use (can be changed to test best)
def predict(model, features):
    prediction = model.predict(features)
    return prediction[0]

# Test usage
# Training data for the model: trainX array of features and trainY implant size result
print("\nTraining:")
top_areas = []
side_areas = []

input_dir = "ai/input"
image_files = sorted(os.listdir(input_dir))
for i in range(0, len(image_files), 2):
    print("")
    # Assign files as top and side views
    top_image_path = os.path.join(input_dir, image_files[i])
    side_image_path = os.path.join(input_dir, image_files[i + 1])

    # Calculate area for both top and side views
    top_area, h, w = segment(top_image_path, f"ai/output/segmented_MLO_{i}.jpg")
    side_area, h, w = segment(side_image_path, f"ai/output/segmented_CC_{i}.jpg")

    # Append areas to respective lists
    top_areas.append(top_area)
    side_areas.append(side_area)


# Stack areas into a feature matrix
trainX = np.column_stack((top_areas, side_areas))
trainY = np.array([150,155,140])

# Set the model = model(trainX, trainY)
model = model(trainX, trainY)
# Get new input in array format ex. features = [topArea, sideArea, density]
top_image_path = "ai/Pt 2 LCC.jpg"
side_image_path = "ai/Pt 2 LMLO.jpg"

print("\nPredicting:")
top_area, h, w = segment(top_image_path, f"ai/output/segmented_MLO_TEST.jpg")
side_area, h, w = segment(side_image_path, f"ai/output/segmented_CC_TEST.jpg")
features = np.array([top_area, side_area]).reshape(1, -1)
# Set predicted = predict(model, features)
predicted = predict(model, features)
print(f"\nPredicted implant size: {predicted}")