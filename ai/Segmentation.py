# pip install inference supervision
# Have cv2 and numpy installed too

# python ai/Segmentation.py

from inference import get_model
import supervision as sv
import cv2
import numpy as np
import os

os.environ['ROBOFLOW_API_KEY'] = 'sDVzESlGa38E7jn9kI6I'

def segment(image_file, output_path="ai/segmented_contours.jpg"):
    # define the image to use for inference
    image = cv2.imread(image_file)

    # gaussian blur
    image = cv2.GaussianBlur(image, (5, 5), 0) 

    # load pre-trained yolov8n model
    model = get_model(model_id="breast-segmentation-dxcby/3", api_key=os.getenv("ROBOFLOW_API_KEY"))

    # run inference on our chosen image
    results = model.infer(image)

    total_area = 0
    contour_image = np.zeros(image.shape, dtype=np.uint8)

    for prediction in results[0].predictions:
        points = prediction.points
        contour_points = np.array([[point.x, point.y] for point in points], dtype=np.int32)

        # Calculate the area of the contour
        area = cv2.contourArea(contour_points)
        total_area += area

        cv2.drawContours(contour_image, [contour_points], contourIdx=-1, color=(255, 255, 255), thickness=2)

    print(f"Total Area of Segmented Image: {total_area} pixels")
    # all images are 8.53x 11.09 In (2560 x 3328 pixels at 300 ppi).
    area_scaled = total_area / 90000

    # Display the contour image
    cv2.imwrite(output_path, contour_image)

    return area_scaled


image_file = "ai/Pt 1 LMLO.jpg"
area_scaled = segment(image_file)
print(f"Total Area of Segmented Image: {area_scaled} in^2")