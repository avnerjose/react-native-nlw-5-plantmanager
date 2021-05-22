import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${() => fonts.heading};
  line-height: 34px;
  text-align: center;
  color: ${() => colors.heading};
  margin-top: 38px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: ${() => fonts.text};
  padding: 0 20px;
  color: ${() => colors.heading};
`;

export const WateringImage = styled.Image`
  height: ${() => `${Dimensions.get("window").width * 0.7}px`};
`;

export const NextPageButton = styled.TouchableOpacity`
  background: ${() => colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 16px;
  height: 56px;
  width: 56px;
`;

export const NextPageButtonText = styled.Text`
  color: ${() => colors.white};
  font-size: 24px;
`;

export const NextPageButtonIcon = styled(Feather)`
  font-size: 28px;
`;
