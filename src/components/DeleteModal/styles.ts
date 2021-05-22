import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Modal = styled.Modal``;

export const ModalBackground = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalBody = styled.View`
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  background: ${() => colors.white};
  width: 265px;
  border-radius: 20px;
`;

export const ModalText = styled.Text`
  font-size: 17px;
  color: ${() => colors.heading};
  font-family: ${() => fonts.text};
  text-align: center;
`;

export const ModalTextBold = styled(ModalText)`
  font-family: ${() => fonts.heading};
  margin-bottom: 24px;
`;

export const ModalButton = styled.TouchableOpacity`
  background: ${() => colors.shape};
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  width: 48%;
`;

export const ModalButtonText = styled.Text`
  font-size: 15px;
  font-family: ${() => fonts.text};
`;

export const ModalButtonTextCancel = styled(ModalButtonText)`
  color: ${() => colors.red};
`;

export const ModalButtonsView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalPlantImageView = styled.View`
  background: ${() => colors.shape};
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-bottom: 16px;
`;
