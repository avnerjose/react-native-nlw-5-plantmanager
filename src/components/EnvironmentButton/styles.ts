import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { EnvironmentButtonProps } from ".";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

interface EnvironmentButtonTextProps {
  active?: boolean;
}

export const Container = styled(RectButton)<any>`
  background: ${(p: EnvironmentButtonProps) =>
    p.active ? colors.green_light : colors.shape};
  height: 40px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-right: 5px;
`;

export const ButtonText = styled.Text`
  color: ${(p: EnvironmentButtonTextProps) =>
    p.active ? colors.green_dark : colors.heading};
  font-family: ${(p: EnvironmentButtonTextProps) =>
    p.active ? fonts.heading : fonts.text};
`;
