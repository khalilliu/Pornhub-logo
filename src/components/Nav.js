import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import textStore from "../store";

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  a {
    color: #f90;
    text-decoration: none;
  }
  .menu {
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 700;
  }
  .pb .prefix {
    color: #fff;
    padding: 2px;
  }

  .pb .postfix {
    color: #000;
    background-color: #f90;
    padding: 2px;
    border-radius: 3px;
  }
  .vph {
    text-align: center;
  }
  .vph .prefix {
    margin: 0px;
    color: #fff;
  }

  .vph .postfix {
    margin: 0px;
    color: #000;
    background-color: #f90;
    padding: 2px;
    border-radius: 3px;
  }

  .yb .prefix {
    color: #fff;
    padding: 2px;
  }
  .yb .postfix {
    color: #fff;
    background-color: #ff0000;
    padding: 2px;
    border-radius: 3px;
    letter-spacing: -1px;
  }
  span.disabled {
    color: #777 !important;
    font-weight: 500;
  }
`;

const Nav = () => {
  const store = React.useContext(textStore);
  return (
    <NavContainer>
      <div className="menu">
        <Link to="about">About</Link>
        <Link to="/" onClick={e => store.changeDirection("row")} className="pb">
          <span className="prefix">Porn</span>
          <span className="postfix">hub</span>
        </Link>

        <Link
          to="/"
          className="vph"
          onClick={e => store.changeDirection("column")}
        >
          <p className="prefix">Porn</p>
          <p className="postfix">hub</p>
        </Link>
        <span className="disabled">
          <span className="prefix">You</span>
          <span className="postfix">Tube</span>
        </span>
        <span className="disabled">More coming soon...</span>
      </div>
    </NavContainer>
  );
};

export default Nav;
