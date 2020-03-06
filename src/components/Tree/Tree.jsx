import React from "react";
import s from "./Tree.module.css";
import createTree from "./treeFunction";
import Node from "./Node";

const Tree = props => {
  let nodeRoot = { id: 0, label: "rootNode", childs: [] };
  let tree = { id: "Tree", label: "Товары", childs: [nodeRoot] };
  createTree(props.data, tree);

  function createSubTree(item) {
    let children = [];
    if (item.childs.length) {
      children = item.childs.map(elem => {
        return createSubTree(elem);
      });
    }
    return (
      <Node 
        id={item.id} 
        key={item.id} 
        label={item.label} 
        children={children} 
        toggleHidden={toggleHidden}/>
    );
  }

  let treeElements = createSubTree(nodeRoot);

  function toggleHidden(e) {
    let elem = e.target.closest('li');
    let target = elem.querySelector('ul');
    console.log(target);
    if (!target) return;
    target.hidden = !target.hidden;
  }

  return (
    <div id={tree.id} className={s.tree}>
      <h2>{tree.label}</h2>
      <ul>{treeElements}</ul>
    </div>
  );
};

export default Tree;
