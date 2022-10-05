import React from "react";
import { styled } from "../stitches.config";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifySelf: "flex-start",
  padding: "18px 18px",
  color: "white",
  width: "384px",
  "& input": {
    margin: "0 7px 11px 0",
  },
});

export default function Checks({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
