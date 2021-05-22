import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { EnvironmentButton } from "../../components/EnvironmentButton";
import { PlantCardPrimary } from "../../components/PlantCardPrimary";
import { Load } from "../../components/Load";
import { PlantProps } from "../../libs/storage";
import colors from "../../styles/colors";
import Api from "../../services/api";
import {
  Container,
  EnvironmentButtonList,
  PlantsContainer,
  PlantsList,
  Subtitle,
  Title,
} from "./styles";

export interface EnvironmentProps {
  key: string;
  title: string;
}

export function PlantSelect() {
  const navigation = useNavigation();

  const [environments, setEnvironments] = useState<Array<EnvironmentProps>>([]);
  const [plants, setPlants] = useState<Array<PlantProps>>([]);
  const [filteredPlants, setFilteredPlants] = useState<Array<PlantProps>>([]);
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>("all");

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnvironment();
    fetchPlants();
  }, []);

  const fetchEnvironment = async () => {
    const { data } = await Api.get(
      "plants_environments?_sort=title&_order=asc"
    );

    setEnvironments([
      {
        key: "all",
        title: "Todos",
      },
      ...data,
    ]);
  };

  const fetchPlants = async () => {
    const { data } = await Api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );

    if (!data) {
      return setLoading(true);
    }

    if (page > 1) {
      setPlants((currentData) => [...currentData, ...data]);
      setFilteredPlants((currentData) => [...currentData, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);
  };

  const handleEnvironmentSelect = (key: string) => {
    setSelectedEnvironment(key);

    if (key === "all") {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter((planta) =>
      planta.environments.includes(key)
    );

    return setFilteredPlants(filtered);
  };

  const handleFetchMore = (distance: number) => {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage(page + 1);
    fetchPlants();
  };

  const onRefresh = () => {
    setRefreshing(true);
    setPage(1);
    if (selectedEnvironment === "all") {
      fetchPlants();
    } else {
      handleEnvironmentSelect(selectedEnvironment);
    }

    setRefreshing(false);
  };

  const handlePlantCardClick = (plant: PlantProps) => {
    navigation.navigate("PlantSave", { plant });
  };

  return (
    <>
      {loading ? (
        <Load />
      ) : (
        <Container>
          <Header />
          <View>
            <Title>Em qual ambiente</Title>
            <Subtitle>você quer colocar sua planta?</Subtitle>
          </View>
          <View>
            <EnvironmentButtonList
              data={environments}
              keyExtractor={(item) => String(item.key)}
              renderItem={({ item }) => (
                <EnvironmentButton
                  active={selectedEnvironment === item.key}
                  onPress={() => handleEnvironmentSelect(item.key)}
                >
                  {item.title}
                </EnvironmentButton>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                height: 40,
                justifyContent: "center",
                marginVertical: 32,
              }}
            />
          </View>
          <PlantsContainer>
            <PlantsList
              data={filteredPlants}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <PlantCardPrimary
                  data={item}
                  onPress={() => handlePlantCardClick(item)}
                />
              )}
              refreshControl={
                <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
              }
              showsVerticalScrollIndicator={false}
              numColumns={2}
              onEndReachedThreshold={0.3}
              onEndReached={({ distanceFromEnd }) =>
                handleFetchMore(distanceFromEnd)
              }
              ListFooterComponent={
                <>{loadingMore && <ActivityIndicator color={colors.green} />}</>
              }
            />
          </PlantsContainer>
        </Container>
      )}
    </>
  );
}

//51:00
