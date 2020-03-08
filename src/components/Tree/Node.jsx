import React from "react";
import s from "./Tree.module.css";

const Node = props => {
  let ul;
  let closed = props.hidden ? "fas fa-folder" : "fas fa-folder-open";
  if (props.children.length) {
    ul = <ul hidden={props.hidden}>{props.children}</ul>;
  }

  return (
    <>
      <li id={props.id}>
        <i className={closed}></i>
        <span >
          {props.label}
        </span>
        {ul}
      </li>
    </>
  );
};

export default Node;
