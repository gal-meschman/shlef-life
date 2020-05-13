import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./store/reducer";
import * as ServiceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
const thunkMiddleware = require("redux-thunk").default;

const myStore = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

ServiceWorker.unregister();
