import { StyleSheet } from "react-native";
import { Colors } from "../context/colors/Colors";

export const QuestionStyle = StyleSheet.create({
    container:{
        width:360,
        height:80,
        alignItems:'center',
        justifyContent:'flex-start',
        padding:5,
        borderRadius:10,
        flexDirection:'row',
        gap:5,
        borderWidth:2
    },
    containerActivo:{
        borderColor:Colors.verderMedio,
    },
    containerInactivo:{
        borderColor:Colors.gris,
    },
    text:{
        fontSize:18,
        fontWeight:'600',
        width:'90%',
        paddingLeft:12
    },
    textActivo:{
        color:Colors.verderMedio
    },
    textInactivo:{
        color:Colors.gris
    },
    checkbox:{
        width:20,
        height:20,
        borderRadius:17,
    },
    activo:{

    },
    desactivado:{

    }
})