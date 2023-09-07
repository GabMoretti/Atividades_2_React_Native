import { Text, TouchableOpacity, View, Button } from "react-native";
import { useState } from "react";

import { styles } from './style'

type Props = {
    name : String,
    onRemove: () => void,
    criadas: number,
    verificaTarefas: () => void
}
export const [criadas, setCriadas] = useState(0)
export const [concluidas, setConcluidas] = useState(0)

export function verificaTarefas() {
    setCriadas(criadas + 1);
}

export function verificaConcluidas(){ 
    setConcluidas(concluidas + 1)
}

export function Tarefa(props : Props){

    return(
        <View  style={styles.conteiner}> 
            <TouchableOpacity style={styles.circulo}>   
            </TouchableOpacity>
            <Text style={styles.tarefa}>{props.name}</Text>

            <TouchableOpacity onPress={props.onRemove} style={styles.remove}>
            </TouchableOpacity>

        </View>
    )

    }