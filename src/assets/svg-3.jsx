import React from "react";
import Rectangle3Svg from "./Rectangle (3).svg";

const Svg3 = ({ className = "" }) => {
  return (
    <img
      src={Rectangle3Svg}
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

export default Svg3;

