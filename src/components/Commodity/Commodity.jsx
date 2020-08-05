import React from "react";
import s from "./Commodity.module.css";
import Tree from "../common/Tree/Tree";
import ListCommodities from "./ListCommodities/ListCommodities";
import Preloader from "../common/Preloader/Preloader";
import FormModalWrapper from "./Forms/FormModalWrapper";
import FormProduct from "./Forms/FormProduct";

const Commodity = props => {
  if (!props.isLoaded) {
    props.setPid(0);
    props.getGroups();
  }
  if (!props.comIsLoaded) {
    props.getProducts(props.pid);
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
    if (elem.id !== "0") {
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
    }

    if (props.pid === elem.id) return;
    props.setPid(elem.id);
  }

  if (props.error) {
    return <div>Ошибка...{props.error.message}</div>;
  } else if (!props.isLoaded) {
    return <Preloader />
  } else {
    return (
      <>
        {props.viewForm ?
        // <FormProductFormik />
          <FormModalWrapper
            form={
              <FormProduct
                groups={props.groups}
                formData={props.formData}
                formPost={props.formPost}
                setViewForm={props.setViewForm}
                setFormData={props.setFormData}
                toggleFormPost={props.toggleFormPost}
                postFormData={props.postFormData}
              />
            }
          /> 
          : null}
        <div className={s.container}>
          <Tree data={props.groups} price="Price" treeLabel="Groups" handleClick={handleClick} />
          <div className={s.list}>
            <h3>Commodities</h3>
            <ListCommodities
              commodities={props.commodities}
              comIsLoaded={props.comIsLoaded}
              error={props.error}
              getProductId={props.getProductId}
            />
          </div>
        </div>

      </>
    );
  }
};

export default Commodity;
