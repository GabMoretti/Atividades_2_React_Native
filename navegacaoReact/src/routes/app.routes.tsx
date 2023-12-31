import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "@screens/Home"
import { Register } from "@screens/Register"
import { Result } from "@screens/Result"

export function AppRoutes(){

    const {Navigator, Screen} = createNativeStackNavigator() //cria um navegação em pilha

    return(
        <Navigator screenOptions={{headerShown:false}}> 
            <Screen name="home" component={Home}/> 
            <Screen name="register" component={Register}/> 
            <Screen name="result" component={Result}/> 
        </Navigator>
    )
}