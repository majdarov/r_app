import React from "react";
import s from "./Commodity.module.css";
import Tree from "../Tree/Tree";
import { setDataTreeAC, setPidAC } from "../../redux/commodityReduser";
import { useEffect } from "react";
import ListCommodities from "./ListCommodities/ListCommodities";

const Commodity = props => {

  let state = props.store.getState().commodityPage;
  // let dispatch = props.store.dispatch;

  useEffect(() => {
    if (!state.isLoaded) {
      props.store.dispatch(setDataTreeAC());
    }
  });

  function handleClick(e, id) {
    // debugger;
    if (e.target.tagName === "LI") return;
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
    if (state.pid === elem.id) return;
    props.store.dispatch(setPidAC(elem.id));
  }

  if (state.error) {
    return <div>Ошибка...{state.error.message}</div>;
  } else if (!state.isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
        <div className={s.container}>
          <Tree 
            data={state.data}
            dispatch={props.store.dispatch}
            price="Price"
            pid={state.pid}
            handleClick={handleClick}/>
          <div className={s.list}>
            <h3>Commodities</h3>
            <ListCommodities 
              commodities={state.commodities}
              dispatch={props.store.dispatch}
              comIsLoaded={state.comIsLoaded}
              error={state.error}/>
          </div>
        </div>
    );
  }
};

export default Commodity;
