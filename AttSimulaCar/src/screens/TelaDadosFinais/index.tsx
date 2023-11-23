import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export function TelaDadosFinais() {

    const navigation = useNavigation()
    const route = useRoute()

    const objeto = route.params as RouteParams;
    const [valorBase, setValorBase] = useState(objeto.valorBase);
    const [valorIdade, setValorIdade] = useState(objeto.valorIdade);
    const [valorAno, setValorAno] = useState(objeto.valorAno);
    const [valorFinal, setValorFinal] = useState(objeto.valorFinal);
    const [conversaoAtiva, setConversaoAtiva] = useState(false); 
    console.log('Route Params:', objeto);
    const cpf = objeto.cpf;
    const placa = objeto.placa;

    useEffect(() => {
        setValorBase(objeto.valorBase);
        setValorIdade(objeto.valorIdade);
        setValorAno(objeto.valorAno);
        setValorFinal(objeto.valorFinal);
    }, [objeto]);

    function handleNext(){
        navigation.navigate('telaLogin');
      }

    function handleBack(){
        navigation.goBack()
    }

    function conversao() {
        setValorBase((prevValue) => conversaoAtiva ? Math.floor(prevValue * 4.91) : Math.round(prevValue / 4.91));
        setValorIdade((prevValue) => conversaoAtiva ? Math.floor(prevValue * 4.91) : Math.round(prevValue / 4.91));
        setValorAno((prevValue) => conversaoAtiva ? Math.floor(prevValue * 4.91) : Math.round(prevValue / 4.91));
        setValorFinal((prevValue) => conversaoAtiva ? Math.floor(prevValue * 4.91) : Math.round(prevValue / 4.91));
        setConversaoAtiva((prevValue) => !prevValue);
    }

    return(
        <View>
            <LinearGradient 
            colors={['#5374B6', '#B65353']}>
            
                <Text style={styles.tittle}>SIMULACAR</Text>

                <View  style={styles.espacamento}>
                    <Text style={styles.text}>Olá {objeto.nome}, fizemos um orçamento para seu veículo {objeto.carro}.</Text>
                    <Text style={{...styles.text, marginTop: 10}}>CPF                       {cpf}</Text>

                    <Text style={{...styles.text, marginTop: 1}}>PLACA DO VEICULO       {placa}</Text>

                    <View style={styles.alinhamento}>
                        <View style={styles.resultados}>
                            <Text style={styles.textResults}>Base</Text>
                            <Text style={styles.textResults}>R$ {valorBase},00</Text>
                        </View>

                        <View style={styles.resultados}>
                            <Text style={styles.textResults}>Por idade</Text>
                            <Text style={styles.textResults}>R$ {valorIdade},00</Text>
                        </View>

                        <View style={styles.resultados}>
                            <Text style={styles.textResults}>Por ano</Text>
                            <Text style={styles.textResults}>R$ {valorAno},00</Text>
                        </View>

                        <View style={styles.total}>
                            <Text style={styles.textResults}>Total</Text>
                            <Text style={styles.textResults}>R$ {valorFinal},00</Text>
                        </View>
                    </View>

                    <BouncyCheckbox
                        onPress={conversao}
                        text={conversaoAtiva ? "Voltar para Real" : "Conversão para dólar"}
                        fillColor="#000"
                        textStyle={{ color: '#fff' }}
                        style={{marginTop: 35}}
                        
                    />

                    <View style={styles.button}> 
                        <Button title="Finalizar" color={'#01633D'} onPress={handleNext}/> 
                    </View>
                </View>

                <TouchableOpacity onPress={handleBack}>
                        <Text style={styles.textFooter}>Voltar</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>

    )
}