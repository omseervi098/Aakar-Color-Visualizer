import React, { useState, useRef } from "react";
import { ColorExtractor } from "react-color-extractor";
import { ColorPicker, useColor } from "react-color-palette";
import hexRgb from "hex-rgb";
import axios from "axios";
import "./ColorPicker.css";
import FileUpload from "../../components/FileUpload/FileUpload";
import FlooringMP4 from "../../assets/Flooring.mp4";
const ColorPickerd = () => {
  const fileInput1 = useRef(null);
  const [rgb, setrgb] = useColor("hex", "#121212");
  const [colors, setColors] = useState([]);
  const [color, setColor] = useColor("hex", "#121212");
  const [file1, setFile1] = React.useState(null);
  const colRef = useRef(null);
  const [result, setResult] = React.useState(null);
  const [prevCl, setPrevCl] = React.useState(null);
  const renderSwatches = () => {
    return colors.map((color, id) => {
      return (
        <div>
          <div
            className="swatches"
            key={id}
            style={{
              backgroundColor: color,
              width: 100,
              height: 100,
            }}
          />
          <div>
            <span style={{ color: color, alignItems: "center" }}>{color}</span>
          </div>
        </div>
      );
    });
  };

  const getColors = (colors) => {
    setColors([...colors, ...colors]);
  };
  const uploadFile = (e) => {
    e.preventDefault();
    console.log(fileInput1.current.files[0]);
    setFile1(fileInput1.current.files[0]);
  };
  const handleSubmit1 = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", file1);
    const prevrgb = hexRgb(prevCl);
    var s =
      prevrgb.blue.toString() +
      "," +
      prevrgb.green.toString() +
      "," +
      prevrgb.red.toString();
    formData.append("oldCl", s);
    var s1 =
      rgb.blue.toString() +
      "," +
      rgb.green.toString() +
      "," +
      rgb.red.toString();
    formData.append("newCl", s1);
    axios({
      method: "POST",
      url: "https://9d45-2405-204-38d-210-28af-c8fa-99d0-6de7.ngrok-free.app/wallcl",
      data: formData,
    })
      .then((res) => {
        console.log(res);
        setResult(res.data.img);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="colorvisualiser py-5">
      {!file1 && (
        <div className="colorvisualiser__container container py-md-2 py-lg-5">
          <div className="row justify-content-center align-items-center gap-5 gap-lg-0">
            <div className="col-12 col-lg-6 colorvisualiser__container__left ">
              <h1 className="text-center">Wall Decor</h1>
              <video
                video="true"
                autoPlay
                loop
                muted
                playsInline
                className="w-100 img-fluid"
              >
                <source src={FlooringMP4} type="video/mp4" />
              </video>
            </div>
            <div className="col-12 col-lg-6 colorvisualiser__container__right">
              <FileUpload
                walldecor={true}
                uploadFile={uploadFile}
                fileInput={fileInput1}
              />
            </div>
          </div>
        </div>
      )}
      {file1 && (
        <div className="colorvisualiser__container container">
          <div className="row justify-content-center align-items-center"></div>
          <div className="col-12 col-md-6 colorvisualiser__container__left">
            <ColorExtractor getColors={getColors}>
              <img src={URL.createObjectURL(file1)} className="img-fluid" />
            </ColorExtractor>
            <img src={result} className="img-fluid" />
          </div>
          <div className="col-12 col-md-4 colorvisualiser__container__right">
            <form className="text-center mt-5 d-flex flex-column justify-content-center align-items-center">
              <input
                type="text"
                placeholder="Enter Color to replace"
                className="form-control mb-4"
                ref={colRef}
              />
              <div className="container_colorpicker">
                <ColorPicker
                  width={450}
                  height={228}
                  color={color}
                  onChange={setColor}
                  hideHSV
                  dark
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary col-10 mt-4 mb-4"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-12  colorvisualiser__container__left mt-4">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div className="d-flex  flex-wrap justify-content-center align-items-center">
                {renderSwatches()}
                {console.log(renderSwatches())}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPickerd;
