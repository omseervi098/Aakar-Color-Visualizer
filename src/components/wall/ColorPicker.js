import React, { useState , useRef } from "react";
import { ColorExtractor } from "react-color-extractor";
import { useColor } from "react-color-palette";
import DisplayImg from "../../components/DisplayImg/DisplayImg";
import Colorpallete from "../../components/ColorPallete/ColorPallete";
import img from "../../assets/light-airy-palette2-asian-paints.png";
import hexRgb from "hex-rgb";
import axios from "axios";
import "./ColorPicker.css";
import FileUpload from "../../components/FileUpload/FileUpload";
import FlooringMP4 from "../../assets/Flooring.mp4";
const ColorPicker = () => {
  const [rgb,setrgb] = useColor("hex", "#121212");
  const [colors, setColors] = useState([]);
  const [file, setFile] = React.useState(null);
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
  const handleSubmit1 = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", file);
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
      <div className="colorvisualiser__container container">
        <div className="row justify-content-center align-items-center">
          {!file && (
            <>
              <div className="col-12 col-md-6 colorvisualiser__container__left">
                <h1 className="text-center">Wall Decor</h1>
                <video width={500} height={500} autoPlay>
                  <source src={FlooringMP4} type="video/mp4" />
                </video>
              </div>
              <div className="col-12 col-md-6 colorvisualiser__container__right">
                <form className="text-center">
                  <FileUpload setFile={setFile} />
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </>
          )}
          {file && (
            <>
              <div className="col-12 col-md-6 colorvisualiser__container__left">
                <ColorExtractor getColors={getColors}>
                  <img src={URL.createObjectURL(file)} className="img-fluid" />
                </ColorExtractor>
                <img src={result} className="img-fluid" />
              </div>
              <div className="col-12 col-md-6 colorvisualiser__container__right">
                <form
                  className="text-center mt-5 d-flex flex-column justify-content-center align-items-center"
             
                >
                  <input
                    type="text"
                    placeholder="Enter Color to replace"
                    className="form-control mb-4"
                    ref={colRef}
                  />
                  <Colorpallete setColors={setColors} height={228} width={450} />
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
