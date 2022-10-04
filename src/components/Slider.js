import React, { useState } from "react";
import { styled } from "../stitches.config";

const Range = styled("div", {
  padding: "1.2px 0",
  width: "344px",
  margin: "18px 0",
  paddingLeft: "4px",
  background: "#100f15",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  "& input": {
    appearance: "none !important",
    width: "420px",
    height: "2px",
    background: "#100f15",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
});

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-Between",
  color: "white",
  fontSize: "21px",
  [`& .CharacterLenght`]: {
    color: "#a4ffaf",
    fontSize: "23px",
  },
});

export default function Slider() {
  const [slide, setSlide] = useState(12);

  return (
    <div>
      <Wrapper>
        <p>Character Lenght</p>
        <p className="CharacterLenght">{slide}</p>
      </Wrapper>
      <Range>
        <input
          type="range"
          min="2"
          max="24"
          value={slide}
          onChange={(e) => setSlide(e.target.value)}
        />
      </Range>
    </div>
  );
}
