const GET_GROUPS = "GET-GROUPS";
const SET_PID = "SET-PID";
const GET_COMMODITIES = "GET-COMMODITIES";
const SET_ERROR = "SET-ERROR";
const UPDATE_COMMODITY = "UPDATE-COMMODITY";
const SET_UPDATE_OK = "SET-UPDATE-OK";

export const getGroupsAC = groups => {
  return { type: GET_GROUPS, groups };
};

export const setPidAC = pid => {
  return { type: SET_PID, pid: pid };
};

export const getCommoditiesAC = commodities => {
  return { type: GET_COMMODITIES, commodities };
};

export const setError = error => {
  return { type: SET_ERROR, error }
}

export const updateCommodityAC = () => {
  return { type: UPDATE_COMMODITY }
}

export const setUpdateOkAC = update => {
  return { type: SET_UPDATE_OK, update }
}

let initialState = {
  dataServer: "http://localhost:5000/commodity",
  // dataServer: "/commodity",
  groups: [
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
  error: null,
  lastUpdate: 1585166400000,
  updateOk: false
};

const commodityReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_GROUPS:
      let groups = [];
      action.groups.forEach(item => {
        let group = {
          id: item.UUID,
          pid: item.parentCode,
          label: item.name
        };
        groups.push(group);
      });

      return Object.assign({}, state, {
        groups: groups,
        isLoaded: true
      });

    case SET_PID:
      return Object.assign({}, state, {
        pid: action.pid,
        comIsLoaded: false
      });

    case GET_COMMODITIES:
      let commodities = [];
      action.commodities.forEach(item => {
        if (item.g) return;
        let commodity = {
          uuid: item.UUID,
          code: item.code,
          label: item.name
        };
        commodities.push(commodity);
      });
      return Object.assign({}, state, {
        commodities: commodities,
        comIsLoaded: true
      });

    case SET_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });

    case UPDATE_COMMODITY:
      let lastUpdate;
      if (!state.updateOk) {
        lastUpdate = state.lastUpdate;
      } else {
        lastUpdate = Date.now();
      }
      return Object.assign({}, state, {
        lastUpdate: lastUpdate,
        updateOk: false
      })

    case SET_UPDATE_OK:
      return Object.assign({}, state, {
        updateOk: action.update
      })

    default:
      return state;
  }
};

export default commodityReduser;
