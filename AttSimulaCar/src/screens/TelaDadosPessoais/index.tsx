import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInputMask } from "react-native-masked-text";

export function TelaDadosPessoais() {

    const [ idade, setIdade ] = useState('')
    const [ cpf, setCpf] = useState('')

    const navigation = useNavigation()
    const route = useRoute()

    const objeto = route.params as RouteParams

    function handleNext(){
        navigation.navigate('telaDadosVeiculos', { idade: idade, nome: objeto.nome, cpf:cpf })
    }

    function handleBack(){
        navigation.goBack()
    }

    return(
        <View>
            <LinearGradient 
            colors={['#5374B6', '#B65353']}>
                <Text style={styles.tittle}>SIMULACAR</Text>

                <View  style={styles.espacamento}>
                    <Text style={styles.text}>Olá {objeto.nome}, vamos realizar uma simulação para um seguro</Text>

                    <Text style={{...styles.text, marginTop: 90}}>Qual sua idade?</Text>
                    <TextInput style={styles.input} value={idade.toString()} onChangeText={setIdade}  keyboardType="numeric"/>

                    <Text style={{...styles.text, marginTop: 10}}>Qual seu CPF?</Text>
                    <TextInputMask type="cpf" style={styles.input} keyboardType="numeric" onChangeText={setCpf}/>

                    <View style={styles.button}> 
                        <Button title="Próximo" color={'#01633D'} onPress={handleNext}/> 
                    </View>
                </View>

                <TouchableOpacity>
                        <Text style={styles.textFooter} onPress={handleBack}>Voltar</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>

    )
}