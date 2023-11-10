import React, {useState, useRef} from "react";
import { Text, View, StyleSheet, Image, StatusBar, TextInput, Alert, KeyboardAvoidingView } from "react-native";
import configuracion from "../images/configuracion.png";
import Storage from "../services/Storage";
import BotonReutilizable from '../components/BotonReutilizable'
import Menu from "../components/Menu";

export default function Configuracion({navigation}) {

  const [numEmergencia, setNumEmergencia] = useState("")
  const [urlVideo, setUrlVideo] = useState("")
  const [urlAudio, setUrlAudio] = useState("")

  const videoRef = useRef();
  const audioRef = useRef();

  let storageService = new Storage()



  const HandleConfig = async() => {

    if (numEmergencia.toLowerCase() !== '' && urlVideo.toLowerCase() !== ''  && urlAudio.toLowerCase() !== ''){
     
      await storageService.almacenarCredenciales(numEmergencia, urlVideo, urlAudio);
      Alert.alert("atención", "datos cargados con éxito")
      }else{
        Alert.alert("ATENCION", "COMPLETA TODOS LOS CAMPOS" )
      }      
    }
  


  return (
    <>
      <View style={styles.container}>
        <StatusBar></StatusBar>
        <View style={{ flex: 1, flexDirection: "row", maxHeight: 100 }}>
          <Image source={configuracion} style={styles.logo}></Image>
          <Text style={styles.titulo}>Configuración</Text>
          <Image source={configuracion} style={styles.logo}></Image>
        </View>

        <View style={{  }}>
          <Text style={{ maxWidth: 250, paddingTop: 20 }}>
            Ingresar número telefónico de emergencia:{" "}
          </Text>
          <TextInput
            editable
            maxLength={20}
            style={styles.input}
            onChangeText={input => setNumEmergencia(input)}
            placeholder="ingresar..."
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing= {() => {videoRef.current.focus();}}
            value={numEmergencia}
          />

          <Text style={{ maxWidth: 250, paddingTop: 20 }}>
            Ingresar un url de video externa:{" "}
          </Text>
          <TextInput
            editable
            maxLength={20}
            style={styles.input}
            onChangeText={input => setUrlVideo(input)}
            placeholder="ingresar..."
            returnKeyType="next"
            blurOnSubmit={false}
            value={urlVideo}
            ref={videoRef}
            onSubmitEditing= {() => {audioRef.current.focus();}}
          />

        <Text style={{ maxWidth: 250, paddingTop: 20 }}>
            Ingresar un url de musica externa:{" "}
          </Text>
          <TextInput
            editable
            maxLength={20}
            style={styles.input}
            onChangeText={input => setUrlAudio(input)}
            placeholder="ingresar..."
            blurOnSubmit={false}
            ref={audioRef}
            value={urlAudio}
          />

           <BotonReutilizable onPress={HandleConfig} texto='INGRESAR DATOS' style={styles.button} />
          
        </View>
        <Menu navigation={navigation}></Menu>
      </View>
    </>
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
    paddingTop: 25,
    fontSize: 20,
  },
});
