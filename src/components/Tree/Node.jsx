import React from "react";

const Node = props => {
  let ul;
  let closed = props.hidden ? "far fa-folder" : "far fa-folder-open";
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
