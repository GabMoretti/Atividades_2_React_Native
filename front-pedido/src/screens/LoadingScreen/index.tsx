import { ActivityIndicator, Text, View } from "react-native";
import { ContainerLoading } from "./style";

function LoadingScreen(){

    return(
        <ContainerLoading>
            <ActivityIndicator size="large" color="blue"/>
            <Text>Carregando...</Text>
        </ContainerLoading>
    )
}

export default LoadingScreen;