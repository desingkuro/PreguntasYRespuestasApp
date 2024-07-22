import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState, useMemo, memo } from "react";
import { QuestionStyle } from "../styles/QuestionStyle";
import Checkbox from "expo-checkbox";
import { Colors } from "../context/colors/Colors";

const Question = ({ item, index, response, setResponse }) => {
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    if (response !== index) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [response, index]);

  const handleClick = () => {
    setResponse(index);
  };

  const memoizedStyles = useMemo(() => ({
    container: [
      QuestionStyle.container,
      isChecked ? QuestionStyle.containerActivo : QuestionStyle.containerInactivo,
    ],
    text: [
      QuestionStyle.text,
      isChecked ? QuestionStyle.textActivo : QuestionStyle.textInactivo,
    ],
    checkboxColor: isChecked ? Colors.verderMedio : undefined,
  }), [isChecked]);

  return (
    <Pressable
      style={memoizedStyles.container}
      onPress={handleClick}
    >
      <Text style={memoizedStyles.text}>
        {item}
      </Text>
      <Checkbox
        style={QuestionStyle.checkbox}
        value={isChecked}
        color={memoizedStyles.checkboxColor}
      />
    </Pressable>
  );
};

export default memo(Question);
