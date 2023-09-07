import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './style'
import { Product } from '../../components/Product';
import { useState } from 'react';

export default function Home (){

    const [products, setProducts] = useState<String[]>([]);
    const [productName, setProductName] = useState('')

    function headleProductAdd(){

        if (productName.trim().length > 0){    //.trim tira os espaço do começo e fim

            if (products.includes(productName)){
                setProductName('')
                return Alert.alert("Problema", "Produto já existe")

            }

            setProducts([...products, productName.trimStart()])
            setProductName('')
        }else{
            Alert.alert("Problema ao adicionar produto", "Nome esta vazio")
        }

        

    }

    function handleProductRemove(name: String){
        Alert.alert('Remover', `Deseja remover o produto ${name}`, 
            [
                {
                    text: 'Sim', 
                    //prevState é o estado atual da lista, ou seja, pega os dados da lista
                    //filter serve para retornar somente os nome diferentes ao que deseja remover
                    onPress: () => setProducts(prevState => prevState.filter(partic => partic != name))
                    //igual a onPress: () => setParticipants(participants.filter(partic => partic != name))
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
        <Text style={styles.titulo}>Lista de Compras</Text>
        <Text style={styles.data}>Quarta, 09 de agosto</Text>


            <TextInput 
            style={styles.input} 
            placeholder='Informe um produto' 
            placeholderTextColor={'#fff'}
            onChangeText={text => setProductName(text)}
            value={productName}    //apaga oque for escrito no input
            />

            <TouchableOpacity style={styles.button} onPress={headleProductAdd}>
                <Text style={styles.textButton}>ADICIONAR</Text>
            </TouchableOpacity>


        <Text style={styles.titulo}>Produtos</Text>

        <FlatList data={products} 
        keyExtractor={item => item} 
        renderItem={ ({item}) => (
            <Product key={item} 
            name={item} 
            onRemove={() => handleProductRemove(item)}/>
        )} 

        showsVerticalScrollIndicator={false}

        ListEmptyComponent={() =>
            <Text style={styles.listEmpty}>Não existe produtos na sua lista de compras</Text>
        }
        />

    </View>  
    )
}