import React, { useState } from "react";
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

export default function Options({
  uppercase,
  setUppercase,
  lowercase,
  setLowercase,
  numbers,
  setNumbers,
  symbols,
  setSymbols,
}) {
  const [sliderValue, setSliderValue] = useState(12);
  return (
    <Wrapper>
      <Slider slide={sliderValue} setSlide={setSliderValue} />
      <Checks>
        <label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
          Include Uppercase Letters
        </label>
        <label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
          Include Lowercase Letters
        </label>
        <label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          Include Symbols
        </label>
      </Checks>
      <Strength passwordLength={sliderValue} />
      <Btn>Generate &gt;</Btn>
    </Wrapper>
  );
}
