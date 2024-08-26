import { View, Text, ScrollView } from "react-native";
import React, { memo, useContext, useState,useEffect} from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeStyle } from "../styles/HomeStyle";
import SvgConfeti from "../svg/Confeti";
import Category from "../components/Category";
import { contextKey } from "../context/Contexto";
import { BannerAds } from "../components/BannerAnuncio";
import { AdEventType, InterstitialAd } from "react-native-google-mobile-ads";

const adUnitId = "ca-app-pub-2284145159855511/4778743131";

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ["fashion", "clothing","gaming", "technology"],
});

const Home = ({ navigation }) => {
  const inset = useSafeAreaInsets();
  const { categorias, goToPage} = useContext(contextKey);
  const [loaded, setLoaded] = useState(false);
  

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      }
    );
    const unsubscribeClosed = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setLoaded(false);
        interstitial.load();
      }
    );

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribe();
      unsubscribeClosed();
    };
  }, []);

  function handleCategory(){
    goToPage(navigation, "question");
    if(loaded){interstitial.show();}
  }

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
                  onPress={handleCategory}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={{position:'absolute',bottom:0,width:'100%',paddingTop:10}}>
        <BannerAds/>
      </View>
    </View>
  );
};

export default memo(Home);
