import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type RouteParams = {
    name: string,
    valor: number
}

export function Result(){

    const navigation = useNavigation()
    const route = useRoute()

    const objeto = route.params as RouteParams
    //igual
    const = route.params as RouteParams

    function handleBack() {
        navigation.goBack()
    }

    function handleFinish() {
        navigation.navigate('home')
    }

    return(
        <SafeAreaView>
            <Text>Cesul</Text>

            <Text>Ola, {objeto?.name} { name }</Text>

            <Text>numero do cupom é: </Text>

            <Text>{objeto.valor}</Text>

            <View>
                <Button title="voltar" color={'#860929'} onPress={handleBack}/>
                <Button title="finalizar" color={'#01633D'} onPress={handleFinish}/>
            </View>
        </SafeAreaView>
    )
}