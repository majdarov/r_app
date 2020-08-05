/* Target
    tree = {
        id:'root',
        label: 'root'
        childs: [
            node:{
                id: 'id',
                pid: 'pid',
                label: 'label',
                childs: [
                    node: {
                        id: 'id',
                        pid: 'pid',
                        label: 'label',
                        childs: []
                    },
                    node: {...},
                    node: {...},
                    node: {...},
                ]
            },
            node: {...},
            node: {...},
        ]
    }
*/

function createNode(item) {
  let node = Object.assign({}, item);
  node.childs = [];
  return node;
}

function addNode(subNode, node) {
  let pNode = findNode(subNode.pid, node);
  try {
    if (pNode === undefined) return;
    pNode.childs.push(subNode);
  } catch (e) {
    console.error(e.message);
  }
}

function findNode(pid, pNode) {
  if (pid === null) pid = 0;
  let result = pNode.childs.find(item => item.id === pid);

  if (result === undefined) {
    for (let node of pNode.childs) {
      result = findNode(pid, node);
      if (result) break;
    }
  }
  return result;
}

function createTree(data, root) {
    // debugger;
  data.forEach(item => {
    let node = createNode(item);
    addNode(node, root);
  });
  return root;
}
export default createTree;