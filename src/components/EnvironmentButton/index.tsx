import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, ButtonText } from "./styles";

export interface EnvironmentButtonProps extends RectButtonProps {
  children: string;
  active?: boolean;
}

export function EnvironmentButton({
  children,
  active = false,
  ...rest
}: EnvironmentButtonProps) {
  return (
    <Container active={active} {...rest}>
      <ButtonText active={active}>{children}</ButtonText>
    </Container>
  );
}
