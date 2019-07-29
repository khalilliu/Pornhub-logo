import React from "react";
import domToImage from "dom-to-image";
import styled from "styled-components";

import PorhubView from "./PornhubView";
import PorhubController from "./PornhubController";
import ShareButton from "./ShareButton";

// styled component
const PornhubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding: 20px 20%;
`;

const PornhubGenerator = props => {
  const logoRef = React.useRef(null);
  // const store = useLocalStore(() => ({
  //   data: {
  //     prefixColor: "#ffffff",
  //     suffixColor: "#000000",
  //     postfixBgColor: "#ff9900",
  //     transparentBg: false,
  //     reverseHighlight: false,
  //     fontSize: 55
  //   },
  //   handleStoreChange(value, type) {
  //     console.log(value, type);
  //     store.data[type] = value;
  //   }
  // }));

  const download = () => {
    const node = logoRef && logoRef.current;
    domToImage.toPng(node).then(res => {
      downloadImage(res, `logo`);
    });
  };
  const share = () => {
    let url = "https://logoly.pro";
    let text = encodeURIComponent(
      `Built with #LogolyPro, by @xiqingongzi ${url}`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`);
  };

  return (
    <PornhubContainer>
      <PorhubView logoRef={logoRef} viewDirection={props.viewDirection} />
      <PorhubController />
      <ShareButton handleDownload={download} handleShare={share} />
    </PornhubContainer>
  );
};

// down image helper
function downloadImage(data, name) {
  let image = new Image();
  image.setAttribute("crossOrigin", "anonymous");
  image.onload = function() {
    let canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, image.width, image.height);
    let url = canvas.toDataURL("image/png");
    let a = document.createElement("a");
    let event = new MouseEvent("click");
    a.download = name || "logo";
    a.href = url;
    a.dispatchEvent(event);
  };
  image.src = data;
}

export default PornhubGenerator;
