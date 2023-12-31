import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Configuracion from "./src/screens/Configuracion";
import EmergenciaScreen from "./src/screens/EmergenciaScreen";
import CambioDeImagenDeFondo from "./src/screens/CambioDeImagenDeFondo";
import AcercaDe from "./src/screens/AcercaDe"
import MultimediaScreen from "./src/screens/MultimediaScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Configuracion"
        screenOptions={{ orientation: "portrait", headerShown: false }}
      >
        <Stack.Screen name="Configuracion" component={Configuracion} />
        <Stack.Screen name="EmergenciaScreen" component={EmergenciaScreen} />
        <Stack.Screen name="CambioDeImagenDeFondo" component={CambioDeImagenDeFondo} />
        <Stack.Screen name="AcercaDe" component={AcercaDe} />
        <Stack.Screen name="MultimediaScreen" component={MultimediaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
