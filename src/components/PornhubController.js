import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { useStore } from "../store";
import Input from "./Input";

const PornhubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 50px;
  .pornhub-controller-color > div {
    padding: 8px 0;
  }
  .pornhub-controller-misc > div {
    padding: 8px 0;
  }
`;

const PornhubController = () => {
  const store = useStore();
  return (
    <PornhubContainer>
      <div className="pornhub-controller-color">
        <div>
          Prefix Text Color: &nbsp;{" "}
          <Input
            type="color"
            dataType="prefixColor"
            value={store.data.prefixColor}
            onChange={store.handleStoreChange}
          />
        </div>
        <div>
          Suffix Text Color: &nbsp;{" "}
          <Input
            type="color"
            dataType="suffixColor"
            value={store.data.suffixColor}
            onChange={store.handleStoreChange}
          />
        </div>
        <div>
          Suffix Background Color: &nbsp;{" "}
          <Input
            type="color"
            dataType="postfixBgColor"
            value={store.data.postfixBgColor}
            onChange={store.handleStoreChange}
          />
        </div>
        <div>
          Transparent Background: &nbsp;
          <Input
            type="checkbox"
            dataType="transparentBg"
            value={store.data.transparentBg}
            onChange={store.handleStoreChange}
          />
        </div>
      </div>
      <div className="pornhub-controller-misc">
        <div>
          Font Size: &nbsp;
          <Input
            type="range"
            dataType="fontSize"
            onChange={store.handleStoreChange}
            value={store.data.fontSize}
            min="30"
            max="180"
            name="fontsize"
          />
          &nbsp;
          <span style={{ color: "#f90" }}>{store.data.fontSize}px</span>
        </div>
        <div>
          Reverse Highlight: &nbsp;{" "}
          <Input
            type="checkbox"
            dataType="reverseHighlight"
            value={store.data.reverseHighlight}
            onChange={store.handleStoreChange}
          />
        </div>
      </div>
    </PornhubContainer>
  );
};

export default observer(PornhubController);
