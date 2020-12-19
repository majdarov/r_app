import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

/* setInterval(() => {
  // console.log("Dispatch FAKE")
  store.dispatch({ type: 'FAKE' });
}, 1000); */

/** RENDER */
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

window.store = store;
