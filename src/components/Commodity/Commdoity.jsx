import React from "react";
import s from "./Commodity.module.css";
import Tree from "../Tree/Tree";

const Commodity = props => {

  return (
    <div>
      {/* <div className={s.item}>{props.title}</div> */}
      <div className={s.container}>
        <Tree data={props.data} />
        <div className={s.list}><h2>Commodity</h2></div>
      </div>
    </div>
  );
};

export default Commodity;
