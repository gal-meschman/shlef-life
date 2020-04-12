import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Reducers from "./redux/reducers";
import * as ServiceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

const myStore = createStore(
  Reducers(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

ServiceWorker.unregister();
