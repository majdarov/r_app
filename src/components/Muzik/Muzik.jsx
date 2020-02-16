import React from "react";
import s from "./Muzik.module.css";

const Muzik = props => {
  return <div className={s.item}>{props.link}</div>;
};

export default Muzik;
