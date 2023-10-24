import AsyncStorage from "@react-native-async-storage/async-storage"; 

const NUMEROEMERGENCIA_KEY='KEY_NUMEROEMERGENCIA';
const URLVIDEO_KEY='KEY_URLVIDEO';
const URLAUDIO_KEY='KEY_URLAUDIO';


export default class Storage{ 

    automaticlogin = async() => { 
        //Obtiene las credenciales almacenadas e intenta loguearse.  
        try {

            let numero = null, url1 = null, url2 = null;

             numero = await AsyncStorage.getItem(NUMEROEMERGENCIA_KEY);
             url1 = await AsyncStorage.getItem(URLVIDEO_KEY);
             url2 = await  AsyncStorage.getItem(URLAUDIO_KEY);
            let isValid;
            
            if(numero != null && url1 != null && url2 != null){
                isValid = true;
            }else{
                isValid = false;
            } 

            return isValid; 

        } catch(e){
            return false;
        }
    };

    //Elimina las credenciales almacenadas al cerrar sesión 
    eliminarCredenciales = async() => { 
        try{
            await AsyncStorage.removeItem(NUMEROEMERGENCIA_KEY); 
            await AsyncStorage.removeItem(URLVIDEO_KEY); 
            await AsyncStorage.removeItem(URLAUDIO_KEY); 
        }catch(e){
            console.log(e);
        }
    }; 

    almacenarCredenciales = async(numero, url1, url2) => { 
        //Almacena las credenciales en el asyncStorage
        //(para leerlas al iniciar la próxima vez) 
        try {    
            await AsyncStorage.setItem(NUMEROEMERGENCIA_KEY, numero);  
            await AsyncStorage.setItem(URLVIDEO_KEY, url1); 
            await AsyncStorage.setItem(URLAUDIO_KEY, url2); 
        } catch(e) {    
            console.log(e);
        }
    }; 

    obtenerCredenciales = async() => { 
     
        let storedNumero = await AsyncStorage.getItem(NUMEROEMERGENCIA_KEY);
        let storedUrlVideo = await AsyncStorage.getItem(URLVIDEO_KEY);
        let storedUrlAudio = await AsyncStorage.getItem(URLAUDIO_KEY);
        const returnValue = {'numeroEmergencia':storedNumero, 'urlVideo':storedUrlVideo, 'urlAudio':storedUrlAudio}; 
   
        return returnValue; 
    }; 



}