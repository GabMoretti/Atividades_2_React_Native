import { Text, View, Button, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles'
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';


export function TelaLogin() {

    const [ nome, setNome] = useState('')

    const navigation = useNavigation()

    function handleNext(){
        navigation.navigate('telaDadosPessoais', { nome })
    }

    return(
        <View>
            <LinearGradient 
            colors={['#5374B6', '#B65353']}>
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
            </LinearGradient>
        </View>
    )
}