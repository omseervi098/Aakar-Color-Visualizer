from flask import Flask, request,Response,jsonify
from flask_cors import CORS
import cv2
import os
import numpy as np
from utils import wall_color
# from werkzeug.utils import secure_filename

UPLOAD_FOLDER = 'C:/Users/DELL/Desktop/Flask_CodeShastra/uploads'
app = Flask(__name__)
# CORS(app)


# @app.route("/",methods=['GET','POST'])
# def index():
#     print("Hello world")
#     return Response("Hello world")
    
@app.route("/wallcl/",methods=['POST','GET'])
def wallCl():
    # target=os.path.join(UPLOAD_FOLDER,'test_docs')
    target=request.json["input"]
    print(target)
    return "hi"
    # if not os.path.isdir(target):
    #     os.mkdir(target)
    # img = request.files['img']
    # filename = secure_filename(img.filename)
    # destination="/".join([target, filename])
    # img.save(destination)
    # oldCl = request.form['oldCl']
    # oldCl = oldCl.split(",")
    # newCl = request.form['newCl']
    # newCl = newCl.split(",")
    # return jsonify(wall_color(img,oldCl,newCl))

# @app.route("/index")
# def home():
#     print("Heloo")
#     return Response("home")


if __name__ == '__main__':
    app.run(port=5000)