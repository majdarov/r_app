import React from "react";
import spiner from "../../../Assets/img/placeholder.svg";

let Preloader = (props) => {
  return (
    <div style={{ backgroundColor: "lavender" }}>
      <img src={spiner} alt="" />
    </div>
  );
};

export default Preloader;