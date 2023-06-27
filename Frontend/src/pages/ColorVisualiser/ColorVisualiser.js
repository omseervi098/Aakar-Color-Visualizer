import React, { useState } from "react";
import "./colorvisualiser.css";
import axios from "axios";
import hexRgb from "hex-rgb";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useEffect, useRef } from "react";
import FileUpload from "../../components/FileUpload/FileUpload";
import DisplayImg from "../../components/DisplayImg/DisplayImg";
// import Colorpallete from "../../components/ColorPallete/ColorPallete";
import VideoMP4 from "../../assets/Paint_Visualizer_7becb7495b.mp4";
import example from "../../assets/living.jpg";

const ColorVisualiser = () => {
  // const [color, setColor] = useColor("hex", "#121212");
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [fresult, setFresult] = useState(null);
  const [apply, setApply] = React.useState(false);
  const [color, setColor] = useColor("hex", "#b5b324");
  const getSegmentation = (e) => {
    const formData = new FormData();
    formData.append("room_image", fileInput.current.files[0]);
    console.log(fileInput.current.files[0]);
    setFile(fileInput.current.files[0]);
    formData.append("vectorized", true);
    axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL,
      data: formData,
      headers: {
        Authorization: process.env.REACT_APP_AUTH_TOKEN,
      },
    })
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    localStorage.setItem("Result", JSON.stringify(result));
  };
  const coloringWall = (coords, flag) => {
    let temp = "[";
    for (let i = 0; i < coords.length; i++) {
      temp += `{'x':${coords[i][0]},'y':${coords[i][1]}},`;
    }
    // erase last comma
    temp = temp.slice(0, -1);
    temp += "]";
    console.log("from color visualiser", temp);
    console.log("from color visualiser", file);
    const formData = new FormData();
    console.log("from color visualiser", flag);
    // if(flag)
    // formData.append("img", fresult);
    // else
    formData.append("img", file);
    formData.append("coords", temp);
    var rgb = hexRgb(color.hex);
    console.log(rgb);
    console.log(color.rgb);
    formData.append(
      "newCl",
      color.rgb.b + "," + color.rgb.g + "," + color.rgb.r
    );
    formData.append("segment", "WALL");
    setApply(true);

    //add loader while waiting for response from server

    axios({
      method: "POST",
      url: process.env.REACT_APP_BACKEND_URL,
      data: formData,
    })
      .then((res) => {
        console.log(res.data);
        setFresult(res.data.img);
        // setResult(res.data.img);
        setApply(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Error in coloring");
        setApply(false);
      });
  };
  return (
    <div className="colorvisualiser py-5 pb-5">
      {!result && (
        <div className="colorvisualiser__container container py-md-2 py-lg-5">
          <div className="row justify-content-center align-items-center gap-5 gap-lg-0">
            <div className="col-12 col-lg-6 colorvisualiser__container__left ">
              <h1 className="text-center mb-4">Visualize your Home</h1>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-100 img-fluid"
              >
                <source src={VideoMP4} type="video/mp4" />
              </video>
            </div>
            <div className="col-12 col-lg-6 colorvisualiser__container__right">
              <FileUpload
                getSegmentation={getSegmentation}
                fileInput={fileInput}
              />
            </div>
          </div>
        </div>
      )}
      {result && (
        <div className="colorvisualiser__container container-fluid m-0 p-0">
          <div className="row m-0 p-0 align-items-center">
            <div className="col-12 col-lg-9 colorvisualiser__container__left ">
              <DisplayImg
                result={result}
                file={file}
                coloringWall={coloringWall}
                fresult={fresult}
                apply={apply}
                setApply={setApply}
              />
            </div>
            <div className="col-12 col-lg-3 colorvisualiser__container__right m-0 p-0 mt-5 mt-lg-0">
              <form className="text-center d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center mb-3">
                  {/* <Colorpallete height={228} width={456}  /> */}
                  <ColorPicker
                    color={color}
                    onChange={setColor}
                    hideHSV
                    hideHEX
                    dark
                    height={180}
                    width={256}
                  />
                </div>
                <h3 style={{ borderBottom: "2px dashed black" }}>
                  Selected Color
                </h3>
                <div
                  className="selected_color"
                  style={{
                    backgroundColor: `${color.hex}`,
                    height: "80px",
                    width: "180px",
                    borderRadius: "20px",
                    border: "2px solid black",
                  }}
                ></div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ColorVisualiser;
