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
    // axios({
    //   method: "POST",
    //   url: "https://pim-client.wizart.ai/vision-api/v3/interior",
    //   data: formData,
    //   headers: {
    //     Authorization:
    //       "N8TWHGEzPZHML1c936KPswO5oIukJfIwMwAApgyfyZdEBp5rdaXLHODsKIjN",
    //   },
    // })
    
    //   .then((res) => {
       
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // localStorage.setItem("Result", JSON.stringify(result));
    setResult({
      detection: {
        "floor": {
          "points": []
        },
        "ceiling": {
          "points": []
        },
        "windows": [
          {
            "points": [
              {
                "x": 0,
                "y": 0.9248046875
              },
              {
                "x": 0.08203125,
                "y": 0.0712890625
              },
              {
                "x": 0.076171875,
                "y": 0.8291015625
              },
              {
                "x": 0.14453125,
                "y": 0.822265625
              }
            ]
          },
          {
            "points": [
              {
                "x": 0.89453125,
                "y": 0.138671875
              },
              {
                "x": 0.921875,
                "y": 0.791015625
              }
            ]
          }
        ],
        "walls": [
          {
            "cx": 9.750193552254073,
            "wall_id": 0,
            "cy": 49.97713271885702,
            "points": [
              {
                "x": 0,
                "y": 1
              },
              {
                "x": 0.004042451535478962,
                "y": 1
              },
              {
                "x": 0.11051613092422485,
                "y": 0.8556772470474243
              },
              {
                "x": 0.10947712510824203,
                "y": 0.11232876777648926
              },
              {
                "x": 0.03466775698722397,
                "y": 0
              },
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              }
            ]
          },
          {
            "cx": 52.676730685763886,
            "wall_id": 1,
            "cy": 45.56474659540882,
            "points": [
              {
                "x": 0.11051613092422485,
                "y": 0.8556772470474243
              },
              {
                "x": 0.9147694706916809,
                "y": 0.8490987420082092
              },
              {
                "x": 0.9117646813392639,
                "y": 0.1068493127822876
              },
              {
                "x": 0.10947712510824203,
                "y": 0.11232876777648926
              },
              {
                "x": 0.11051613092422485,
                "y": 0.8556772470474243
              }
            ]
          },
          {
            "cx": 95.78258040683721,
            "wall_id": 2,
            "cy": 43.986920918503856,
            "points": [
              {
                "x": 0.9147694706916809,
                "y": 0.8490987420082092
              },
              {
                "x": 1,
                "y": 0.9415124906509201
              },
              {
                "x": 1,
                "y": 0
              },
              {
                "x": 0.997794116930377,
                "y": 0
              },
              {
                "x": 0.9117646813392639,
                "y": 0.1068493127822876
              },
              {
                "x": 0.9147694706916809,
                "y": 0.8490987420082092
              }
            ]
          }
        ]
      }
    });
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
