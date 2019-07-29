import React from "react";
import styled from "styled-components";

const DesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  h2 {
    color: #fff;
  }
`;

const Description = () => (
  <DesContainer>
    <h2>A Simple Online Logo Generator</h2>
  </DesContainer>
);

export default Description;
