import React from "react";
import { styled, globalStyles } from "../stitches.config";
import Slider from "./Slider";
import Checks from "./Checks";
import Strength from "./Strength";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#24232b",
  padding: "18px 18px",
  width: "384px",
});

const Btn = styled("button", {
  textAlign: "center",
  backgroundColor: "#a4ffaf",
  color: "#24232b",
  padding: "18px 18px",
  width: "344px",
  fontSize: "19px",
  fontWeight: "bolder",
  cursor: "pointer",
  "&:active": {
    position: "relative",
    top: "2px",
    left: "2px",
  },
});

globalStyles();

export default function Options() {
  return (
    <Wrapper>
      <Slider />
      <Checks />
      <Strength />
      <Btn>Generate &gt;</Btn>
    </Wrapper>
  );
}
