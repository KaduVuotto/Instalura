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


const Comentarios = ({ comentarios }) => {
    const [estadoComentarios, setComentario] = useState(comentarios)
    const adicionarComentario = () => {
        campoInput.clear();
        const novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: 'bugan',
        }
        setComentario([...estadoComentarios, novoComentario]);
    }

    let campoInput;
    let conteudoCampoInput = '';
    return (
        <Fragment>
            <FlatList
                data={estadoComentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View style={[estilo.naMesmaLinha, { borderRadius: 22, elevation: 5, backgroundColor: 'white', height: 40, marginTop: 5 }]}>
                        <Text style={{ marginLeft: 16 }}>{item.userName} :</Text>
                        <Text style={{ marginLeft: 16 }}>{item.text}</Text>
                    </View>
                }
            />

            <View style={[estilo.naMesmaLinha, { height: 40, borderRadius: 22, elevation: 5, backgroundColor: 'white', marginTop: 10, paddingLeft:16, marginBottom: 26 }]}>
                <TextInput
                    style={{ flex: 1 }}
                    ref={textInput => campoInput = textInput}
                    placeholder={'Deixe seu comentario...'}
                    onChangeText={texto => { conteudoCampoInput = texto }}
                />
                <TouchableOpacity onPress={adicionarComentario}>
                    <Image
                        style={estilo.imgSend}
                        source={require('../../../res/img/send.png')} />
                </TouchableOpacity>
            </View>
        </Fragment>
    )
};

export default Comentarios;