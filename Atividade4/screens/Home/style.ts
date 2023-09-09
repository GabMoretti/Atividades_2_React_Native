import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    conteiner:{
        backgroundColor:"#383535",
        flex: 1,

    },

    alinhamento:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        margin: 10
    },

    alinhamento2:{
        flexDirection: "row",
    },

    title:{
        textAlign: "center",
        marginTop: 40,
        fontSize: 30,
        fontWeight: 'bold', 
        color: "#fff"
    },

    certas:{
        color: "#4a97c4",
        fontSize: 17
    },

    erradas:{
        color: "#b84862",
        fontSize: 17
    },

    contador:{
        width: 25,
        height: 25,
        borderRadius: 10,
        color: '#fff',
        backgroundColor: '#000',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10
    },

    button:{
        backgroundColor: "#5d5fef",
        width: 230,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 80,
        marginTop: 25,
        borderRadius: 10,
    },

    textButton:{
        color: "#fff",
        fontSize: 20
    },

    linha:{
        width: 350,
        height: 2,
        backgroundColor: "#8c8b8c",
        marginTop: 20,
        marginLeft: 20
    },

    conteiner2:{
        marginLeft: 60
    },

    subTitulo:{
        color: "#fff",
        fontSize: 25,
        ontWeight: 'bold', 
        marginTop: 50,
    },

    numeros:{
        backgroundColor: "#4aa4f9",
        color: "#fff",
        width: 56,
        height: 56,
        fontSize: 30,
        textAlign: "center",
        borderRadius: 10,
        lineHeight: 50
    },

    alinhamentoContas:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginLeft: -60
    },

    input:{
        backgroundColor: "#fff",
        width: 100,
        height: 56,
        borderRadius: 10,
        color: "#9055cb",
        fontSize: 30,
        textAlign: "center",
        marginTop: 20,
        marginLeft: 90
    },

    button2:{
        backgroundColor: "#04d361",
        width: 272,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        borderRadius: 10,
    },

    textButton2:{
        color: "#fff",
        fontSize: 30
    },

    button3:{
        backgroundColor: "#d34c6c",
        width: 230,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 70,
        borderRadius: 10,
        marginLeft: 80,
    },

})