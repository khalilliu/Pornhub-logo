import React from "react";
import { Switch, Route } from "react-router-dom";

import styled from "styled-components";
import Home from "./pages/Home";
import VerticalPh from "./pages/VerticalPh";
import About from "./pages/About";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Faq from "./components/Faq";

const AppContainer = styled.div`
  height: 100%;
  margin: 0;
  background-color: #000;
  color: #f90;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        {/* <Route exact path="/vertical-ph" component={() => <VerticalPh />} /> */}
        <Route exact path="/about" component={About} />
      </Switch>
      <Slogan />
      <Faq />
    </AppContainer>
  );
}
export default App;
