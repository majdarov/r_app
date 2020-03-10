import React from "react";
import s from "./Commodity.module.css";
import Tree from "../Tree/Tree";
import { setDataTreeAC } from "../../redux/commodityReduser";
import { useEffect } from "react";

const Commodity = props => {

  useEffect(() => {
    if (!props.isLoaded) {
      props.dispatch(setDataTreeAC());
    }
  });

  if (props.error) {
    return <div>Ошибка...{props.error.message}</div>;
  } else if (!props.isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div>
        <div className={s.container}>
          <Tree data={props.data} price="Price" />
          <div className={s.list}>
            <h3>Commodity</h3>
          </div>
        </div>
      </div>
    );
  }
};

export default Commodity;
