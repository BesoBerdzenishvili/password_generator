import React from "react";
import { styled } from "../stitches.config";
import copyImg from "../images/copy.png";

const Btn = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  outline: "none",
  "&:active": {
    position: "relative",
    top: "2px",
    left: "2px",
  },
});

export default function CopyBtn({ text, setShowMessage }) {
  const copy = async () => {
    await navigator.clipboard.writeText(text);

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 1500);
  };
  return (
    <Btn onClick={copy} disabled={!text}>
      <img src={copyImg} alt="two papers" width="24px" />
    </Btn>
  );
}
