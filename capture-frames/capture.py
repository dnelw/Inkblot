import cv2
import time

camera = cv2.VideoCapture(0)

while True:
    if int(time.time()) % 5 == 0:
        return_value, image = camera.read()
        cv2.imwrite('opencv.png', image)
del(camera)
