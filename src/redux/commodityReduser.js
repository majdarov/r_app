let initialState = {
  data: [
    { id: 1, pid: null, label: "node1" }, // node
    { id: 2, pid: null, label: "node2" },
    { id: 3, pid: null, label: "node3" },
    { id: 4, pid: 1, label: "node1_4" },
    { id: 5, pid: 1, label: "node1_5" },
    { id: 6, pid: 3, label: "node3_6" },
    { id: 7, pid: 5, label: "node1_5_7" },
    { id: 8, pid: 6, label: "node3_6_8" },
  ]
};

const commodityReduser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default commodityReduser;
