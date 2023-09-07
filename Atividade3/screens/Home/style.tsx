import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor: '#383535',
    },

    titulo:{
        fontSize: 32,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold', 
        marginTop: 80
    },

    alinhamento:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 90,
    },

    nos:{
        color: '#4AA5F9',
        fontSize: 60,
        fontWeight: 'bold'
    },

    contadorNos:{
        color: '#4AA5F9',
        fontSize: 160
    },

    eles:{
        color: '#C08DF3',
        fontSize: 60,
        fontWeight: 'bold'
    },

    contadorEles:{
        color: '#C08DF3',
        fontSize: 160
    },

    alinhamento2:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },

    button1:{
        backgroundColor: '#09a931',
        height: 50,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    button2:{
        marginTop: 10,
        backgroundColor: '#b90606',
        height: 50,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    textButton:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    },

    buttonZerar:{
        marginTop: 50,
        marginLeft: 45,
        backgroundColor: '#DE9609',
        height: 60,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
})