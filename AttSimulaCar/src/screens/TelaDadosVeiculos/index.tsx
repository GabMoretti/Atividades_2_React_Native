import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

export function TelaDadosVeiculos() {

    const [ carro, setCarro ] = useState('')
    const [ ano, setAno ] = useState('')

    const navigation = useNavigation()
    const route = useRoute()

    const objeto = route.params as RouteParams

    function handleNext(){
        let valorSeguro = 1000
        let valorIdade = 0
        let valorAno = 0
        let valorFinal= 0

        if (objeto.idade < 22){
            valorIdade = valorSeguro * 0.20
        } else if (objeto.idade >= 22 && objeto.idade <= 28) {
            valorIdade = valorSeguro * 0.18
        }else {
            valorIdade = valorSeguro * 0.15
            valorIdade = valorIdade * -1
        }
        valorSeguro = valorSeguro + valorIdade

        if (parseInt(ano) < 2000)  {
            valorAno = valorSeguro * 0.30
        }else if (parseInt(ano) >= 2000 && parseInt(ano) <= 2009){
            valorAno = valorSeguro * 0.15
        }else if (parseInt(ano) >= 2016){
            valorAno = valorSeguro * 0.10
            valorAno = valorAno * -1
        }

        valorFinal = valorSeguro + valorAno

        navigation.navigate('telaDadosFinais', {nome: objeto.nome, carro, valorIdade, valorAno, valorFinal})
    
    }

    function handleBack(){
        navigation.goBack()
    }

    return(
        <View  style={styles.conteiner}>
            <Text style={styles.tittle}>SIMULACAR</Text>

            <View  style={styles.espacamento}>
                <Text style={styles.text}>Olá {objeto.nome}, Agora vamos solicitar os dados do seu veiculo</Text>

                <Text style={styles.text}>Qual seu carro?</Text>
                <TextInput style={styles.input} value={carro} onChangeText={setCarro}/>

                <Text style={styles.text2}>Qual o ano do seu carro?</Text>
                <TextInput style={styles.input} value={ano.toString()} onChangeText={setAno}/>

                <View style={styles.button}> 
                    <Button title="Próximo" color={'#01633D'} onPress={handleNext} /> 
                </View>
            </View>

            <TouchableOpacity>
                    <Text style={styles.textFooter} onPress={handleBack}>Voltar</Text>
            </TouchableOpacity>
        </View>

    )
}