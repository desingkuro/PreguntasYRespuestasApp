import React, { createContext, useState } from "react";
import SvgQuimica from "../svg/Quimica";
import SvgCiencia from "../svg/Ciencia";
import SvgEspacio from "../svg/espacio";
import SvgHistoria from "../svg/Historia";
import { preguntasHistoria } from "./api/historia/historia";
import { preguntasQuimica } from "./api/quimica/quimica";
import { preguntasBiologia } from "./api/naturaleza/biologia";
import { preguntasEspacio } from "./api/Space/espacio";
import { preguntasProgramacion } from "./api/programación/programacion";
import SvgCode from "../svg/code";
import SvgMatematicas from "../svg/matematicas";
import { preguntasMatematicas } from "./api/matematicas/matemaicas";

export const contextKey = createContext();

const Contexto = ({ children }) => {
  const [themaSelect, setThema] = useState("");
  const [questionActual, setQuestion] = useState(0);
  const [listQuestion, setList] = useState([]);
  const [questionVisited, setVisited] = useState([]);
  const [solution, setSolution] = useState(null);
  const [index, setIndex] = useState(0);

  const categorias = [
    {
      name: "Biologia",
      icon: <SvgCiencia />,
      id: "Biologia",
      preguntas: preguntasBiologia,
    },
    {
      name: "Química",
      icon: <SvgQuimica />,
      id: "Quimica",
      preguntas: preguntasQuimica,
    },
    {
      name: "Espacio",
      icon: <SvgEspacio />,
      id: "Espacio",
      preguntas: preguntasEspacio,
    },
    {
      name: "Historia",
      icon: <SvgHistoria />,
      id: "Historia",
      preguntas: preguntasHistoria,
    },
    {
      name: "Programación",
      icon: <SvgCode width={70} height={70} />,
      id: "Programacion",
      preguntas: preguntasProgramacion,
    },
    {
      name: "Matemáticas",
      icon: <SvgMatematicas />,
      id: "Matematicas",
      preguntas: preguntasMatematicas,
    },
  ];

  function goToPage(navigation, page) {
    if (page == null) {
      navigation.goBack();
    } else {
      navigation.navigate(page);
    }
  }

  function mainQueston(){
    setList(themaSelect.preguntas);
    const i = ramdomQuestion(listQuestion.length);
    setIndex(i);
    setQuestion(listQuestion[i]);
  }

  function getResponseCorrect(listResponse){
    return listResponse.find(e=>e.esVerdadera==true).texto
  }

  function handleResponse(response,listResponse,setCorrectas,setInCorrectas){
    //console.log(response);
    if(response!=null){
      const result = listResponse[response].esVerdadera
      //console.log(result);
      if(result){
        setCorrectas((preguntasCorrectas) => preguntasCorrectas + 1);
        setSolution({text:'Respuesta Correcta', response:listResponse[response].texto})
      }else{
        setInCorrectas((preguntasInCorrectas) => preguntasInCorrectas + 1);
        const getResponse = getResponseCorrect(listResponse);
        setSolution({text:'Respuesta Incorrecta', response:getResponse})
      }
    }
  }

  return (
    <contextKey.Provider
      value={{
        categorias,
        goToPage,
        themaSelect,
        setThema,
        questionActual,
        setQuestion,
        listQuestion,
        setList,
        questionVisited,
        setVisited,
        mainQueston,
        index, setIndex,
        handleResponse,
        solution, setSolution
      }}
    >
      {children}
    </contextKey.Provider>
  );
};

export default Contexto;