import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: '#191919',
        flex: 1
    },

    header:{
        backgroundColor: '#0d0d0d',
        height: 120,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    titulo:{
        fontSize: 50,
        fontWeight: 'bold', 
        textAlign: 'center',
        marginTop: 15,
    },

    input:{
        width: 300,
        height: 56,
        backgroundColor: '#1f1e25',
        color: '#fff',
        paddingLeft: 16,
        borderRadius: 10,
        fontSize: 18,
        marginLeft: 13
    },

    button:{
        width: 56,
        height: 56,
        backgroundColor: '#1e6f9f',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 10,
    },

    textButton:{
        color: '#fff',
        fontSize: 25
    },

    alinhamento:{
        flexDirection: 'row',
        marginTop: -25
    },

    subTitulo1:{
        color: '#499dcf',
        fontSize: 18,
        margin: 10,
        marginTop: 40,
        fontWeight: 'bold', 
    },

    subTitulo2:{
        color: '#7678e0',
        fontSize: 18,
        margin: 10,
        marginTop: 40,
        fontWeight: 'bold', 
    },

    alinhamento2:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    alinhamento3:{
        flexDirection: 'row',
    },

    contador:{
        width: 25,
        height: 25,
        borderRadius: 10,
        color: '#fff',
        backgroundColor: '#333333',
        marginTop: 43,
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },

    lista:{
        color: '#fff',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 20
    }
})