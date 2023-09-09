import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style'
import { useState } from 'react';

export default function Home(){
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [numeroInformado, setNumeroInformado] = useState('') 
    const [certas, setCertas] = useState(0)
    const [erradas, setErradas] = useState(0)
    const [pontuacao, setPontuacao] = useState(0)

    function Sorteio() {
        const numero1 = Math.floor(Math.random() * 10)
        setNumero1(numero1)

        const numero2 = Math.floor(Math.random() * 10)
        setNumero2(numero2)
      }
    
      function Verifica() {
        const respostaUsuario = parseInt(numeroInformado);
        let acertou = certas;
        let errou = erradas;
        if (respostaUsuario === numero1 + numero2) {
          Alert.alert('Resposta Correta!', `Deseja uma nova conta?`,
          [
            {
              text: 'Sim',
              onPress: () => {
                Sorteio()
              },
            },
            {
              text: 'Não'
            },
          ])
          acertou += 1;          
          
                  
        } else {
          Alert.alert('Resposta Incorreta!', `Deseja uma nova conta?`,
          [
            {
              text: 'Sim',
              onPress: () => {
                Sorteio()
              },
            },
            {
              text: 'Não'
            },
          ])
          errou += 1 
        }
        const novaPontuacao = (acertou * 10) - (errou * 5)
        setCertas(acertou)
        setErradas(errou)
        setPontuacao(novaPontuacao)

        setNumero1(0)
        setNumero2(0)
        setNumeroInformado('')

        
      }

      function novoJogo(){
        setNumero1(0)
        setNumero2(0)
        setNumeroInformado('')
        setCertas(0)
        setErradas(0)
        setPontuacao(0)
      }

    return(
        <View style={styles.conteiner}>
            <Text style={styles.title}>Você tem {pontuacao} pontos</Text>

            <View style={styles.alinhamento}>
                <View style={styles.alinhamento2}>
                    <Text style={styles.certas}>Certas</Text>
                    <Text style={styles.contador}>{certas}</Text>
                </View>

                <View style={styles.alinhamento2}>                     
                    <Text style={styles.erradas}>Erradas</Text>   
                    <Text style={styles.contador}>{erradas}</Text>                                    
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton} onPress={Sorteio}>Sotear desafio</Text>
            </TouchableOpacity>

            <View style={styles.linha}></View>

            <View style={styles.conteiner2}>

                <Text style={styles.subTitulo}>Quanto é :</Text>

                <View style={styles.alinhamentoContas}>
                    <Text style={styles.numeros}>{numero1}</Text>
                    <Text style={styles.numeros}>+</Text>
                    <Text style={styles.numeros}>{numero2}</Text>
                </View>

                <Text style={styles.subTitulo}>Sua resposta :</Text>

                <TextInput style={styles.input} onChangeText={(text) => setNumeroInformado(text)} value={numeroInformado}></TextInput>

                <TouchableOpacity style={styles.button2} onPress={Verifica}>
                    <Text style={styles.textButton2}>Validar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button3} onPress={novoJogo}>
                    <Text style={styles.textButton}>Novo Jogo</Text>
                </TouchableOpacity>
        </View>
    )
}