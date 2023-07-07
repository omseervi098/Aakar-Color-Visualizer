from flask import Flask, request,Response,jsonify, send_file
from flask_cors import CORS
import cv2
import os
import base64
import numpy as np
from utils import wall_color
from utils import wall_detects
import boto3
from werkzeug.utils import secure_filename
import cloudinary
from PIL import Image
import cloudinary
from cloudinary.uploader import upload
from cloudinary.utils import cloudinary_url
import uuid

# // Config
cloudinary.config(
  cloud_name = "djcgdnw3w",
  api_key = "423878669763541",
  api_secret = "F2zdBXkU9xXALZQWe3iciplLu_k",
  secure = True
)

# app = Flask(_name_)
# s3 = boto3.client('s3')
# from cloudinary.uploader import upload
# from cloudinary.utils import cloudinary_url
from _config import uploadImg

UPLOAD_FOLDER = 'C:/Users/DELL/Desktop/Flask_CodeShastra/uploads'
app = Flask(__name__)
cors = CORS(app, resources={r"/*"})

def uploadImg(img,file):
  upload(img,public_id=file)
  url,options = cloudinary_url(file)
  return url


@app.route("/",methods=['GET','POST'])
def index():
    print("Hello world")
    return Response("Hello world")
    
@app.route("/wallcl",methods=['POST','GET'])
def wallCl():
    target=os.path.join(UPLOAD_FOLDER)
    if not os.path.isdir(target):
        os.mkdir(target)
    img = request.files['img']
    filename = secure_filename(img.filename)
    destination="/".join([target, filename])
    img.save(destination)
    oldCl = request.form['oldCl']
    print(oldCl.split(","))
    oldCl = list(map(int,oldCl.split(",")))
    # print(oldCl)
    newCl = request.form['newCl']
    newCl = list(map(int,newCl.split(",")))
    
    img1 = wall_color(destination,oldCl,newCl)
    # img1 = Image.fromarray(img1, 'RGB')
    # img1.save('out.png')
    # filename1 = secure_filename(img1.filename)
    # destination1="/".join([target, filename1])
    # img1.save(destination1)

    file_new = filename.replace('.jpg','-') + str(uuid.uuid1()) + '.jpg'
    cv2.imwrite(file_new,img1)
    with open(file_new,'rb') as f:
        img_new = f.read()

    # img_new.save('out.jpg')
    # img_new = Image.fromarray(img1, 'RGB')
    # img_new.save('out.jpg')
    url = uploadImg(img_new,file_new)
    # img1.save(destination)147
    # s3.upload_fileobj(img_new, 'indesign12', 'out.jpg')

    # Return the URL of the uploaded image
    # return jsonify({'image_url': 'https://indesign12.s3.amazonaws.com/out.jpg'})
    url=url+".jpg"
    return jsonify({"img":url})
    # return send_file(destination,mimetype='image/png')
    
@app.route("/segmentdetect",methods=['POST','GET'])
def wallDetect():
    target=os.path.join(UPLOAD_FOLDER)
    if not os.path.isdir(target):
        os.mkdir(target)
    img = request.files['img']
    filename = secure_filename(img.filename)
    destination="/".join([target, filename])
    img.save(destination)
    segment = request.form['segment']
    # print(oldCl)
    newCl = request.form['newCl']
    
    img1 =wall_detects(destination,segment,newCl)
    # img1 = Image.fromarray(img1, 'RGB')
    # img1.save('out.png')
    # filename1 = secure_filename(img1.filename)
    # destination1="/".join([target, filename1])
    # img1.save(destination1)

    file_new = filename.replace('.jpg','-') + str(uuid.uuid1()) + '.jpg'
    cv2.imwrite(file_new,img1)
    with open(file_new,'rb') as f:
        img_new = f.read()

    # img_new.save('out.jpg')
    # img_new = Image.fromarray(img1, 'RGB')
    # img_new.save('out.jpg')
    url = uploadImg(img_new,file_new)
    # img1.save(destination)147
    # s3.upload_fileobj(img_new, 'indesign12', 'out.jpg')

    # Return the URL of the uploaded image
    # return jsonify({'image_url': 'https://indesign12.s3.amazonaws.com/out.jpg'})
    url=url+".jpg"
    return jsonify({"img":url})
    # return send_file(destination,mimetype='image/png')
@app.route("/index")
def home():
    print("Heloo")
    return Response("home")


if __name__ == '__main__':
    app.run(port=5000)