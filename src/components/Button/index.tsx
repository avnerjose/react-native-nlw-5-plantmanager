import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, ButtonText } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  children: string;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}
