import { StyleSheet } from "react-native";
import { Colors } from "../context/colors/Colors";

export const QuestionScreenStyle = StyleSheet.create({
  view: {
    backgroundColor: Colors.morado,
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
  },
  tittle: {
    fontSize: 25,
    color: Colors.gris,
    marginTop:10
  },
  number: {
    fontSize: 26,
    color: Colors.blanco,
    fontWeight: "900",
    alignItems:'center'
  },
  containeQuestion: {
    height: 110,
    width: "100%",
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
    padding:12,
  },
  question:{
    fontSize:18,
    color: Colors.blanco,
    fontWeight: "900",
    textAlign:'center'
  },
  //response
  containerResponses:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    gap:10
  }
});
