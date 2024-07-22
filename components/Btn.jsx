import { View, Text, Pressable } from "react-native";
import React from "react";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

const Btn = ({ text, callback, style }) => {
  function getStyle() {
    return style;
  }
  const styleBtn = getStyle();
  return (
    <StyledPressable
      className={`${styleBtn} active:opacity-60 active:text-gray-700 items-center justify-center rounded`}
      onPress={callback}
    >
      <Text className="text-white font-bold text-lg">{text}</Text>
    </StyledPressable>
  );
};

export default Btn;
