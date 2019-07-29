import React from "react";
import PornhubGenerator from "../components/PornhubGenerator";
const Home = props => {
  return (
    <>
      <PornhubGenerator viewDirection={"row"} store={props.store} />
    </>
  );
};

export default Home;
