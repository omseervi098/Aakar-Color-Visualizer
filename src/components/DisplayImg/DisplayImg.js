import React, { useEffect } from "react";
import "./DisplayImg.css";
import $ from "jquery";
import maphilight from "maphilight";
import ImageMapper from "react-img-mapper";
import ConvertCoord from "../../utils/ConvertCoord";
const DisplayImg = (props) => {
  if (props.result) {
    console.log("from display img", props.file, props.result);
  }
  const [imgWidth, setImgWidth] = React.useState(0);
  const [imgHeight, setImgHeight] = React.useState(0);
  const [parentWidth, setParentWidth] = React.useState(0);
  //Get image width and height
  useEffect(() => {
    const img = new Image();
    img.src = URL.createObjectURL(props.file);
    img.onload = () => {  
      setImgWidth(img.width);
      setImgHeight(img.height);
    };
    // get width of parent container
    
  }, [props.file]);

  // Get width of parent container when window is resized
  useEffect(() => {
    const handleResize = () => {
      if($("#img1container").width() >991){
        setParentWidth(991);
      }else
      setParentWidth($("#img1container").width());
    };  
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [loaded, setLoaded] = React.useState(
    props.result.detection ? true : false
  );
  let areas = [];
  if (loaded) {
    console.log("from display img", imgWidth, imgHeight);
    areas = ConvertCoord(props.result.detection, imgWidth, imgHeight);
  }
  const MAP = {
    name: "my-map",
    areas: areas,
  };
  return (
    <div className="container-fluid displayimg">
      <div className="row">
        <div className="col-12" id="img1container">
          {loaded && (
            <ImageMapper
              src={URL.createObjectURL(props.file)}
              map={MAP}
              fillColor="rgba(0,0,0,1)"
              strokeColor="rgba(0,0,0,1)"
              lineWidth={2}
              id="img1"
              responsive={true}
              toggleHighlighted={true}
              parentWidth={parentWidth}
              stayMultiHighlighted={true}
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
