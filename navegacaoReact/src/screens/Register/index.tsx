import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Register() {

    const [ name, setName ] = useState('')
    const [ sobrenome, setSobrenome ]= useState('')

    const navigation = useNavigation()

    function handleNext(){
        navigation.navigate('result', { name, valor : 20 })
    }

    function handleBack(){

        navigation.goBack()
    }

    return(
        <SafeAreaView>
            <Text>CESUL</Text>

            <View>
                <Text>Informe seu nome</Text>
                <TextInput value="name" onChangeText={setName}/>
            </View>

            <View>
                <Text>Informe seu sobrenome</Text>
                <TextInput value="sobrenome" onChangeText={setSobrenome}/>
            </View>

            <View>
                <Button title="voltar" color={'#860929'} onPress={handleBack}/>
                <Button title="proximo" color={'#01633D'} onPress={handleNext}/>
            </View>
        </SafeAreaView>
    )
}