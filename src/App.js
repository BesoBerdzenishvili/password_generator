import React, { useState } from "react";
import { styled } from "./stitches.config";
import Options from "./components/Options";
import Display from "./components/Display";

const Wrapper = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
});

const Title = styled("p", {
  color: "white",
  textAlign: "center",
  fontSize: "24px",
  marginBottom: "21px",
});

function App() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  console.log(symbols, "symbols", numbers, "numbers");

  return (
    <Wrapper>
      <Title>Password Generator</Title>
      <Display
        uppercase={uppercase}
        lowercase={lowercase}
        numbers={numbers}
        symbols={symbols}
      />
      <Options
        uppercase={uppercase}
        setUppercase={setUppercase}
        lowercase={lowercase}
        setLowercase={setLowercase}
        numbers={numbers}
        setNumbers={setNumbers}
        symbols={symbols}
        setSymbols={setSymbols}
      />
    </Wrapper>
  );
}

export default App;
