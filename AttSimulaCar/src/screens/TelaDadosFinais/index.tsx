import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';

export function TelaDadosFinais() {

    const navigation = useNavigation()
    const route = useRoute()
    const [ valorIdade, setValorIdade] = useState(0)

    const objeto = route.params as RouteParams

    function handleNext(){
        navigation.navigate('telaLogin')
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
                    <Text style={styles.text}>Olá {objeto.nome}, fizemos um orçamento para seu veículo {objeto.carro}.</Text>

                    <View style={styles.alinhamento}>
                        <View style={styles.resultados}>
                            <Text style={styles.textResults}>Base</Text>
                            <Text style={styles.textResults}>R$ {objeto.valorBase}</Text>
                        </View>

                        <View style={styles.resultados}>
                            <Text style={styles.textResults}>Por idade</Text>
                            <Text style={styles.textResults}>R$ {objeto.valorIdade}</Text>
                        </View>

                        <View style={styles.resultados}>
                            <Text style={styles.textResults}>Por ano</Text>
                            <Text style={styles.textResults}>R$ {objeto.valorAno}</Text>
                        </View>

                        <View style={styles.total}>
                            <Text style={styles.textResults}>Total</Text>
                            <Text style={styles.textResults}>R$ {objeto.valorFinal}</Text>
                        </View>
                    </View>

                    <View style={styles.button}> 
                        <Button title="Finalizar" color={'#01633D'} onPress={handleNext}/> 
                    </View>
                </View>

                <TouchableOpacity>
                        <Text style={styles.textFooter} onPress={handleBack}>Voltar</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>

    )
}