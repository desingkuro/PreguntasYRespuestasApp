import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import Home from "../screens/Home";
import QuestionScreen from "../screens/QuestionScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homeScreen"
        component={Home}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="question"
        component={QuestionScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
