import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    conteiner:{
        backgroundColor: '#262626',
        alignItems: 'center',
        margin: 15,
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    tarefa:{
        color: '#fff',
        fontSize: 20,
        marginLeft: 20
    },

    circulo: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#fff', 
        marginLeft: 5
    },

    remove:{
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        marginRight: 5        
    }

})