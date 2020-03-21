const SET_DATA = "SET-DATA";
const GET_COMMODITIES = "GET-COMMODITIES";
const SET_PID = "SET-PID";

export const setDataTreeAC = data => {
  return { type: SET_DATA };
};
export const getCommoditiesAC = () => {
  return { type: GET_COMMODITIES };
};
export const setPidAC = pid => {
  return { type: SET_PID, pid: pid };
};

let initialState = {
  dataServer: "http://localhost:5000/commodity",
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
  commodities: [
    // { uuid: 1, code: 0, label: "node1" }, // node
    // { uuid: 2, code: 1, label: "node2" },
    // { uuid: 3, code: 2, label: "node3" },
    // { uuid: 4, code: 3, label: "node1_4" },
    // { uuid: 5, code: 4, label: "node1_5" },
    // { uuid: 6, code: 5, label: "node3_6" },
    // { uuid: 7, code: 6, label: "node1_5_7" },
    // { uuid: 8, code: 7, label: "node3_6_8" }
  ],
  pid: null,
  isLoaded: false,
  comIsLoaded: false,
  error: null
};

const commodityReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      let data = [];
      fetch(state.dataServer, {
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
            // state.data = data;
            // state.isLoaded = true;
          },
          error => {
            state.isLoaded = true;
            state.error = error;
          }
        );
      return Object.assign({}, state, {
        data: data,
        isLoaded: true
      });
    // return state;

    case SET_PID:
      // console.log("pid: " + action.pid);
      return Object.assign({}, state, {
        pid: action.pid,
        comIsLoaded: false
      });

    case GET_COMMODITIES:
      if (!state.pid) return state;
      let commodities = [];
      fetch(state.dataServer, {
        method: "GET",
        headers: {
          get: "commodities",
          parentId: state.pid
        }
      })
        .then(res => res.json())
        .then(
          data => {
            data.forEach(item => {
              if (item.g) return;
              let commodity = {
                uuid: item.UUID,
                code: item.code,
                label: item.name
              };
              commodities.push(commodity);
            });
            // state.commodities = commodities;
            // state.comIsLoaded = true;
          },
          error => {
            return Object.assign({}, state, {
              error: error,
              comIsLoaded: true
            });
          }
        );
      // return state;
      return Object.assign({}, state, {
        commodities: commodities,
        comIsLoaded: true
      });

    default:
      return state;
  }
};

export default commodityReduser;
