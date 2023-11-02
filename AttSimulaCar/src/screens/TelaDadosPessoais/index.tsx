import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

export function TelaDadosPessoais() {

    const [ idade, setIdade ] = useState(0)

    const navigation = useNavigation()
    const route = useRoute()

    const objeto = route.params as RouteParams

    function handleNext(){
        navigation.navigate('telaDadosVeiculos', { idade: idade, nome: objeto.nome })
    }

    function handleBack(){
        navigation.goBack()
    }

    return(
        <View  style={styles.conteiner}>
            <Text style={styles.tittle}>SIMULACAR</Text>

            <View  style={styles.espacamento}>
                <Text style={styles.text}>Olá {objeto.nome}, vamos realizar uma simulação para um seguro</Text>

                <Text style={styles.text}>Qual sua idade?</Text>
                <TextInput style={styles.input} value={idade.toString()} onChangeText={setIdade}/>

                <View style={styles.button}> 
                    <Button title="Próximo" color={'#01633D'} onPress={handleNext}/> 
                </View>
            </View>

            <TouchableOpacity>
                    <Text style={styles.textFooter} onPress={handleBack}>Voltar</Text>
            </TouchableOpacity>
        </View>

    )
}