import React from "react";
import LoadingAnimation from "../../assets/load.json";
import { Container, Animation } from "./styles";

export function Load() {
  return (
    <Container>
      <Animation source={LoadingAnimation} autoPlay loop />
    </Container>
  );
}
