import {
  receiveCommoditiesAC,
  getGroupsAC
} from "../../redux/commodityReduser";

export function fetchData(dataServer, headers, dispatch) {
  fetch(dataServer, {
    method: "GET",
    headers
  })
    .then(res => res.json())
    .then(
      data => {
        if (headers.get === "commodities") {
          dispatch(receiveCommoditiesAC(data));
        } else if (headers.get === "groups") {
          dispatch(getGroupsAC(data));
        }
      },
      error => {
        return error;
      }
    );
}
