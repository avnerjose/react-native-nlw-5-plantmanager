import { StatusBar } from "expo-status-bar";
import React from "react";
import { PlantProps } from "../../libs/storage";
import { SvgFromUri } from "react-native-svg";
import {
  Modal,
  ModalBackground,
  ModalBody,
  ModalButton,
  ModalButtonText,
  ModalButtonTextCancel,
  ModalButtonsView,
  ModalPlantImageView,
  ModalText,
  ModalTextBold,
} from "./styles";

interface DeleteModalProps {
  data: PlantProps;
  show: boolean;
  setShow: (b: boolean) => void;
  handleDelete: (i: string) => void;
}

export function DeleteModal({
  data,
  show,
  setShow,
  handleDelete,
}: DeleteModalProps) {
  const handleCancelButton = () => {
    setShow(false);
  };

  const handleDeleteButton = async () => {
    await handleDelete(data.id);
    setShow(false);
  };

  return (
    <Modal transparent visible={show} animationType="slide">
      <StatusBar backgroundColor="#000" translucent={true} />
      <ModalBackground>
        <ModalBody>
          <ModalPlantImageView>
            <SvgFromUri uri={data.photo} width={120} height={120} />
          </ModalPlantImageView>
          <ModalText>Deseja mesmo deletar sua</ModalText>
          <ModalTextBold>{data.name} ?</ModalTextBold>
          <ModalButtonsView>
            <ModalButton activeOpacity={0.6} onPress={handleCancelButton}>
              <ModalButtonText>Cancelar</ModalButtonText>
            </ModalButton>
            <ModalButton activeOpacity={0.6}>
              <ModalButtonTextCancel onPress={handleDeleteButton}>
                Deletar
              </ModalButtonTextCancel>
            </ModalButton>
          </ModalButtonsView>
        </ModalBody>
      </ModalBackground>
    </Modal>
  );
}
