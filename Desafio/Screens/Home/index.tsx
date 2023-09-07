import { View, FlatList, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from './style'
import { useState } from "react";

import { Tarefa, verificaTarefas, criadas, concluidas, verificaConcluidas } from '../../components/Tarefa';

export default function Home(){

    const [tarefas, setTarefas] = useState<String[]>([]);
    const [nomeTarefa, setNomeTarefa] = useState('');
    const [criadas, setCriadas] = useState(0);
    const [concluidas, setConcluidas] = useState(0);


    function headleTarefaAdd(){

        if (nomeTarefa.trim().length > 0){   

            if (tarefas.includes(nomeTarefa)){
                setNomeTarefa('')
                return Alert.alert("Problema", "Tarefa já existe")

            }

            setTarefas([...tarefas, nomeTarefa.trimStart()])
            verificaTarefas()
            setNomeTarefa('')
        }else{
            Alert.alert("Problema ao adicionar tarefa", "Nome esta vazio")
        }
    }

    function handleTarefaRemove(name: String){
        Alert.alert('Remover', `Deseja remover esta tarefa ${name}`, 
            [
                {
                    text: 'Sim', 
                    
                    onPress: () => setTarefas(prevState => prevState.filter(partic => partic != name))
                    }, 

                {
                    text: 'Não',
                    style: 'cancel'
                }
            ]
        )
    }


    return(
        <View style={styles.conteiner}>
            <View style={styles.header}>
                <Text style={{...styles.titulo, color: '#4ea8de' }}>to</Text>
                <Text style={{...styles.titulo, color: '#5e60ce' }}>do</Text>
            </View>

            <View style={styles.alinhamento}>
                <TextInput 
                style={styles.input}
                placeholder='adicione uma nova tarefa' 
                placeholderTextColor={'#fff'}
                onChangeText={text => setNomeTarefa(text)}
                />  

                <TouchableOpacity style={styles.button} onPress={headleTarefaAdd}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.alinhamento2}>
                <View style={styles.alinhamento3}>
                    <Text style={styles.subTitulo1}>Criadas</Text>
                    <Text style={styles.contador}>{criadas}</Text>
                </View>
                <View style={styles.alinhamento3}>
                    <Text style={styles.contador}>{concluidas}</Text>
                    <Text style={styles.subTitulo2} onPress={verificaConcluidas}>Conluídas</Text>                    
                </View>
            </View>

            <FlatList data={tarefas} 
            keyExtractor={item => item} 
            renderItem={ ({item}) => (
            <Tarefa key={item} 
            name={item} 
            onRemove={() => handleTarefaRemove(item)}
            criadas={criadas}
            verificaTarefas={verificaTarefas}/>
        )} 

        showsVerticalScrollIndicator={false}

        ListEmptyComponent={() =>
            <Text style={styles.lista}>Você ainda não tem tarefas cadastradas</Text>
        }
        />
        </View>
    )

}