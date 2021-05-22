import styled from "styled-components/native";
import { FlatList } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { PlantProps } from "../../libs/storage";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px 0;
  background: ${() => colors.background};
`;

export const Spotlight = styled.View`
  background: ${() => colors.blue_light};
  padding: 0 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpotlightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotlightText = styled.Text`
  flex: 1;
  color: ${() => colors.blue};
  padding: 0 16px;
  line-height: 20px;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${() => fonts.heading};
  color: ${() => colors.heading};
  margin: 20px 0;
`;

export const PlantList = styled(FlatList as new () => FlatList<PlantProps>)``;

export const NoPlants = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NoPlantsText = styled(PlantsTitle)`
  text-align: center;
`;

export const NoPlantsImage = styled.Image`
  width: 70px;
  height: 70px;
`;
