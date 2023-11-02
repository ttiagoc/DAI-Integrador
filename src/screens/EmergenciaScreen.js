import React from 'react'
import { View, StyleSheet, Alert } from 'react-native';
import Storage from "../services/Storage";

export default function EmergenciaScreen({navigation}) {

  let storageService = new Storage()


  return (
    <View style={styles.container}>

      {console.log(storageService.obtenerCredenciales())}


      </View>
    
    
    
    
  )
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
    paddingTop: 25,
    fontSize: 20,
  },
});