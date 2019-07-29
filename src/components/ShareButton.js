import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  & > div {
    width: 100px;
    height: 40px;
    border-radius: 3px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
  }
  .download {
    color: #000;
    background-color: #f90;
  }
  .share {
    color: #fff;
    background-color: #1da1f2;
  }
`;

const ShareButton = ({ handleDownload, handleShare }) => (
  <ButtonContainer>
    <div className="download" onClick={handleDownload}>
      Export
    </div>
    <div className="share" onClick={handleShare}>
      <i className="iconfont icon-twitter" />
      Tweet
    </div>
  </ButtonContainer>
);

export default ShareButton;
