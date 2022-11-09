import React from "react";
import { styled } from "../stitches.config";

const Block = styled("div", {
  backgroundColor: "transparent",
  height: "21px",
  padding: "0 3px",
  marginRight: "6px",

  variants: {
    color: {
      weak: { border: "1.5px solid red" },
      normal: { border: "1.5px solid yellow" },
      strong: { border: "1.5px solid green" },
    },
  },
});

const Wrapper = styled("div", {
  display: "flex",
  backgroundColor: "#100f15",

  variants: {
    component: {
      true: {
        padding: "18px 18px",
        maxWidth: "344px",
        width: "100%",
        marginBottom: "21px",
        justifyContent: "space-between",
      },
    },
  },
});

const Label = styled("p", {
  color: "#3c3b43",
});

export default function Strength({ passwordLength = "12" }) {
  let blocks = [];
  let colorValue;

  if (passwordLength < 4) {
    blocks = [1, 2, 3];
  } else if (passwordLength >= 4 && passwordLength < 8) {
    blocks = [1, 2, 3, 4, 5, 6];
  } else if (passwordLength >= 8 && passwordLength < 12) {
    blocks = [1, 2, 3, 4, 5, 6, 7, 8];
  } else if (passwordLength >= 12 && passwordLength < 16) {
    blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  } else if (passwordLength >= 16) {
    blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  }

  if (passwordLength < 8) {
    colorValue = "weak";
  } else if (passwordLength >= 8 && passwordLength < 16) {
    colorValue = "normal";
  } else if (passwordLength > 16) {
    colorValue = "strong";
  }
  return (
    <Wrapper component>
      <Label>STRENGTH</Label>
      <Wrapper>
        {blocks.map((i) => (
          <Block key={i} color={colorValue} />
        ))}
      </Wrapper>
    </Wrapper>
  );
}
