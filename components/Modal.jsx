import { View, Text, Modal, Pressable } from "react-native";
import React, { useContext } from "react";
import { Colors } from "../context/colors/Colors";
import { AntDesign } from "@expo/vector-icons";
import Btn from "./Btn";
import { contextKey } from "../context/Contexto";
import SvgCopa from "../svg/copa";

const MyModal = ({ visible, callBack, counter, limit, incorrectas,correctas }) => {
  const { solution } = useContext(contextKey);
  const sizeStar = 60;
  const colorStar = Colors.amarillo;
  let porcentaje = parseInt((correctas / limit) * 100);

  function respuestas() {
    return (
      <View className="items-center justify-center" style={{ width: "90%" }}>
        <Text className="w-full text-center text-gray-50 text-4xl mt-12 mb-2 font-bold">
          {solution ? solution.text : "error"}
        </Text>

        {/*stars*/}
        <View className="w-full h-16 justify-center items-center my-6 flex-row mb-14">
          <View className="w-2/6 h-full justify-center items-center my-3">
            <AntDesign
              name="star"
              size={sizeStar}
              color={
                solution && solution.text == "Respuesta Correcta"
                  ? colorStar
                  : Colors.vinoTintoOscuro
              }
            />
          </View>
          <View className="w-2/6 h-full justify-start items-center my-3">
            <AntDesign
              name="star"
              size={sizeStar}
              color={
                solution && solution.text == "Respuesta Correcta"
                  ? colorStar
                  : Colors.vinoTintoOscuro
              }
            />
          </View>
          <View className="w-2/6 h-full justify-center items-center my-3">
            <AntDesign
              name="star"
              size={sizeStar}
              color={
                solution && solution.text == "Respuesta Correcta"
                  ? colorStar
                  : Colors.vinoTintoOscuro
              }
            />
          </View>
        </View>

        {/*respuesta*/}
        <Text className="w-full text-center text-gray-50 text-2xl font-bold">
          La respuesta correcta es:
        </Text>
        <Text className="py-6 px-8 rounded-xl bg-teal-900 text-center text-green-400 text-4xl mt-8 font-bold">
          {solution ? solution.response : "error"}
        </Text>

        <View
          className="flex-row w-full items-center justify-center my-5 py-10"
          style={{ gap: 15 }}
        >
          <Btn
            callback={callBack.nextQuestion}
            text={"Siguiente"}
            style={"px-14 py-4 bg-blue-500"}
          />
        </View>
      </View>
    );
  }
  function win() {
    return (
      <View className="items-center justify-center" style={{ width: "90%" }}>
        <Text className="w-full text-center text-gray-50 text-4xl mt-12 mb-6 font-bold">
          Preguntas Completas
        </Text>

        {/*stars*/}
        <View className="w-full h-66 justify-center items-center mb-14">
          <View className="w-full justify-center items-center h-24 flex-row">
            <View className="w-2/6 h-full justify-end items-center ">
              <AntDesign
                name="star"
                size={sizeStar}
                color={
                  porcentaje > 29 ? Colors.amarillo : Colors.vinoTinto 
                }
              />
            </View>
            <View className="w-2/6 h-fulljustify-center items-center">
              <AntDesign
                name="star"
                size={sizeStar}
                color={
                  porcentaje > 59 ? Colors.amarillo : Colors.vinoTinto 
                }
              />
            </View>
            <View className="w-2/6 h-full justify-end items-center">
              <AntDesign
                name="star"
                size={sizeStar}
                color={
                  porcentaje > 90 ? Colors.amarillo : Colors.vinoTinto 
                }
              />
            </View>
          </View>
          <View className="w-2/6 h-36 justify-center items-center mb-5">
            <SvgCopa />
          </View>
        </View>

        {/*puntaje*/}
        <View
          className="w-11/12 items-center justify-center my-5 h-32 px-2 rounded-2xl"
          style={ { backgroundColor: Colors.moradoClaro }}
        >
          <Text className="w-full text-left text-gray-50 text-2xl font-bold">
            Total Preguntas {limit}
          </Text>
          <Text className="w-full text-left text-gray-50 text-2xl font-bold">
            Preguntas Correctas: {correctas}
          </Text>
          <Text className="w-full text-left text-gray-50 text-2xl font-bold">
            Preguntas Incorrectas: {incorrectas}
          </Text>
        </View>

        <View
          className="flex-row w-full items-center justify-center py-10"
          style={{ gap: 15 }}
        >
          <Btn
            callback={callBack.close}
            text={"Volver"}
            style={"px-14 py-4 bg-blue-500"}
          />
        </View>
      </View>
    );
  }
  return (
    <Modal animationType="slide" visible={visible}>
      <View
        className="flex-1 items-center justify-center gap-5"
        style={{ backgroundColor: Colors.morado }}
      >
        {counter < limit ? respuestas() : win()}
      </View>
    </Modal>
  );
};

export default MyModal;
