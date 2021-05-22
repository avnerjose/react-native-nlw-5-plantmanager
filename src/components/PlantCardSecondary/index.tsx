import React from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import { RectButtonProps } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Feather } from "@expo/vector-icons";
import { PlantProps } from "../../libs/storage";
import colors from "../../styles/colors";
import {
  Container,
  ButtonRemove,
  PlantDetails,
  PlantImage,
  PlantName,
  PlantTime,
  PlantTimeLabel,
} from "./styles";

interface PlantCardSecondaryProps extends RectButtonProps {
  data: PlantProps;
  handleRemove: () => void;
}

export function PlantCardSecondary({
  data,
  handleRemove,
  ...rest
}: PlantCardSecondaryProps) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <ButtonRemove onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </ButtonRemove>
          </View>
        </Animated.View>
      )}
    >
      <Container {...rest}>
        <PlantImage uri={data.photo} width={64} height={64} />
        <PlantName>{data.name}</PlantName>
        <PlantDetails>
          <PlantTimeLabel>Regar às</PlantTimeLabel>
          <PlantTime>{data.hour}</PlantTime>
        </PlantDetails>
      </Container>
    </Swipeable>
  );
}
