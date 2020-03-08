import React from "react";
import s from "./Tree.module.css";
import createTree from "./treeFunction";
import Node from "./Node";

const Tree = props => {
  let nodeRoot = { id: 0, label: "rootNode", childs: [] };
  let tree = { id: "Tree", label: "Товары", childs: [nodeRoot] };
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
        label={item.label + " lvl: " + lvl}
        children={children}
        hidden={hidden}
        toggleHidden={toggleHidden}
      />
    );
  }

  let treeElements = createSubTree(nodeRoot);

  function toggleHidden(e) {
    if (e.target.tagName === "LI") return;
    let elem = e.target.closest("li");
    if (!elem) return;
    let target = elem.querySelector("ul");
    if (!target) return;
    target.hidden = !target.hidden;
    if (target.hidden) {
      elem.firstElementChild.className = "far fa-folder";
    } else {
      elem.firstElementChild.className = "far fa-folder-open";
    }
  }

  return (
    <div id={tree.id} className={s.tree} onClick={toggleHidden}>
      <h2>{tree.label}</h2>
      <ul>{treeElements}</ul>
    </div>
  );
};

export default Tree;
