import React from "react";
import RectangleSvg from "./Rectangle.svg";

const Svg1 = ({ className = "" }) => {
  return (
    <img
      src={RectangleSvg}
      alt="Background SVG"
      className={className}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  );
};

export default Svg1;

