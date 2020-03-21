import React from "react";
import s from "./Commodity.module.css";
import Tree from "../Tree/Tree";
import { useEffect } from "react";
import ListCommodities from "./ListCommodities/ListCommodities";

const Commodity = props => {
  // debugger;
  useEffect(() => {
    if (!props.isLoaded) {
      props.setData();
    }
    if (!props.comIsLoaded) {
      props.getCommodities();
    }
  });

  function handleClick(e, id) {

    if (e.target.tagName !== "SPAN" && e.target.tagName !== "I") return;
    // ***SPAN toggle selected
    document.getElementById(id)
      .querySelectorAll("span").forEach(item => {
        if (item.className === s.selected) item.className = null;
      })
    if (e.target.tagName === "SPAN") {
      e.target.className = s.selected;
    } else {
      e.target.nextSibling.className = s.selected;
    }
    // SPAN***
    let elem = e.target.closest("li");
    if (!elem) return;
    let target = elem.querySelector("ul");
    if (target) {
      target.hidden = !target.hidden;
      if (target.hidden) {
        elem.className = "closed";
        elem.firstElementChild.className = "fas fa-folder";
      } else {
        elem.className = "open";
        elem.firstElementChild.className = "fas fa-folder-open";
      }
    }
    // console.log(elem.id);
    if (props.pid === elem.id) return;
    props.setPid(elem.id);
  }

  if (props.error) {
    return <div>Ошибка...{props.error.message}</div>;
  } else if (!props.isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className={s.container}>
        <Tree
          data={props.data}
          price="Price"
          pid={props.pid}
          handleClick={handleClick} />
        <div className={s.list}>
          <h3>Commodities</h3>
          <ListCommodities
            commodities={props.commodities}
            comIsLoaded={props.comIsLoaded}
            error={props.error} />
        </div>
      </div>
    );
  }
};

export default Commodity;
