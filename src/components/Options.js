import React, { useState } from "react";
import { styled, globalStyles } from "../stitches.config";
import { generatePassword } from "./passwordGenerator";
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

export default function Options({ setPassword }) {
  const [sliderValue, setSliderValue] = useState(12);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const handleClick = () => {
    let password = generatePassword(
      sliderValue,
      uppercase,
      lowercase,
      numbers,
      symbols
    );
    setPassword(password);
  };
  return (
    <Wrapper>
      <Slider slide={sliderValue} setSlide={setSliderValue} />
      <Checks
        uppercase={uppercase}
        setUppercase={setUppercase}
        lowercase={lowercase}
        setLowercase={setLowercase}
        numbers={numbers}
        setNumbers={setNumbers}
        symbols={symbols}
        setSymbols={setSymbols}
      />
      <Strength passwordLength={sliderValue} />
      <Btn onClick={handleClick}>Generate &gt;</Btn>
    </Wrapper>
  );
}
