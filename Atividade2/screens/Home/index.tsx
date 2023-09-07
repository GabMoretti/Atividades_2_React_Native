import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

import { styles } from './styles'
import { useState } from "react";

export default function Home (){
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [mensagem, setmensagem] = useState('')

    function headleVerificaImc(){

        if (peso !== '' && altura !== '') {
            const imcCalculado = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

            if (imcCalculado < 18.5){
                setmensagem('Baixo peso')
            }else if( imcCalculado < 24.9){
                setmensagem('Peso normal')
            }else if( imcCalculado < 29.9){
                setmensagem('Sobrepeso')
            }else if( imcCalculado < 34.9){
                setmensagem('Obesidade grau 1')
            }else if( imcCalculado < 39.9){
                setmensagem('Obesidade grau 2')
            }else {
                setmensagem('Obesidade grau 3 (obesidade mórbida)')
            }
            
        }else{
            Alert.alert("Campos vazios", "Preencha os campos de peso e altura.")
        }

        

    }
    return(
        <View style={styles.conteiner}>
            <Text style={styles.titulo}>Calculadora de IMC</Text>
            <Text style={styles.subtitulo}>Descubra qual o seu índice de Massa Corporal</Text>

            <View style={styles.alinhamento}>
                <View style={styles. espacamento}>
                    <Text style={styles.titulosInput}>Peso (Kg)</Text>
                    <TextInput style={styles.input} onChangeText={setPeso} keyboardType="numeric"/>
                </View>

                <View>
                    <Text style={styles.titulosInput}>Altura (m)</Text>
                    <TextInput style={styles.input} onChangeText={setAltura} keyboardType="numeric"/>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={headleVerificaImc}>
                <Text style={styles.textButton}>CALCULAR</Text>
            </TouchableOpacity>

            <View style={styles.box}>
                <Text>Seu índice de massa corporal é</Text>
                <Text style={styles.mensagem}>{mensagem}</Text>
            </View>

            <Text style={styles.footer}>CESUL</Text>
        </View>
    )
}