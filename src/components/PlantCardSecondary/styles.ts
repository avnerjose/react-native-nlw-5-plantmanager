import { RectButton } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";
import styled from "styled-components/native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const Container = styled(RectButton)`
  width: 100%;
  padding: 16px 12px;
  border-radius: 20px;
  margin: 8px 0;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: ${() => colors.shape};
`;

export const PlantImage = styled(SvgFromUri)``;

export const PlantName = styled.Text`
  flex: 1;
  margin-left: 12px;
  color: ${() => colors.heading};
  font-family: ${() => fonts.heading};
  font-size: 17px;
`;

export const PlantDetails = styled.View`
  align-items: flex-end;
`;

export const PlantTimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${() => fonts.text};
  color: ${() => colors.body_light};
`;

export const PlantTime = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${() => fonts.heading};
  color: ${() => colors.body_dark};
`;

export const ButtonRemove = styled(RectButton)`
  width: 120px;
  height: 85px;
  background: ${() => colors.red};
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  position: relative;
  right: 16px;
`;
