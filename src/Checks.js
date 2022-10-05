import React from "react";
import { styled } from "./stitches.config";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifySelf: "flex-start",
  padding: "18px 18px",
  color: "white",
  width: "384px",
});

const Check = styled("input", {
  margin: "0 7px 11px 0",
});

export default function Checks() {
  return (
    <Wrapper>
      <label>
        <Check type="checkbox" />
        Include Uppercase Letters
      </label>
      <label>
        <Check type="checkbox" />
        Include Lowercase Letters
      </label>
      <label>
        <Check type="checkbox" />
        Include Numbers
      </label>
      <label>
        <Check type="checkbox" />
        Include Symbols
      </label>
    </Wrapper>
  );
}
