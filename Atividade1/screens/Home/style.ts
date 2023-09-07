import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    conteiner:{
      flex:1, 
      padding:24, 
      backgroundColor:'#131016'
    },
  
    titulo:{
      color: '#fff', 
      fontSize: 24, 
      fontWeight: 'bold', 
      marginTop: 48
    },
  
    data:{ 
      color: '#fff', 
      fontSize: 15
    },

    input:{
        height: 56,
        backgroundColor: '#1f1e25',
        color: '#fff',
        paddingLeft: 16,
        borderRadius: 5,
        fontSize: 18,

    },

    button:{
        marginTop: 10,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textButton:{
        fontSize: 25,
        color: '#fff'
    },

    listEmpty:{
      color: '#fff',
      fontSize: 14,
      textAlign: 'center'
    }
  })