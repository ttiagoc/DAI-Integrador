import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert, Button, Text } from "react-native";
import Menu from "../components/Menu";
import Storage from "../services/Storage";
import { Accelerometer } from 'expo-sensors';

export default function EmergenciaScreen({ navigation }) {
  const [numero, setNumero] = useState("");

  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  let storageService = new Storage();

  useEffect(() => {
    async function getNumber() {
      let data = await storageService.obtenerCredenciales();
      setNumero(JSON.stringify(data.numeroEmergencia));
    }
    getNumber();
  }, []);

  console.log("numero:", numero);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LLAMADO DE EMERGENCIA</Text>

      <Menu navigation={navigation}></Menu>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  container: {
    paddingTop: 50,
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#F3E5AB",
  },
  button: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "brown",
    height: 50,
    width: 200,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "black",
    fontWeight: "bold",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    width: 250,
    height: "auto",
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    backgroundColor: "#FFFEDC",
  },
  textLabel: {
    alignSelf: "center",
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
