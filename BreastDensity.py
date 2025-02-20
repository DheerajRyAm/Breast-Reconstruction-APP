#!pip install numpy==1.25.2 scipy scikit-image matplotlib scikit-learn pillow joblib

from skimage.measure import label, regionprops
import numpy as np
import scipy
from skimage import io, measure
from skimage.color import rgb2gray
from skimage.filters import threshold_otsu
from PIL import Image
import glob
import os
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error
import joblib
import matplotlib.pyplot as plt

# Print versions of key libraries
print("NumPy version:", np.__version__)
print("SciPy version:", scipy.__version__)

# Function to isolate the breast region in a mammogram with margin
def isolate_breast_region(image, margin=20, threshold_value=0.5):
    # Convert to grayscale if it's not
    if len(image.shape) == 3:
        image = rgb2gray(image)
    
    # Threshold to separate breast region from background (binary image)
    thresh = image > threshold_value  # This creates a binary image based on threshold
    
    # Label connected components in the binary image
    labeled_image = label(thresh)
    regions = regionprops(labeled_image)
    
    # Find the largest region based on area (presumably the breast)
    if regions:
        largest_region = max(regions, key=lambda r: r.area)
        minr, minc, maxr, maxc = largest_region.bbox
        
        # Add margin to ensure the entire breast is captured
        minr = max(minr - margin, 0)
        minc = max(minc - margin, 0)
        maxr = min(maxr + margin, image.shape[0])
        maxc = min(maxc + margin, image.shape[1])
        
        # Crop to the bounding box with margin
        breast_region = image[minr:maxr, minc:maxc]
        return breast_region
    else:
        return image  # If no regions found, return the original image

# Function to compute average pixel intensity and texture features
def extract_features(image):
    # Isolate the breast region
    breast_region = isolate_breast_region(image)
    
    # Calculate pixel intensity features
    mean_intensity = np.mean(breast_region)  # Mean intensity of the breast region
    std_intensity = np.std(breast_region)  # Standard deviation of intensity
    skewness = np.mean((breast_region - mean_intensity) ** 3) / (std_intensity ** 3 + 1e-5)  # Skewness
    
    # Return extracted features
    return [mean_intensity, std_intensity, skewness], mean_intensity, breast_region

# Load images from the specified folder
def load_images(folder_path, img_size=(224, 224)):
    images = []
    image_paths = glob.glob(os.path.join(folder_path, '*.jpg'))
    for img_path in image_paths:
        img = Image.open(img_path).convert('L')  # Convert to grayscale
        img = img.resize(img_size, Image.LANCZOS)  # High-quality resizing
        images.append(np.array(img))
    return images

# Define the folder path
folder_path = '/ai/input'
images = load_images(folder_path)

# Extract features and use mean intensity as a pseudo-density label
X_features = []
y_labels = []
breast_regions = []

# Loop through images, extract features, and calculate density
for img in images:
    features, mean_intensity, breast_region = extract_features(img)
    X_features.append(features)
    y_labels.append(mean_intensity)
    breast_regions.append(breast_region)

X_features = np.array(X_features)
y_labels = np.array(y_labels)

# Split data into training and validation sets
X_train, X_valid, y_train, y_valid = train_test_split(X_features, y_labels, test_size=0.2, random_state=42)

# Train model with Gradient Boosting Regressor
model = GradientBoostingRegressor()
model.fit(X_train, y_train)

# Validate model
y_pred = model.predict(X_valid)
mae = mean_absolute_error(y_valid, y_pred)
print(f'Mean Absolute Error: {mae}')

# Save the model
joblib.dump(model, 'density_model.pkl')

# Output the breast regions and their mean intensities
for idx, (breast_region, mean_intensity) in enumerate(zip(breast_regions, y_labels)):
    plt.imshow(breast_region, cmap='gray')
    plt.title(f'Image {idx + 1}: Mean Intensity (Density): {mean_intensity:.2f}')
    plt.axis('off')
    plt.show()

# Print all mean intensity values after processing
print("\nAll Mean Intensities (Densities):")
for mean_intensity in y_labels:
    print(mean_intensity)
