import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";

/** RENDER */
function renderApp() {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
}
window.state = store.getState();

renderApp(store.getState());

store.subscribe(() => {renderApp()});
