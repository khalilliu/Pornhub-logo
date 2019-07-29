import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import textStore from "../store";

const EditBox = styled.div`
  border: 4px solid #333;
  border-radius: 10px;
  padding: 40px;
  margin: 40px 0px;
  max-width: 100%;
`;

const EditArea = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  font-size: ${props => props.fontSize}px;
  background-color: ${props => props.transparentBg};
  padding: 20px;
  text-align: center;
  font-weight: 700;
  border-radius: 10px;
`;

const PrefixSpan = styled.div`
  color: ${props => props.color};
  background-color: ${props =>
    props.reverseHighlight ? props.postfixBgColor : "transparent"};
  border-radius: ${props => (props.reverseHighlight ? "7px" : "none")};
  padding: ${props => (props.reverseHighlight ? "5px 10px" : "5px")};
`;

// const PostfixSpan = styled.div`
//   color: ${props => props.color};
//   background-color: ${props =>
//     !props.reverseHighlight ? props.postfixBgColor : "transparent"};
//   border-radius: ${props => (!props.reverseHighlight ? "7px" : "none")};
//   padding: ${props => (!props.reverseHighlight ? "5px 10px" : "5px")};
// `;

const PorhubView = ({ data, handleChange, ...props }) => {
  const prefixEl = React.useRef(null);
  const postfixEl = React.useRef(null);
  const store = React.useContext(textStore);
  return (
    <EditBox>
      <EditArea
        ref={props.logoRef}
        direction={store.data.direction}
        fontSize={data.fontSize}
        transparentBg={data.transparentBg ? "transparent" : "#000000"}
      >
        <PrefixSpan
          ref={prefixEl}
          reverseHighlight={data.reverseHighlight}
          contentEditable
          spellCheck="false"
          suppressContentEditableWarning={true}
          postfixBgColor={data.postfixBgColor}
          color={data.reverseHighlight ? data.suffixColor : data.prefixColor}
          onInput={e =>
            prefixEl.current.innerHTML === store.data.prefixText &&
            store.changeText(e.target.childNodes[0].nodeValue, "prefixText")
          }
          dangerouslySetInnerHTML={{ __html: store.data.prefixText }}
        />
        <PrefixSpan
          ref={postfixEl}
          reverseHighlight={!data.reverseHighlight}
          contentEditable
          spellCheck="false"
          suppressContentEditableWarning={true}
          color={!data.reverseHighlight ? data.suffixColor : data.prefixColor}
          postfixBgColor={data.postfixBgColor}
          onInput={e =>
            postfixEl.current.innerHTML === store.data.suffixText &&
            store.changeText(e.target.childNodes[0].nodeValue, "suffixText")
          }
          dangerouslySetInnerHTML={{ __html: store.data.suffixText }}
        />
      </EditArea>
    </EditBox>
  );
};

export default observer(PorhubView);
