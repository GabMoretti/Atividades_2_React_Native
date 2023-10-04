import { Button, Text, TextInput, View } from "react-native";

export function Register(){

    return(
        <View>
            <Text>CESUL</Text>

            <View>
                <Text>Informe seu nome</Text>
                <TextInput/>
            </View>

            <View>
                <Text>Informe seu sobrenome</Text>
                <TextInput/>
            </View>

            <View>
                <Button title="voltar" color={'#860929'}/>
                <Button title="proximo" color={'#01633D'}/>
            </View>
        </View>
    )
}