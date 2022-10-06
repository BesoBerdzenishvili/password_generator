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
  const [password, setPassword] = useState("P4$5W0rD!");

  return (
    <Wrapper>
      <Title>Password Generator</Title>
      <Display password={password} />
      <Options setPassword={setPassword} />
    </Wrapper>
  );
}

export default App;
