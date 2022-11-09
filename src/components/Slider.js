import React from "react";
import { styled } from "../stitches.config";

const RangeSlider = styled("div", {
  padding: "1.2px 0",
  // maxWidth: "244px",
  maxWidth: "744px",
  width: "100%",
  margin: "18px 0",
  paddingLeft: "4px",
  background: "#100f15",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  border: "1px solid green",
  "& input": {
    appearance: "none !important",
    border: "2px solid purple",
    maxWidth: "344px",
    width: "100%",
    height: "2px",
    background: "#100f15",
    // border: "none",
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

export default function Slider({ slide, setSlide }) {
  return (
    <div>
      <Wrapper>
        <p>Character Lenght</p>
        <p className="CharacterLenght">{slide}</p>
      </Wrapper>
      <RangeSlider>
        <input
          type="range"
          min="2"
          max="24"
          value={slide}
          onChange={(e) => setSlide(e.target.value)}
        />
      </RangeSlider>
    </div>
  );
}
