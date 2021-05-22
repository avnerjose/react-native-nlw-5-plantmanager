import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity<any>`
  background: ${() => colors.green};
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${() => colors.white};
`;
