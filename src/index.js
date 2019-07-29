import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StoreContext, TextStore } from "./store";

import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StoreContext.Provider value={new TextStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>,
  rootElement
);
