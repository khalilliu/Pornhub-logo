import React from "react";

import styled from "styled-components";

const SloganContainer = styled.div`
  width: 60%;
  padding: 20px 20%;
  p {
    color: #fff;
  }
  .prefix {
    color: #fff;
    padding: 5px 0;
  }
  .postfix {
    color: #000;
    background-color: #f90;
    padding: 5px;
    margin-left: 5px;
    border-radius: 7px;
  }
  strong {
    color: #f90;
  }
`;

const Slogan = () => (
  <SloganContainer>
    <h3>
      <span className="prefix">Logoly</span>
      <span className="postfix">Pro</span>
    </h3>
    <p>
      Logoly.pro is a creative logo generator, you can generate logo similar to
      Pornhub, YouTube, and more.
      <br />
      <br />
      <strong>
        If you think this project is funny, please
        <a href="https://github.com/bestony/logoly">
          <img src="https://img.shields.io/badge/give%20me-a%20star-green.svg" />
        </a>
      </strong>
    </p>
  </SloganContainer>
);

export default Slogan;
