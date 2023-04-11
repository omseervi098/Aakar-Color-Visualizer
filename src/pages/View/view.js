import React from "react";
import PANOLENS from "panolens"

const view = () => {
  const panorama = new PANOLENS.ImagePanorama("asset/equirectangular.jpg");
  const viewer = new PANOLENS.Viewer();
  return <div>
    {viewer.add( panorama )}
  </div>;
};

export default view;
