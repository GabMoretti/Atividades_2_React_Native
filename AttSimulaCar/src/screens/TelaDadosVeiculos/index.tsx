import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';

export function TelaDadosVeiculos() {

    const [ carro, setCarro ] = useState('')
    const [ ano, setAno ] = useState('')
    const [ valorCarro, setValorCarro] = useState(0)

    const navigation = useNavigation()
    const route = useRoute()

    const objeto = route.params as RouteParams

    function handleNext(){
        let valorBase = 0
        let valorSeguro = 0
        let valorIdade = 0
        let valorAno = 0
        let valorFinal= 0

        if (valorCarro >= 100000){
            valorBase = 2000
        } else if (valorCarro >= 50000 && valorCarro < 100000){
            valorBase = 1500
        }else{
            valorBase = 1000
        }

        if (objeto.idade < 22){
            valorIdade = valorBase * 0.20
        } else if (objeto.idade >= 22 && objeto.idade <= 28) {
            valorIdade = valorBase * 0.18
        }else {
            valorIdade = valorBase * 0.15
            valorIdade = valorIdade * -1
        }
        valorSeguro = valorBase + valorIdade

        if (parseInt(ano) < 2000)  {
            valorAno = valorSeguro * 0.30
        }else if (parseInt(ano) >= 2000 && parseInt(ano) <= 2009){
            valorAno = valorSeguro * 0.15
        }else if (parseInt(ano) >= 2016){
            valorAno = valorSeguro * 0.10
            valorAno = valorAno * -1
        }

        valorFinal = valorSeguro + valorAno

        navigation.navigate('telaDadosFinais', {nome: objeto.nome, carro, valorIdade, valorAno, valorFinal, valorBase})
    
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
                    <Text style={styles.text}>Olá {objeto.nome}, Agora vamos solicitar os dados do seu veiculo</Text>

                    <Text style={styles.text}>Qual seu carro?</Text>
                    <TextInput style={styles.input} value={carro} onChangeText={setCarro}/>

                    <Text style={styles.text2}>Qual o ano do seu carro?</Text>
                    <TextInput style={styles.input} value={ano.toString()} onChangeText={setAno}/>

                    <Text style={styles.text2}>Qual valor do seu carro</Text>
                    <TextInput style={styles.input} value={valorCarro.toString()} onChangeText={setValorCarro}/>

                    <View style={styles.button}> 
                        <Button title="Próximo" color={'#01633D'} onPress={handleNext} /> 
                    </View>
                </View>

                <TouchableOpacity>
                        <Text style={styles.textFooter} onPress={handleBack}>Voltar</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>

    )
}