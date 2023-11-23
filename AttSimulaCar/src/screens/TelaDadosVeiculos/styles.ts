import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    conteiner: {
        flex: 1, 
     justifyContent: `center`
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
        marginTop: 55
    },

    text2: {
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold',
        marginTop: 20
    },

    input: {
        width: 340,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
        fontSize: 20,
        borderWidth: 2,
        borderColor: "#000",
    },

    button: {
        width: 340,
        height: 50,
        marginTop: 10,
    },

    textFooter: {
        fontSize: 20,
        color: "#5987cc",
        fontWeight: 'bold',
        marginTop: 22,
        textAlign: "center"
    }
    
})