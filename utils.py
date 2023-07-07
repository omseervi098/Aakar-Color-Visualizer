import cv2
import numpy as np
from PIL import Image
import cv2
# from cv2 import cv2_imshow
# from google.colab.patches import cv2_imshow
import numpy as np
import pprint
# from IPython import display
from PIL import Image
from wizart.vision import ComputerVisionClient as vc
# img: a String of the path of the image
# detect_col: list of [B, G, R] value
# new_color: list [B, G, R] of the new color that you want for the wall

def wall_color(img, detect_col, new_color):
    image = cv2.imread(img)
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    green = np.uint8([[detect_col]])
    hsv_cl = cv2.cvtColor(green,cv2.COLOR_BGR2HSV)
    # print(hsv_green[0][0][0])

    # Define the range of colors to segment
    lower_color = np.array([hsv_cl[0][0][0] - 10, 40, 40])  # Lower bound for the color range (H, S, V)
    upper_color = np.array([hsv_cl[0][0][0] + 10, 255, 255])  # Upper bound for the color range (H, S, V)

    # Create a mask using the color range
    mask = cv2.inRange(hsv, lower_color, upper_color)

    # Apply the mask to the original image to extract the colored region
    colored_region = cv2.bitwise_and(image, image, mask=mask)

    for i in range(colored_region.shape[0]):
        for j in range(colored_region.shape[1]):
            if list(colored_region[i][j]) != [0,0,0]:
                image[i][j] = new_color
    
    return image

# with open('C:\Users\DELL\Desktop\Flask_CodeShastra\im_(52).jpg','rb') as f:
#     img = f.read()

# img1 = wall_color(img,'224,152,26','84,162,53')
# print(img1)

def wall_detects(img,segment,new_color):
    image = cv2.imread(img)
    client = vc(
    token="QwwG6B6PKrF42nWPuDIcYygYHaTyaL1nGibu9Qo0qkzovrypYKA3AFztegjV"
)
    mask = client.segmentation(
    resource=img,
    feature=vc.feature[segment]
)
    newcl = list(map(int,new_color.split(",")))
    
    m,n,k=image.shape
    for i in range(m):
        for j in range(n):
            if(mask[i][j]==255):
                image[i][j]=(newcl[0],newcl[1],newcl[2])
    return image
