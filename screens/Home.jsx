import { View, Text, ScrollView } from "react-native";
import React, { memo, useContext} from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeStyle } from "../styles/HomeStyle";
import SvgConfeti from "../svg/Confeti";
import Category from "../components/Category";
import { contextKey } from "../context/Contexto";

const Home = ({ navigation }) => {
  const inset = useSafeAreaInsets();
  const { categorias, goToPage} = useContext(contextKey);

  return (
    <View
      style={[
        { paddingBottom: inset.bottom, paddingTop: inset.top },
        HomeStyle.view,
      ]}
    >
      <View style={HomeStyle.header}>
        <Text style={HomeStyle.textHeader}>
          Bienvenido a Preguntas y respuestas
        </Text>
        <View style={HomeStyle.headerView}>
          <View style={HomeStyle.headerViewSection}>
            <SvgConfeti />
          </View>
          <View style={HomeStyle.headerViewSection}>
            <Text style={HomeStyle.headerViewTittle}>Juega y Gana</Text>
            <Text style={HomeStyle.headerViewSubTittle}>
              Diviértete jugando y respondiendo las preguntas.
            </Text>
          </View>
        </View>
      </View>

      <View style={HomeStyle.Category}>
        <Text className="mb-5" style={HomeStyle.textCategory}>Categorias de preguntas</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={HomeStyle.containerCategory}>
            {categorias.map((e, i) => {
              return (
                <Category
                  item={e}
                  key={e.id}
                  onPress={() => goToPage(navigation, "question")}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default memo(Home);
