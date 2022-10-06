import React, { useState } from "react";
import { styled, globalStyles } from "../stitches.config";
import CopyAlert from "./CopyAlert";
import CopyBtn from "./CopyBtn";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#24232b",
  padding: "0 18px",
  width: "384px",
  height: "58px",
  color: "#3c3b43",
  fontSize: "26px",
  fontWeight: "bolder",
  marginBottom: "16px",
});

const DisplayText = styled("p", {
  overflow: "auto",
});

globalStyles();
export default function Display({ password }) {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Wrapper>
      {showMessage && <CopyAlert message={password} />}
      <DisplayText>{password}</DisplayText>
      <CopyBtn
        text={password}
        setShowMessage={setShowMessage}
        showMessage={showMessage}
      />
    </Wrapper>
  );
}
