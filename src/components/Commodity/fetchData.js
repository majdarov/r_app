import {
  getGroupsAC,
  getCommoditiesAC,
  setError,
  setUpdateOkAC,
  updateCommodityAC
} from "../../redux/commodityReduser";

export function fetchData(dataServer, headers, dispatch) {
  fetch(dataServer, {
    method: "GET",
    headers
  })
    .then(res => res.json())
    .then(
      data => {
        // console.log(data);
        if (headers.get === "commodities") {
          dispatch(getCommoditiesAC(data));
        } else if (headers.get === "groups") {
          dispatch(getGroupsAC(data));
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
