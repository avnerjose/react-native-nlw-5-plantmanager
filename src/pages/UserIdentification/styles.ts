import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

interface InputProps {
  focus: boolean;
  content: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Form = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${() => colors.heading};
  font-family: ${() => fonts.heading};
  margin-top: 50px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 50px;
  padding: 0 20px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${(p: InputProps) =>
    p.focus || p.content != "" ? colors.green : colors.gray};
  color: ${() => colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;

export const HideKeyboard = styled.TouchableWithoutFeedback``;
