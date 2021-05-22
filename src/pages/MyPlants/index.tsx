import React, { useState, useEffect } from "react";
import { Alert, RefreshControl } from "react-native";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import { PlantProps, loadPlants, removePlant } from "../../libs/storage";
import { Header } from "../../components/Header";
import { Load } from "../../components/Load";
import { PlantCardSecondary } from "../../components/PlantCardSecondary";
import { DeleteModal } from "../../components/DeleteModal";
import Icon from "../../../assets/icon.png";
import WaterDrop from "../../assets/waterdrop.png";
import {
  Container,
  NoPlants,
  NoPlantsImage,
  NoPlantsText,
  PlantList,
  Plants,
  PlantsTitle,
  Spotlight,
  SpotlightImage,
  SpotlightText,
} from "./styles";

export function MyPlants() {
  const [plants, setPlants] = useState<Array<PlantProps>>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [nextWatered, setNextWatered] = useState<string>();
  const [show, setShow] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState<PlantProps>();

  useEffect(() => {
    loadPlantsFromStorage();
  }, []);

  const loadPlantsFromStorage = async () => {
    setLoading(true);
    const data = await loadPlants();

    if (data[0]) {
      setPlants(data);
      const nextTime = formatDistance(
        new Date(data[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );
      setNextWatered(
        `Não esqueça de regar a ${data[0].name} à ${nextTime} horas.`
      );
    }
    setLoading(false);
  };

  const handleRemoveClick = (plant: PlantProps) => {
    setSelectedPlant(plant);
    setShow(true);
  };

  const handleRemove = async (id: string) => {
    try {
      await removePlant(id);
      setPlants((currentPlants) =>
        currentPlants.filter((item) => item.id !== id)
      );
    } catch (error) {
      Alert.alert("Não foi possível remover");
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadPlantsFromStorage();
    setRefreshing(false);
  };

  return (
    <>
      {loading ? (
        <Load />
      ) : (
        <Container>
          <Header />
          {plants[0] && (
            <>
              <Spotlight>
                <SpotlightImage source={WaterDrop} />
                <SpotlightText>{nextWatered}</SpotlightText>
              </Spotlight>
              <Plants>
                <PlantsTitle>Próximas regadas</PlantsTitle>
                <PlantList
                  data={plants}
                  keyExtractor={(item) => String(item.id)}
                  renderItem={({ item }) => (
                    <PlantCardSecondary
                      handleRemove={() => handleRemoveClick(item)}
                      data={item}
                    />
                  )}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                  showsVerticalScrollIndicator={false}
                />
              </Plants>
            </>
          )}
          {!plants[0] && (
            <NoPlants>
              <NoPlantsText>Você ainda não possui nenhuma planta!</NoPlantsText>
              <NoPlantsImage source={Icon} />
            </NoPlants>
          )}
          {selectedPlant && (
            <DeleteModal
              setShow={setShow}
              show={show}
              data={selectedPlant}
              handleDelete={handleRemove}
            />
          )}
        </Container>
      )}
    </>
  );
}
