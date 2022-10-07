import React, { useState } from "react";
import { styled, globalStyles } from "../stitches.config";
import CopyMessage from "./CopyMessage";
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

const DisplayPassword = styled("p", {
  overflow: "auto",
});

globalStyles();
export default function Display({ password }) {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Wrapper>
      {showMessage && <CopyMessage message={password} />}
      <DisplayPassword>{password}</DisplayPassword>
      <CopyBtn
        text={password}
        setShowMessage={setShowMessage}
        showMessage={showMessage}
      />
    </Wrapper>
  );
}
