import { Button, Text, View } from "react-native";

export function Result(){

    return(
        <View>
            <Text>Cesul</Text>

            <Text>Ola, Gabriel Moretti</Text>

            <Text>numero do cupom é: </Text>

            <Text>56156156</Text>

            <View>
                <Button title="voltar" color={'#860929'}/>
                <Button title="finalizar" color={'#01633D'}/>
            </View>
        </View>
    )
}