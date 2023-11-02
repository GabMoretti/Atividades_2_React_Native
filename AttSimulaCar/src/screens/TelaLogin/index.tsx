import { Text, View, Button, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles'
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


export function TelaLogin() {

    const [ nome, setNome] = useState('')

    const navigation = useNavigation()

    function handleNext(){
        navigation.navigate('telaDadosPessoais', { nome })
    }

    return(
        <View style={styles.conteiner}>
            <Text style={styles.tittle}>SIMULACAR</Text>

            <View style={styles.espacamento}>
                <View>
                    <Text style={styles.subTittle}>Usuário</Text>
                    <TextInput style={styles.input} value={nome} onChangeText={setNome}/>
                </View>

                <View>
                    <Text style={styles.subTittle}>Senha</Text>
                    <TextInput style={styles.input}/>
                </View>

                <View style={styles.button}> 
                    <Button title="LOGAR" color={'#01633D'} onPress={handleNext}/> 
                </View>
            </View>
            
            <TouchableOpacity>
                    <Text style={styles.text}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </View>
    )
}