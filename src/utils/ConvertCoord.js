import ConvertAgain from "./ConvertAgain";
const ConvertCoord = (result, w, h) => {
  if (result) {
    console.log("from ConvertCOORD", result);
    const detection = result;
    const ceiling = detection.ceiling;
    const floor = detection.floor;
    const walls = detection.walls;
    const windows = detection.windows;
    let floorcoords = [];
    floor.points.forEach((point) => {
      floorcoords.push(point.x * w);
      floorcoords.push(point.y * h);
    });
    let floorpoly = [];
    floor.points.forEach((point) => {
      floorpoly.push([point.x * w, point.y * h]);
    });
    let ceilingcoords = [];
    ceiling.points.forEach((point) => {
      ceilingcoords.push(point.x * w);
      ceilingcoords.push(point.y * h);
    });
    let ceilingpoly = [];
    ceiling.points.forEach((point) => {
      ceilingpoly.push([point.x * w, point.y * h]);
    });
    let wallscoords = [];
    let wallspoly = [];
    let windowscoords = [];
    let windowspoly = [];
    if (walls.length > 0) {
      walls.forEach((wall) => {
        let temp = [];
        wall.points.forEach((point) => {
          temp.push(point.x * w);
          temp.push(point.y * h);
        });
        wallscoords.push(temp);
        let temp2 = [];
        wall.points.forEach((point) => {
          temp2.push([point.x * w, point.y * h]);
        });
        wallspoly.push(temp2);
      });
    } 
    if (windows.length > 0) {
      windows.forEach((window) => {
        let temp = [];
        window.points.forEach((point) => {
          temp.push(point.x * w);
          temp.push(point.y * h);
        });
        windowscoords.push(temp);
        let temp2 = [];
        window.points.forEach((point) => {
          temp2.push([point.x * w, point.y * h]);
        });
        windowspoly.push(temp2);
      });
    } 
    let temp = [
      { name: "floor", coords: floorcoords, poly: floorpoly },
      { name: "ceiling", coords: ceilingcoords, poly: ceilingpoly },
      { name: "walls", coords: wallscoords, poly: wallspoly },
      { name: "windows", coords: windowscoords, poly: windowspoly },
    ];
    const final = ConvertAgain(temp, result);
    return final;
  } else return null;
};
export default ConvertCoord;
