import React, { useState, useEffect } from "react";
import { Platform, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute, useNavigation } from "@react-navigation/native";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { format, isBefore } from "date-fns";
import { Button } from "../../components/Button";
import WaterDrop from "../../assets/waterdrop.png";
import { PlantProps, savePlant } from "../../libs/storage";
import {
  Container,
  AlertLabel,
  ChangeDateTimeButton,
  ChangeDateTimeButtonText,
  Controller,
  PlantAbout,
  PlantImage,
  PlantInfo,
  PlantName,
  TipContainer,
  TipImage,
  TipText,
} from "./styles";

export function PlantSave() {
  const navigation = useNavigation();
  const route = useRoute();

  const [plant, setPlant] = useState<PlantProps>();
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(
    Platform.OS == "ios"
  );

  useEffect(() => {
    const { plant } = route.params as { plant: PlantProps };

    setPlant(plant);
  }, []);

  const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
    if (Platform.OS === "android")
      setShowDatePicker((currentData) => !currentData);

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert("Escolha uma data no futuro!");
    }

    if (dateTime) setSelectedDateTime(dateTime);
  };

  const handleSave = async () => {
    try {
      if (plant)
        await savePlant({
          ...plant,
          dateTimeNotification: selectedDateTime,
        });
      navigation.navigate("Confirmation", {
        title: "Tudo certo!",
        subtitle:
          "Fique tranquilo que sempre vamos" +
          "lembrar você de cuidar da sua plantinha com muito cuidado.",
        buttonTitle: "Muito obrigado :D",
        icon: "hug",
        nextScreen: "MyPlants",
      });
    } catch {
      Alert.alert("Não foi possível salvar sua planta!");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Container>
        {plant && (
          <>
            <PlantInfo>
              <PlantImage uri={plant.photo} height={150} width={150} />
              <PlantName>{plant.name}</PlantName>
              <PlantAbout>{plant.about}</PlantAbout>
            </PlantInfo>
            <Controller>
              <TipContainer>
                <TipImage source={WaterDrop} />
                <TipText>{plant.water_tips}</TipText>
              </TipContainer>
              <AlertLabel>
                Escolha o melhor horário para ser lembrado:
              </AlertLabel>

              {showDatePicker && (
                <DateTimePicker
                  value={selectedDateTime}
                  mode="time"
                  display="spinner"
                  onChange={handleChangeTime}
                />
              )}

              {Platform.OS === "android" && (
                <ChangeDateTimeButton
                  onPress={() => setShowDatePicker(!showDatePicker)}
                >
                  <ChangeDateTimeButtonText>
                    {`Mudar ${format(selectedDateTime, "HH:mm")}`}
                  </ChangeDateTimeButtonText>
                </ChangeDateTimeButton>
              )}

              <Button onPress={handleSave}>Cadastrar planta</Button>
            </Controller>
          </>
        )}
      </Container>
    </ScrollView>
  );
}
