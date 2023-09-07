import { styles } from './style'
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { useState } from "react";

export default function Home(){
    const [contadorNos, setContadorNos] = useState(0)
    const [contadorEles, setContadorEles] = useState(0)

    function headleAumentaContadorNos(){
        if (contadorNos == 11){
            setContadorEles(0)
            setContadorNos(0)
            Alert.alert("Time Nós ganhou", "Parabéns pela vitória")
        }else{
            const calculadoNos = contadorNos + 1
            setContadorNos(calculadoNos)
        }
    }

    function headleDiminuiContadorNos(){
        if (contadorNos != 0){
            const calculadoNos = contadorNos - 1
            setContadorNos(calculadoNos)
        }
        
    }

    function headleAumentaContadorEles(){
        if (contadorEles == 11){
            setContadorEles(0)
            setContadorNos(0)
            Alert.alert("Time Eles ganhou", "Parabéns pela vitória")
        }else{
            const calculadoEles = contadorEles + 1
            setContadorEles(calculadoEles)
        }
    }

    function headleDiminuiContadorEles(){
        if (contadorEles != 0){
            const calculadoEles = contadorEles - 1
            setContadorEles(calculadoEles)
        }
    }

    function zerar(){
        setContadorNos(0)
        setContadorEles(0)
    }

    return(
        <View style={styles.conteiner}>
            <Text style={styles.titulo}>MARCADOR DE TRUCO</Text>

            <View style={styles.alinhamento}>
                <View>
                    <Text style={styles.nos}>NÓS</Text>
                    <Text style={styles.contadorNos}>{contadorNos}</Text>
                </View>

                <View>
                    <Text style={styles.eles}>ELES</Text>
                    <Text style={styles.contadorEles}>{contadorEles}</Text>
                </View>
            </View>

            <View  style={styles.alinhamento2}>
                <View>
                    <TouchableOpacity style={styles.button1} onPress={headleAumentaContadorNos}>
                        <Text style={styles.textButton}>+1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={headleDiminuiContadorNos}>
                        <Text style={styles.textButton}>-1</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.button1} onPress={headleAumentaContadorEles}>
                        <Text style={styles.textButton}>+1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={headleDiminuiContadorEles}>
                        <Text style={styles.textButton}>-1</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.buttonZerar} onPress={zerar}>
                <Text style={styles.textButton}>ZERAR</Text>
            </TouchableOpacity>
        </View>
    )
}