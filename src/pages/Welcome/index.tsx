import React from "react";
import { useNavigation } from "@react-navigation/native";
import wateringImg from "../../assets/watering.png";
import {
  Container,
  NextPageButton,
  NextPageButtonIcon,
  NextPageButtonText,
  Subtitle,
  Title,
  WateringImage,
} from "./styles";

export function Welcome() {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    navigation.navigate("UserIdentification");
  };

  return (
    <Container>
      <Title>
        Gerencie {"\n"} suas plantas de {"\n"} forma fácil
      </Title>
      <WateringImage source={wateringImg} />
      <Subtitle>
        Não esqueça mais de regas suas plantas. Nós cuidamos de lembrar sempre
        que precisar.
      </Subtitle>
      <NextPageButton onPress={handleButtonClick} activeOpacity={0.7}>
        <NextPageButtonText>
          <NextPageButtonIcon name="chevron-right" />
        </NextPageButtonText>
      </NextPageButton>
    </Container>
  );
}
