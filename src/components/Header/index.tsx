import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, BoldText, RegularText, UserImage } from "./styles";
export function Header() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    loadUsername();
  }, []);

  const loadUsername = async () => {
    const name = await AsyncStorage.getItem("@plantmanager:username");
    if (name) {
      setUsername(name);
    }
  };

  return (
    <Container>
      <View>
        <RegularText>Olá,</RegularText>
        <BoldText>{username}</BoldText>
      </View>
      <UserImage
        source={{ uri: "https://avatars.githubusercontent.com/u/49520658?v=4" }}
      />
    </Container>
  );
}
