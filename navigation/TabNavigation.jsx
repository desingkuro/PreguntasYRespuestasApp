import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { AntDesign } from "@expo/vector-icons";
import Setting from "../screens/Setting";
import { Colors } from "../context/colors/Colors";
import StackNavigation from "./StackNavigation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({focused}) => (
          <CustomTabBarIcon name={route.name} focused={focused} />
        ),
        tabBarShowLabel:false,
      })}
    >
      <Tab.Screen
        name="home"
        component={StackNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="setting"
        component={Setting}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
const CustomTabBarIcon = ({ name, focused }) => {
  // Establece estilos específicos para las pestañas activas
  const iconSize = focused ? 30 : 24;
  const iconColor = focused ? "black" : "gray";
  const backgroundColor = focused ? Colors.grisAzulado : "transparent"; // Cambia el color de fondo aquí

  return (
    <View
      style={{
        backgroundColor,
        borderRadius: 50, // Hace que el ícono sea circular
        padding: 10,
        height:50,
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <AntDesign name={name} size={iconSize} color={iconColor} />
    </View>
  );
};

export default TabNavigation;
