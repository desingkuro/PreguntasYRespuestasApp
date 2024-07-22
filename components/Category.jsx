import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import { CategoryStyle } from "../styles/CategoryStyle";
import { Colors } from "../context/colors/Colors";
import { contextKey } from "../context/Contexto";

const Category = ({ item , onPress}) => {
  const {themaSelect,setThema} = useContext(contextKey);

  function handleClick(){
    setThema(item);
    onPress();
  }

  return (
    <Pressable
      style={({ pressed }) => [
        CategoryStyle.container,
        pressed
          ? { backgroundColor: "#d1d5e0" }
          : { backgroundColor: Colors.blanco },
      ]}
      onPress={handleClick}
    >
      {item.icon}
      <Text style={CategoryStyle.text}>{item.name} </Text>
    </Pressable>
  );
};

export default Category;
