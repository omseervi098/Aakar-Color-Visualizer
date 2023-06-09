import React, { useState } from 'react';
import EyeDropper from 'react-eyedropper';
import room from "../../assets/living.jpg";

const Wallpaint = () => {
    const [color, setColor] = useState({ r: 255, g: 255, b: 255 });

    const handleSetColor = ({ r, g, b }) => {
        setColor({ r, g, b });
    };

    const { r, g, b } = color;
// const WallPaint = () => {
//     const [state, setState] = useState({
//         r: 255,
//         g: 255,
//         b: 255
//     })
    return (
        <div>
            <div className="main">
                <div className="container first">rgb(106, 0, 0)</div>
                <div className="container second">rgb(106, 124, 0)</div>
                <div className="container third">rgb(106, 124, 138)</div>
                <div className="container fourth">rgb(15, 124, 138)</div>
                <div className="container fifth">rgb(15, 44, 138)</div>
                <div className="container sixth">rgb(219, 238, 97)</div>
                <div className="container seventch">gradient</div>
            </div>
            <div className="result">
                <div
                    className="container"
                    style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
                >
                    rgb({r}, {g}, {b})
                </div>
            </div>
            <div className="eye-drop-container">
                <EyeDropper initializedColor={handleSetColor} />
            </div>
            <div id="container">
                <img src={room} id="sample" />
            </div>
        </div>
    );
};

export default Wallpaint;
