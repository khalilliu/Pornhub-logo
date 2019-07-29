import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Descrtiption from "./Description";

const HeaderContainer = styled.div``;

const Header = () => (
  <HeaderContainer>
    <Logo />
    <Descrtiption />
  </HeaderContainer>
);

export default Header;
