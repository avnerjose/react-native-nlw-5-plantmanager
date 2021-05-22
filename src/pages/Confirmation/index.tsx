import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Container, Content, Emoji, Title, Subtitle, Footer } from "./styles";

interface ConfirmationRouteParams {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
}

const emojis = {
  hug: "🤗",
  smile: "😃",
};

export function Confirmation() {
  const navigation = useNavigation();
  const route = useRoute();

  const { title, subtitle, icon, buttonTitle, nextScreen } =
    route.params as ConfirmationRouteParams;

  const handleConfirmClick = () => {
    navigation.reset({
      routes: [{ name: nextScreen }],
    });
  };

  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Footer>
          <Button onPress={handleConfirmClick}>{buttonTitle}</Button>
        </Footer>
      </Content>
    </Container>
  );
}

//Vídeo 2 - 1:07
