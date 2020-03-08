import { createStore, combineReducers } from "redux";
import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";
import navReduser from "./navReduser";
import commodityReduser from "./commodityReduser";

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    navigation: navReduser,
    commodityPage: commodityReduser
});

let store = createStore(redusers);

export default store;
