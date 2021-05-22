import { StatusBar } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.View`
  width: 100%;
  margin-top: ${() => StatusBar.currentHeight}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RegularText = styled.Text`
  font-size: 32px;
  font-family: ${() => fonts.text};
  color: ${() => colors.heading};
  line-height: 40px;
`;

export const BoldText = styled(RegularText)`
  font-family: ${() => fonts.heading};
`;

export const UserImage = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 40px;
`;
