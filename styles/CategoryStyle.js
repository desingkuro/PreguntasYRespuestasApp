import { StyleSheet } from "react-native";
import { Colors } from "../context/colors/Colors";

export const CategoryStyle = StyleSheet.create({
  container: {
    height: 110,
    width: 110,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  text: {
    fontSize: 15,
    fontWeight: "800",
    color: Colors.negroClaro,
  },
});
