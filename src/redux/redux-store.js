import { createStore, combineReducers } from "redux";
import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";
import navReduser from "./navReduser";
import commodityReduser from "./commodityReduser";
import muzReduser from "./MuzikReduser";
import usersReduser from "./usersReduser";
import authReduser from "./auth_reduser";

/* fetch("http://localhost:5000/commodity", { //This Work!!!
    method: "GET",
    headers: {
      get: "commodities",
      parentId: "3257cd3d-6e61-4315-8d83-084578c507be"
    }
  }).then(response => response.json()).then(res => console.log(res)); */

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    navigation: navReduser,
    commodityPage: commodityReduser,
    muzik: muzReduser,
    usersPage: usersReduser,
    auth: authReduser
});

let store = createStore(redusers);

export default store;
