import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    conteiner:{
      flex:1, 
      padding:24, 
      backgroundColor:'#967ADC',
      alignItems:"center"
    },

    titulo:{
        color:'#fff',
        fontSize: 25,
        marginTop: 20
    },

    subtitulo:{
        color:'#fff',
    },

    input:{
        marginTop: 5,
        width: 100,
        height: 56,
        backgroundColor: '#fff',
        paddingLeft: 16,
        borderRadius: 5,
        color:'#967ADC'
    },

    titulosInput:{
        color:'#fff',
        marginTop: 75
    },

    alinhamento:{
        flexDirection:"row",
    },

    espacamento:{
        marginRight: 50
    },
    
    button:{
        width: 250,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 75
    },

    textButton:{
        color:'#967ADC',
        fontSize: 20
    },

    box:{
        marginTop: 20,
        height: 350,
        width: 400,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    footer:{
        color: '#fff',
        fontSize: 40,
        marginTop: 20
    },

    mensagem:{
        color: '#967ADC',
        fontSize: 20,
        marginTop: 20
    }
    })