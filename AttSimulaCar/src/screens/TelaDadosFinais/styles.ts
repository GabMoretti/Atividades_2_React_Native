import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    conteiner: {
        flex: 1, 
    },

    tittle: {
        fontSize: 50,
        marginTop: 80,
        color: "#fff",
        textAlign: "center",
        fontWeight: 'bold',
    },

    espacamento: {
        marginLeft: 25,
    },

    text: {
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold',
        marginTop: 90,
        marginRight: 25
    },

    alinhamento: {
        flexDirection: "column",
        marginTop: 20,
        marginRight: 25,
    },

    button: {
        width: 340,
        height: 50,
        marginTop: 90,
    },

    textFooter: {
        fontSize: 20,
        color: "#5987cc",
        fontWeight: 'bold',
        marginTop: 29,
        textAlign: "center"
    },

    resultados: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#d9d9d9",
        marginTop: 10,
        height: 50,
        alignItems: "center",
    },

    textResults: {
        fontSize: 18,
        marginRight: 5,
        marginLeft: 5,
        fontWeight: 'bold',
    },

    total: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#d9d9d9",
        marginTop: 50,
        height: 50,
        alignItems: "center",
    }
    
})