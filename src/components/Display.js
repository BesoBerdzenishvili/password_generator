import React from "react";
import { styled, globalStyles } from "../stitches.config";
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

globalStyles();
export default function Display({ password = "P4$W0rD!" }) {
  return (
    <Wrapper>
      <p>{password}</p>
      <CopyBtn text={password} />
    </Wrapper>
  );
}
