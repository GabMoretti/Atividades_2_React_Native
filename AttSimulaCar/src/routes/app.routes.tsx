import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TelaLogin } from "../screens/TelaLogin"
import { TelaDadosPessoais } from "../screens/TelaDadosPessoais"
import { TelaDadosVeiculos } from "../screens/TelaDadosVeiculos"
import { TelaDadosFinais } from "../screens/TelaDadosFinais"

export function AppRoutes(){

    const {Navigator, Screen} = createNativeStackNavigator()

    return(
        <Navigator screenOptions={{headerShown:false}}> 
            <Screen name="telaLogin" component={TelaLogin}/> 
            <Screen name="telaDadosPessoais" component={TelaDadosPessoais}/> 
            <Screen name="telaDadosVeiculos" component={TelaDadosVeiculos}/> 
            <Screen name="telaDadosFinais" component={TelaDadosFinais}/> 
        </Navigator>
    )
}