const ConvertAgain = (result, original) => {
  let final = [];
  let temp = result;
  let i = 0;
  let temp2 = original;
  temp.forEach((item) => {
    if (item.name === "floor") {
      final.push({
        id: i,
        title: "Floor",
        fillColor: "#eab54d4d",
        strokeColor: "black",
        shape: "poly",
        name: "floor",
        coords: item.coords,
        poly: item.poly,
      });
      i++;
    } else if (item.name === "ceiling") {
      final.push({
        id: i,
        title: "Ceiling",
        fillColor: "#eab54d4d",
        strokeColor: "black",
        shape: "poly",
        name: "ceiling",
        coords: item.coords,
        poly: item.poly,
      });
      i++;
    } else if (item.name === "walls") {
      let j = 0;
      item.coords.forEach((wall) => {
        final.push({
          id: i,
          title: "Wall" + j,
          fillColor: "#eab54d4d",
          strokeColor: "black",
          shape: "poly",
          name: "wall" + j,
          coords: wall,
          poly: item.poly[j],
        });
        i++;
        j++;
      });
    } else if (item.name === "windows") {
      let j = 0;
      item.coords.forEach((window) => {
        final.push({
          id: i,
          title: "Window" + j,
          fillColor: "#eab54d4d",
          strokeColor: "black",
          shape: "poly",
          name: "window" + j,
          coords: window,
          poly: item.poly[j],
        });
        i++;
        j++;
      });
    }
  });
  return final;
};
export default ConvertAgain;
