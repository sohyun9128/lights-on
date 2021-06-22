import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  */
  document.getElementById("root")
);
