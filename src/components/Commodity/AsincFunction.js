import { receiveCommoditiesAC } from "../../redux/commodityReduser";

export function fetchCommodities(pid, dataServer, headers, dispatch) {

    let commodities = [];
    fetch(dataServer, {
      method: "GET",
      headers
      // headers: {
      //   get: "commodities",
      //   parentId: pid
      // }
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
        //   console.log(commodities);
          dispatch(receiveCommoditiesAC(commodities))
        },
        error => {
          return error;
        }
      )
}