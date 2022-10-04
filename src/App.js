import React from "react";
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
  return (
    <Wrapper>
      <Title>Password Generator</Title>
      <Display />
      <Options />
    </Wrapper>
  );
}

export default App;
