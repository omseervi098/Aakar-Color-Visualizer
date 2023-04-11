import React from "react";
import "./DisplayImg.css";
import $ from "jquery";
import maphilight from "maphilight";
import ImageMapper from "react-img-mapper";
import ConvertCoord from "../../utils/ConvertCoord";
const DisplayImg = (props) => {
  if (props.result) {
    console.log("from display img", props.file, props.result);
  }
  const [loaded, setLoaded] = React.useState(
    props.result.detection ? true : false
  );
  let areas = [];
  if (loaded) {
    areas = ConvertCoord(props.result.detection, 1024, 640);
  }
  const MAP = {
    name: "my-map",
    areas: areas,
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          {loaded && (
            <ImageMapper
              src={URL.createObjectURL(props.file)}
              map={MAP}
              fillColor="rgba(0,0,0,1)"
              strokeColor="rgba(0,0,0,1)"
              lineWidth={2}
              width={1024}
              height={640}
              onClick={(area) => {
                console.log(area);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default DisplayImg;
