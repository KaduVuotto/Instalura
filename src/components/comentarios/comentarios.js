import React, { Fragment, useState, useEffect } from 'react';
import {
    ScrollView,
    FlatList,
    Text,
    TextInput,
    Image,
    View,
    TouchableOpacity
} from "react-native";
import estilo from './estilo';


const Comentarios = ({ comentarios, adicionarComentario }) => {
    const [estadoComentarios, setComentarios] = useState(comentarios)
    
    const comentar = () => {
        campoInput.clear();
        const novoComentario = adicionarComentario(
            conteudoCampoInput,
            'Bugan')
            setComentarios([...estadoComentarios, novoComentario])
    }

    let campoInput;
    let conteudoCampoInput = '';
    return (
        <Fragment>
            <FlatList
                data={estadoComentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View style={[estilo.naMesmaLinha, {
                        borderRadius: 22,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.36,
                        shadowRadius: 6.68,
                        elevation: 11,
                        backgroundColor: 'white',
                        height: 40,
                        marginTop: 5
                    }]}>
                        <Text style={{ marginLeft: 16 }}>{item.userName} :</Text>
                        <Text style={{ marginLeft: 16 }}>{item.text}</Text>
                    </View>
                }
            />

            <View style={[estilo.naMesmaLinha, {
                height: 40,
                borderRadius: 22,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,
                elevation: 11,
                backgroundColor: 'white',
                marginTop: 10,
                paddingLeft: 16,
                marginBottom: 26
            }]}>
                <TextInput
                    style={{ flex: 1 }}
                    ref={textInput => campoInput = textInput}
                    placeholder={'Deixe seu comentario...'}
                    onChangeText={texto => { conteudoCampoInput = texto }}
                />
                <TouchableOpacity onPress={comentar}>
                    <Image
                        style={estilo.imgSend}
                        source={require('../../../res/img/send.png')} />
                </TouchableOpacity>
            </View>
        </Fragment>
    )
};

export default Comentarios;