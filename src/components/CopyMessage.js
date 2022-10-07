import React from "react";
import { styled } from "../stitches.config";

const Wrapper = styled("div", {
  border: "4px solid #a4ffaf",
  padding: "14px",
  width: "100%",
  backgroundColor: "#FFFFFF",
  position: "fixed",
  top: -62,
  left: 0,
  textAlign: "center",
  fontSize: "24px",
});

export default function CopyAlert({ text }) {
  return <Wrapper>{text} has been copied!</Wrapper>;
}
