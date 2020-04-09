import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as ServiceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

ServiceWorker.unregister();
