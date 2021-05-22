import React, { useState } from "react";
import { Keyboard, Platform, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../components/Button";
import {
  Container,
  Emoji,
  Footer,
  Form,
  HideKeyboard,
  Input,
  Title,
} from "./styles";

export function UserIdentification() {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState("");

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleSubmit = async () => {
    if (!name) {
      return Alert.alert("Preencha seu nome");
    }
    await AsyncStorage.setItem("@plantmanager:username", name);
    navigation.navigate("Confirmation", {
      title: "Prontinho",
      subtitle:
        "Agora vamos começar a cuidader das suas plantinhas com muito cuidado.",
      buttonTitle: "Começar",
      icon: "smile",
      nextScreen: "PlantSelect",
    });
  };

  return (
    <Container>
      <HideKeyboard onPress={Keyboard.dismiss}>
        <Form behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <Emoji>😀</Emoji>
          <Title>Como podemos {"\n"} chamar você?</Title>
          <Input
            placeholder="Digite seu nome"
            value={name}
            onChangeText={(e) => setName(e)}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            focus={isFocused}
            content={name}
          />
          <Footer>
            <Button onPress={handleSubmit}>Confirmar</Button>
          </Footer>
        </Form>
      </HideKeyboard>
    </Container>
  );
}
