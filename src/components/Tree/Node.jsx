import React from "react";

const Node = props => {
  let ul;
  if (props.children.length) {
    ul = <ul>{props.children}</ul>;
  }

  return (
    <>
      <li id={props.id}>
        <a href='#' onDoubleClick={props.toggleHidden}>{props.label}</a>
        {ul}
      </li>
    </>
  );
};

export default Node;
