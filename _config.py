import cloudinary
from cloudinary.uploader import upload
from cloudinary.utils import cloudinary_url
import uuid
import cv2

# // Config
cloudinary.config(
  cloud_name = "djcgdnw3w",
  api_key = "423878669763541",
  api_secret = "F2zdBXkU9xXALZQWe3iciplLu_k",
  secure = True
)

# // Upload
def uploadImg(img,file):
  upload(img,public_id=file)
  url,options = cloudinary_url(file)
  return url


# // Transform
# url, options = cloudinary_url("olympic_flag", width=100, height=150, crop="fill")
# print(url,options)