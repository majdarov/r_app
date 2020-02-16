import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state from "./redux/state";

/** RENDER */
ReactDOM.render(<App {...state} />, document.getElementById("root"));
