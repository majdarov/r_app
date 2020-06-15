import {
  getGroupsAC,
  getCommoditiesAC,
  setError,
  setUpdateOkAC,
  updateCommodityAC
} from "../../redux/commodityReduser";

export function fetchData(dataServer, path,  headers, dispatch) {
  fetch(dataServer + path, {
    method: "GET",
    headers
  })
    .then(res => res.json())
    .then(
      data => {
        // console.log(data);
        if (headers.get === "commodities") {
          dispatch(getCommoditiesAC(data.items));
        } else if (headers.get === "groups") {
          dispatch(getGroupsAC(data.items));
        } else if (headers.get === "update") {
          dispatch(setUpdateOkAC(data.ok));
          console.log("updated: " + Date());
          dispatch(updateCommodityAC());
        }
      },
      error => {
        dispatch(setError(error));
      }
    );
}
