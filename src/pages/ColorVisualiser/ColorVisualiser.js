import React, { useState } from "react";
import "./colorvisualiser.css";
import axios from "axios";
import hexRgb from "hex-rgb";
import { useColor } from "react-color-palette";
import { useEffect, useRef } from "react";
import FileUpload from "../../components/FileUpload/FileUpload";
import DisplayImg from "../../components/DisplayImg/DisplayImg";
// import Colorpallete from "../../components/ColorPallete/ColorPallete";
import VideoMP4 from "../../assets/Paint_Visualizer_7becb7495b.mp4";
const ColorVisualiser = () => {
  // const [color, setColor] = useColor("hex", "#121212");
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const getSegmentation = (e) => {
    const formData = new FormData();
    formData.append("room_image", fileInput.current.files[0]);
    console.log(fileInput.current.files[0]);
    setFile(fileInput.current.files[0]);
    formData.append("vectorized", true);
    axios({
      method: "POST",
      url: "https://pim-client.wizart.ai/vision-api/v3/interior",
      data: formData,
      headers: {
        Authorization:
          "N8TWHGEzPZHML1c936KPswO5oIukJfIwMwAApgyfyZdEBp5rdaXLHODsKIjN",
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

  return (
    <div className="colorvisualiser py-3 pb-5">
      {!result && (
        <div className="colorvisualiser__container container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 colorvisualiser__container__left">
              <h1 className="text-center">Color Visualiser</h1>
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
            <div className="col-12 col-md-6 colorvisualiser__container__right">
              <FileUpload
                getSegmentation={getSegmentation}
                fileInput={fileInput}
              />
            </div>
          </div>
        </div>
      )}
      {result && (
        <div className="colorvisualiser__container container-fluid">
          <div className="row ">
            <div className="col-12 col-md-10 colorvisualiser__container__left">
              <DisplayImg result={result} file={file} />
            </div>
            <div className="col-12 col-md-2 colorvisualiser__container__right">
              <form className="text-center">
                {/* <div className="col-10 mx-auto mb-3">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    
                      defaultValue={"FLOOR"}
                    >
                      <option >Open this select menu</option>
                      <option value="FLOOR">Floor</option>
                      <option value="WALL">Wall</option>
                      <option value="CEILING">Ceiling</option>
                    </select>
                  </div> */}
                <div className="d-flex justify-content-center align-items-center mb-3">
                  {/* <Colorpallete height={228} width={456}  /> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ColorVisualiser;
