import { View, Text, ActivityIndicator, ToastAndroid } from "react-native";
import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { QuestionScreenStyle } from "../styles/QuestionScreenStyle";
import { contextKey } from "../context/Contexto";
import Question from "../components/Question";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Btn from "../components/Btn";
import MyModal from "../components/Modal";

const QuestionScreen = ({navigation}) => {
  const {
    themaSelect,
    questionActual,
    listQuestion,
    setIndex,
    setQuestion,
    setList,
    handleResponse,
    solution,
    questionVisited,
    setVisited,
    goToPage
  } = useContext(contextKey);

  const [response, setResponse] = useState(null);
  const inset = useSafeAreaInsets();
  const [preguntasCorrectas, setCorrectas] = useState(0);
  const [preguntasInCorrectas, setInCorrectas] = useState(0);
  const [counter, setCounter] = useState(1);
  const [activeModal, setModal] = useState(false);

  const mainQuestion = () => {
    const questions = themaSelect.preguntas;
    if (questions.length > 0) {
      setList(questions);
      const i = randomIndex(questions);
      setIndex(i);
      setQuestion(questions[i]);
      setVisited([i]);
    }
  };

  function close(){
    setModal(false);
    goToPage(navigation,null);
  }

  function nextQuestion() {
    if (counter < listQuestion.length) {
      let i;
      let questionVisitedSet = new Set(questionVisited);
  
      // Encuentra un índice no visitado
      do {
        i = randomIndex(listQuestion);
      } while (questionVisitedSet.has(i));
  
      // Actualiza el estado con la nueva pregunta
      setCounter(counter + 1);
      setIndex(i);
      setQuestion(listQuestion[i]);
      setModal(false);
      setResponse(null);
      setVisited([...questionVisited, i]);
      //console.log(questionVisited);
    } else {
      // Si todas las preguntas han sido visitadas, cierra el modal
      setModal(false);
    }
  }
  

  const randomIndex = (questions) => {
    return Math.floor(Math.random() * questions.length);
  };

  async function handleNext() {
    //console.log(response);
    if (response != null) {
      //console.log(questionActual.respuestas);
      await handleResponse(
        response,
        questionActual.respuestas,
        setCorrectas,
        setInCorrectas
      );
      setModal(true);
    } else {
      ToastAndroid.show("Debe seleccionar una respuesta", ToastAndroid.SHORT);
    }
  }

  useEffect(() => {
    mainQuestion();
  }, [themaSelect]);


  const Main = () => {
    return (
      <>
        <Text style={QuestionScreenStyle.tittle}>{themaSelect.id}</Text>
        <Text style={QuestionScreenStyle.number}>
          Preguntas Correctas: {preguntasCorrectas}/{listQuestion.length}{" "}
        </Text>
        <View style={QuestionScreenStyle.containeQuestion}>
          <Text style={QuestionScreenStyle.question}>
            {questionActual ? questionActual.pregunta : "error"}
          </Text>
        </View>

        <View
          className="w-full justify-center items-center h-96 mb-5"
          style={{ gap: 15 }}
        >
          {questionActual && questionActual.respuestas
            ? questionActual.respuestas.map((e, i) => (
                <Question
                  item={e.texto}
                  key={i}
                  index={i}
                  response={response}
                  setResponse={setResponse}
                />
              ))
            : null}
        </View>
        <View
          className="h-20 w-full flex-row items-center justify-center mt-4"
        >
          <Btn
            text={"Responder"}
            callback={handleNext}
            style={"h-12 w-60 bg-blue-500"}
          />
        </View>
        <MyModal
          visible={activeModal}
          solucion={solution}
          callBack={{nextQuestion,close}}
          counter={counter}
          limit={listQuestion.length}
          incorrectas={preguntasInCorrectas}
          correctas={preguntasCorrectas}
        />
      </>
    );
  };

  return (
    <View
      style={[
        { paddingTop: inset.top, paddingBottom: inset.bottom },
        QuestionScreenStyle.view,
      ]}
    >
      {questionActual ? <Main /> : <ActivityIndicator />}
    </View>
  );
};

export default memo(QuestionScreen);
