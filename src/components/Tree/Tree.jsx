import React from "react";
import s from "./Tree.module.css";
import createTree from "./treeFunction";
import Node from "./Node";

const Tree = props => {
  let nodeRoot = { id: 0, label: props.price, childs: [] };
  let tree = { id: "Tree", label: "Groups", childs: [nodeRoot] };
  createTree(props.data, tree);

  function createSubTree(item, lvl = 0) {
    let hidden;
    lvl += 1;
    let children = [];
    if (item.childs.length) {
      children = item.childs.map(elem => {
        return createSubTree(elem, lvl);
      });
    }
    hidden = lvl > 1 ? "hidden" : null;
    return (
      <Node
        id={item.id}
        key={item.id}
        label={item.label}
        children={children}
        hidden={hidden}
      />
    );
  }

  let treeElements = createSubTree(nodeRoot);

  return (
    <div id={tree.id} className={s.tree} onClick={(e) => props.handleClick(e,tree.id)}>
      <h3>{tree.label}</h3>
      <ul>{treeElements}</ul>
    </div>
  );
};

export default Tree;
