import React from "react";
import s from "./Commodity.module.css";
import Tree from "../Tree/Tree";
import ListCommodities from "./ListCommodities/ListCommodities";

const Commodity = props => {

  if (!props.isLoaded) {
    props.setPid("0");
    let headers = {
      get: "groups"
    };
    props.receiveData(props.dataServer, headers);
  }
  if (!props.comIsLoaded) {
    let headers = {
      get: "commodities",
      parentId: props.pid
    };
    props.receiveData(props.dataServer, headers);
  }

  function handleClick(e) {
    if (e.target.tagName !== "SPAN" && e.target.tagName !== "I") return;
    // ***SPAN toggle selected
    document
      .getElementById("Tree")
      .querySelectorAll("span")
      .forEach(item => {
        if (item.className === s.selected) item.className = null;
      });
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
          data={props.groups}
          price="Price"
          handleClick={handleClick}
        />
        <div className={s.list}>
          <h3>Commodities</h3>
          <ListCommodities
            commodities={props.commodities}
            comIsLoaded={props.comIsLoaded}
            error={props.error}
          />
        </div>
      </div>
    );
  }
};

export default Commodity;
