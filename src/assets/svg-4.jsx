import React from "react";
import Rectangle2Svg from "./Rectangle (2).svg";

const Svg4 = ({ className = "" }) => {
  return (
    <img
      src={Rectangle2Svg}
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

export default Svg4;

