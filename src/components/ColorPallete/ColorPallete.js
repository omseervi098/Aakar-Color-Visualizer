import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import hexRgb from "hex-rgb";
import "./ColorPallete.css";
import { useState } from "react";
const ColorPallete = (props) => {
  return (
    <ColorPicker
      height={props.height}
      width={props.width}
      color={props.color}
      onChange={(color) => {
        props.setColor(color);
      }}
      hideHSV

      dark
    />
  );
};
export default ColorPallete;
