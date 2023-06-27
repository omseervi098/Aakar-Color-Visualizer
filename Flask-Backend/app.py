from flask import Flask, request,Response,jsonify, send_file
from flask_cors import CORS
import cv2
import numpy as np
from utils import wall_color
from utils import wall_detects
from utils import segment_color
from werkzeug.utils import secure_filename
import cloudinary
from PIL import Image
import cloudinary
from cloudinary.uploader import upload
from cloudinary.utils import cloudinary_url
import uuid
import ast
# // Config
cloudinary.config(
  cloud_name = "djcgdnw3w",
  api_key = "423878669763541",
  api_secret = "F2zdBXkU9xXALZQWe3iciplLu_k",
  secure = True
)

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
    img = request.files['img']
    filename = secure_filename(img.filename)
    filename1 = filename.replace('.jpg','-') + str(uuid.uuid1()) + '.jpg'
    originalImgUrl = uploadImg(img,filename1)
    originalImgUrl = originalImgUrl+".jpg"
    oldCl = request.form['oldCl']
    oldCl = list(map(int,oldCl.split(",")))
    newCl = request.form['newCl']
    newCl = list(map(int,newCl.split(",")))
    img1 = wall_color(originalImgUrl,oldCl,newCl)
    _, img_new = cv2.imencode('.jpg', img1)
    img_new=img_new.tobytes()
    filename_new = filename.replace('.jpg','-') + str(uuid.uuid4()) + '.jpg'
    url = uploadImg(img_new,filename_new)
    url=url+".jpg"
    return jsonify({"img":url})
    
@app.route("/segmentdetect",methods=['POST','GET'])
def wallDetect():
    img = request.files['img']
    
    filename = secure_filename(img.filename)
    filename1 = filename.replace('.jpg','-') + str(uuid.uuid1()) + '.jpg'
    originalImgUrl = uploadImg(img,filename1)
    originalImgUrl = originalImgUrl+".jpg"
    segment = request.form['segment']
    newCl = request.form['newCl']
    img1 =wall_detects(originalImgUrl,segment,newCl)
    _, img_new = cv2.imencode('.jpg', img1)
    img_new=img_new.tobytes()
    filename_new = filename.replace('.jpg','-') + str(uuid.uuid1()) + '.jpg'
    url = uploadImg(img_new,filename_new)
    url=url+".jpg"
    return jsonify({"img":url})

@app.route("/color",methods=['POST','GET'])
def segmentColor():
    # print("Hello",request.form['img'])
    # if(request.form['img']!=None):
    #     originalImgUrl=request.form['img']
    #     filename=originalImgUrl.split("/")[-1]
    # else:
    img = request.files['img']
    filename = secure_filename(img.filename)
    filename1 = filename.replace('.jpg','-') + str(uuid.uuid1()) + '.jpg'
    originalImgUrl = uploadImg(img,filename1)
    originalImgUrl = originalImgUrl+".jpg"
    coords = request.form['coords']
    coords=ast.literal_eval(coords)
    print(originalImgUrl)
    print(coords)
    segment = request.form['segment']
    newCl = request.form['newCl']
    
    img1 =segment_color(originalImgUrl,coords,segment,newCl)
    _, img_new = cv2.imencode('.jpg', img1)
    img_new=img_new.tobytes()
    filename_new = filename.replace('.jpg','-') + str(uuid.uuid1()) + '.jpg'
    url = uploadImg(img_new,filename_new)
    url=url+".jpg"
    return jsonify({"img":url})

@app.route("/index")
def home():
    print("Heloo")
    return Response("home")


if __name__ == '__main__':
    app.run(port=5000)