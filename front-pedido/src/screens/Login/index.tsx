import { Alert, Button, Text, TextInput, View, } from "react-native";
import { Container, Input } from "./styles";
import { useState } from "react";
import api from "../../services/axios";
import LoadingScreen from "../LoadingScreen";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    function handleLogin() {

        setLoading(true)

        api.post('/vendedor/login', {
            email: username,
            senha: password
        }).then((response) => {
            const data = response.data
            console.log(data)
            setLoading(false)
            Alert.alert("Login realizado com sucesso")
        }).catch((error)=> {
            console.log(error)
            setLoading(false)
            Alert.alert("Problema ao realizar login")
        })
    }

    return(
        <Container>
            <Input value={username} onChangeText={setUsername}/>
            <Input secureTextEntry value={password} onChangeText={setPassword}/>

            <Button title="login" onPress={handleLogin}/>

            {
                loading && <LoadingScreen/>
            }
        </Container>
    )
}

export default Login