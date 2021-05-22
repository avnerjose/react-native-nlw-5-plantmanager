import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { PlantSelect } from "../pages/PlantSelect";
import { MyPlants } from "../pages/MyPlants";
import colors from "../styles/colors";

const BottomTabs = createBottomTabNavigator();

export function AuthRoutes() {
  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: "beside-icon",
        style: {
          height: 88,
        },
      }}
    >
      <BottomTabs.Screen
        name="Nova planta"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Minhas plantas"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
