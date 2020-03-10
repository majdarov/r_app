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
        // handleClick={handleClick}
      />
    );
  }

  let treeElements = createSubTree(nodeRoot);

  function handleClick(e) {
    if (e.target.tagName === "LI") return;
    // ***SPAN toggle selected
    document.getElementById(tree.id)
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
    if (!target) return;
    target.hidden = !target.hidden;
    if (target.hidden) {
      elem.className = "closed";
      elem.firstElementChild.className = "fas fa-folder";
    } else {
      elem.className = "open";
      elem.firstElementChild.className = "fas fa-folder-open";
    }
  }

  return (
    <div id={tree.id} className={s.tree} onClick={handleClick}>
      <h3>{tree.label}</h3>
      <ul>{treeElements}</ul>
    </div>
  );
};

export default Tree;
