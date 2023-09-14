import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    box:{
        backgroundColor: "#383535",
        flex: 1
    },

    conteiner: {
        backgroundColor: "#be4646",
        height: 100
    },

    title: {
        textAlign: "center",
        fontWeight: 'bold',
        marginTop: 50,
        fontSize: 30,
        color: "#fff",
    },

    alinhamento:{
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    input: {
        height: 50,
        width: 150,
        backgroundColor: "#fff",
        borderRadius: 10,
        fontSize: 25,
        textAlign: "center"
    },

    alinhamentoQuadrados: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    subTitulo: {
        fontWeight: 'bold',
        color: "#fff",
        fontSize: 20,
    },

    button:{
        backgroundColor: "#2b9c5e",
        width: 150,
        height: 50,
        borderRadius: 20,
        marginTop: 26
    },

    textButton:{
        color: "#fff",
        fontSize: 30,
        textAlign: "center"
    },

    resultado:{
        color: "#fff",
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 25,
        marginTop: 10,
    },

    totalParticipantes:{
        color: "#33a387",
        width: 375,
        height: 56,
        backgroundColor: "#fff",
        marginLeft: 10,
        marginTop: 10,
        fontSize: 20,
        textAlign: "center",
        fontWeight: 'bold',
    },

    quadradosComida:{
        width: 100,
        height: 100,
        backgroundColor: "#b9e9dd",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },

    quadradosComidaTotal:{
        width: 100,
        height: 100,
        backgroundColor: "#20a082",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },

    textComidas:{
        color: "#2a9f82",
        fontSize: 20,
        fontWeight: 'bold',
    },

    textExtraComidas:{
        color: "#317565",
        fontSize: 20,
        fontWeight: 'bold',
    },

    textTotalComidas:{
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 20,
    },

    quadradosBebida:{
        width: 100,
        height: 100,
        backgroundColor: "#b9c4e9",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },

    textBebidas:{
        color: "#376fa6",
        fontWeight: 'bold',
        fontSize: 17
    },

    textExtraBebidas:{
        color: "#46387a",
        fontWeight: 'bold',
        fontSize: 20,
    },

    boxTotalLitros:{
        width: 300,
        height: 50,
        backgroundColor: "#2a679f",
        color: "#fff",
        textAlign: "center",
        fontSize: 30,
        borderRadius: 10,
        marginLeft: 40,
        marginTop: 20
    },

    limpar:{
        backgroundColor: "#d32904",
        height: 50,
        width: 200,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: "center",
        marginLeft: 90,
    },

    textLimpar:{
        color: "#fff",
        fontSize: 30,
        textAlign: "center"
    }
})