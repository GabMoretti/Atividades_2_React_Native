import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';

export default function Home(){
    const [qtdMulheres, setQtdMulheres] = useState('')
    const [qtdHomens, setQtdHomens] = useState('')
    const [qtdCriancas, setQtdCriancas] = useState('')
    const [participantesTotal, setParticipantesTotal] = useState(0)
    const [qtdCarne, setQtdCarne] = useState(0)
    const [qtdAperitivos, setQtdAperitivos] = useState(0)
    const [totalComida, setTotalComida] = useState(0)
    const [qtdCerveja, setQtdCerveja] = useState(0)
    const [qtdAgua, setQtdAgua] = useState(0)
    const [qtdRefri, setQtdRefri] = useState(0)
    const [extraCarne, setExtraCarne] = useState(0)
    const [extraAperitivos, setExtraAperitivos] = useState(0)
    const [extraCerveja, setExtraCerveja] = useState(0)
    const [extraAgua, setExtraAgua] = useState(0)
    const [extraRefri, setExtraRefri] = useState(0)
    const [totalLitros, setTotalLitros] = useState(0)

    function Calculos(){
        let homens = +qtdHomens
        let mulheres = +qtdMulheres
        let criancas = +qtdCriancas
        setParticipantesTotal(homens + mulheres + criancas)

        let carne = (homens*400)  + (mulheres*300) + (criancas *200)
        let margemCarne = carne * 0.10
        let totalCarne = carne + margemCarne
        setExtraCarne(margemCarne)
        setQtdCarne(carne)

        let aperitivos = (homens*150)  + (mulheres*100) + (criancas *50)
        let margemAperitivo = aperitivos * 0.10
        let totalAPeritivo = aperitivos + margemAperitivo
        setExtraAperitivos(margemAperitivo)
        setQtdAperitivos(aperitivos)

        setTotalComida(totalCarne + totalAPeritivo)

        let cerveja = (homens*4) + (mulheres*2)
        let margemCerveja = cerveja * 0.10
        let totalCerveja = cerveja + margemCerveja
        setExtraCerveja(margemCerveja)
        setQtdCerveja(cerveja)

        let agua = (mulheres*2) + (criancas*2)
        let margemAgua = agua * 0.10
        let totalAgua = agua + margemAgua
        setExtraAgua(margemAgua)
        setQtdAgua(agua)

        let refrigerante = (mulheres*1.5) + (criancas*1.5)
        let margemRefrigerante = refrigerante * 0.10
        let totalRefri = refrigerante + margemRefrigerante
        setExtraRefri(margemRefrigerante)
        setQtdRefri(refrigerante)

        setTotalLitros(totalCerveja + totalAgua + totalRefri)
        
    }

    function Limpar(){
        setQtdHomens('')
        setQtdMulheres('')
        setQtdCriancas('')
        setParticipantesTotal(0)
        setExtraCarne(0)
        setQtdCarne(0)
        setExtraAperitivos(0)
        setQtdAperitivos(0)
        setTotalComida(0)
        setExtraCerveja(0)
        setQtdCerveja(0)
        setExtraAgua(0)
        setQtdAgua(0)
        setExtraRefri(0)
        setQtdRefri(0)
    }




    return(
        <View style={styles.box}>
            <View style={styles.conteiner}>
                <Text style={styles.title}>ChurraSul</Text>
            </View>

            <View style={styles.alinhamento}>
                <View>
                    <Text style={styles.subTitulo}>Homens</Text>
                    <TextInput style={styles.input} onChangeText={setQtdHomens} value={qtdHomens}></TextInput>
                </View>

                <View>
                    <Text style={styles.subTitulo}>Mulheres</Text>
                    <TextInput style={styles.input} onChangeText={setQtdMulheres} value={qtdMulheres}></TextInput>
                </View>
            </View>

            <View style={styles.alinhamento}>
                <View>
                    <Text style={styles.subTitulo}>Crianças</Text>
                    <TextInput style={styles.input} onChangeText={setQtdCriancas} value={qtdCriancas}></TextInput>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text onPress={Calculos} style={styles.textButton}>Calcular</Text>
                </TouchableOpacity>       
            </View>

            <Text style={styles.resultado}>Resultado</Text>

            <Text style={styles.totalParticipantes}>Realizamos o teste para {participantesTotal} participantes</Text>

            <Text style={styles.subTitulo}>Comida</Text>

            <View style={styles.alinhamentoQuadrados}>
                <View style={styles.quadradosComida}>
                    <Text style={styles.textComidas}>{qtdCarne}g </Text>
                    <Text style={styles.textComidas}>Carne</Text>
                    <Text style={styles.textExtraComidas}>{extraCarne}g</Text>
                </View>

                <View style={styles.quadradosComida}>
                    <Text style={styles.textComidas}>{qtdAperitivos}g</Text>
                    <Text style={styles.textComidas}>Aperitivos</Text>
                    <Text style={styles.textExtraComidas}>{extraAperitivos}g</Text>
                </View>

                <View style={styles.quadradosComidaTotal}>
                    <Text style={styles.textTotalComidas}>{totalComida}g</Text>
                    <Text style={styles.textTotalComidas}>TOTAL</Text>
                </View>
            </View>

            <Text style={styles.subTitulo}>Bebida</Text>

            <View style={styles.alinhamentoQuadrados}>
                <View style={styles.quadradosBebida}>
                    <Text style={styles.textBebidas}>{qtdCerveja}L</Text>
                    <Text style={styles.textBebidas}>Cerveja</Text>
                    <Text style={styles.textExtraBebidas}>{extraCerveja.toFixed(2)}ml</Text>
                </View>

                <View style={styles.quadradosBebida}>
                    <Text style={styles.textBebidas}>{qtdAgua}L</Text>
                    <Text style={styles.textBebidas}>Água</Text>
                    <Text style={styles.textExtraBebidas}>{extraAgua.toFixed(2)}ml</Text>
                </View>

                <View style={styles.quadradosBebida}>
                    <Text style={styles.textBebidas}>{qtdRefri}L</Text>
                    <Text style={styles.textBebidas}>Refrigerante</Text>
                    <Text style={styles.textExtraBebidas}>{extraRefri.toFixed(2)}ml</Text>
                </View>
            </View>

            <Text style={styles.boxTotalLitros}>Total litros {totalLitros}L</Text>

            <TouchableOpacity onPress={Limpar} style={styles.limpar}>
                <Text style={styles.textLimpar}>Limpar</Text>
            </TouchableOpacity>
        </View>
    )
}