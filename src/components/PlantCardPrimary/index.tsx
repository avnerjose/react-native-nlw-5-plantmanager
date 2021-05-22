import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";
import { Container, CardText } from "./styles";

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export function PlantCardPrimary({ data, ...rest }: PlantProps) {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} height={80} width={80} />
      <CardText>{data.name}</CardText>
    </Container>
  );
}
