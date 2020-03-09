const SET_DATA = "SET-DATA";

let initialState = {
  data: [
    /* { id: 1, pid: null, label: "node1" }, // node
    { id: 2, pid: null, label: "node2" },
    { id: 3, pid: null, label: "node3" },
    { id: 4, pid: 1, label: "node1_4" },
    { id: 5, pid: 1, label: "node1_5" },
    { id: 6, pid: 3, label: "node3_6" },
    { id: 7, pid: 5, label: "node1_5_7" },
    { id: 8, pid: 6, label: "node3_6_8" } */
  ],
  isLoaded: false,
  error: null
};

const commodityReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      let data = [];
      fetch("http://localhost:5000/commodity", {
        method: "GET",
        headers: { get: "groups" }
      })
        .then(res => res.json())
        .then(
          groups => {
            groups.forEach(item => {
              let group = {
                id: item.UUID,
                pid: item.parentCode,
                label: item.name
              };
              data.push(group);
            });
            state.data = data;
            state.isLoaded = true;
          },
          error => {
            state.isLoaded = true;
            state.error = error;
          }
        );
      return state;

    default:
      return state;
  }
};

export const setDataTreeAC = data => {
  return { type: SET_DATA };
};

export default commodityReduser;
