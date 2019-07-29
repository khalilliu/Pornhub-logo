import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  body {
  padding: 0;
  margin: 0;
}
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,

  rootElement
);
