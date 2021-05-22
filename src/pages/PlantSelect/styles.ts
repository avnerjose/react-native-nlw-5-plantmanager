import styled from "styled-components/native";
import { FlatList } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { EnvironmentProps } from "./index";
import { PlantProps } from "../../libs/storage";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 32px;
  background: ${() => colors.background};
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${() => colors.heading};
  font-family: ${() => fonts.heading};
  line-height: 20px;
  margin-top: 16px;
`;

export const Subtitle = styled(Title)`
  font-family: ${() => fonts.text};
  margin-top: 0;
`;

export const EnvironmentButtonList = styled(
  FlatList as new () => FlatList<EnvironmentProps>
)``;

export const PlantsContainer = styled.View`
  flex: 1;
  padding: 0 1px;
  justify-content: center;
`;

export const PlantsList = styled(FlatList as new () => FlatList<PlantProps>)``;
