import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RouteHandler from "./router/Router";

ReactDOM.render(
  <React.StrictMode>
    <RouteHandler />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
