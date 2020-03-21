import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

/** RENDER */
function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    ,document.getElementById("root")
  );
}
// window.state = store.getState();
renderApp();

// store.subscribe(() => {
//   renderApp();
// });
