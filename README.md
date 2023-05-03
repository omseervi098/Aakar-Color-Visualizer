
# AAkar

- A ```Color Visualizer``` where users can upload image of the room and can try different suggested colors.
- This Project was built during 24 hour hackathon codeshashtra 9.0 organised by DJCSI.



## Features

- Segmentation of ```walls```, ```floor```, ```ceiling``` using wizart api.
- Detect wall colors and suggesting suitable colors.
- Works accurately on almost images.
 

## Run Locally

Clone the project

```bash
  https://github.com/omseervi098/Aakar-Color-Visualizer
```

Go to the project directory Frontend

```bash
  cd Frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon index.js
```

Then Go to project directory Backend-flask
and install all required python library using

``` pip install -r requirements.txt```

Then run flask app

```python app.py```

## Tech Stack

**Client:** ReactJS, Bootstrap

**Server:** Wizart API, Image processing





## Demo

### Home page of AAakar
![App Screenshot](https://raw.githubusercontent.com/omseervi098/Aakar-Color-Visualizer/imagemapping/ss/homepage.jpg)
![App Screenshot](https://raw.githubusercontent.com/omseervi098/Aakar-Color-Visualizer/imagemapping/ss/homepage-1.jpg)
![App Screenshot](https://raw.githubusercontent.com/omseervi098/Aakar-Color-Visualizer/imagemapping/ss/homepage-2.jpg)

### Color Visualizer
![App Screenshot](https://raw.githubusercontent.com/omseervi098/Aakar-Color-Visualizer/imagemapping/ss/colorvisualizer.jpg)
![App Screenshot](https://raw.githubusercontent.com/omseervi098/Aakar-Color-Visualizer/imagemapping/ss/colorvisualizer-1.jpg)

### Image Segementation Demo
![App Screenshot](https://raw.githubusercontent.com/omseervi098/Aakar-Color-Visualizer/imagemapping/ss/segmentation.gif)

