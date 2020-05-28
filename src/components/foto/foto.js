import React, { Fragment, useState } from 'react';
import {
    Image, Text, TouchableOpacity, View
} from "react-native";
import estilo from './estilo';
import { curtirFoto, imgLike } from '../api/curtidas';

const Foto = ({ urlFoto, descricao, qntLikes }) => {
    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(qntLikes)

    const clicouCurtir = () => {
        const [novoEstCurtiu, qnt] = curtirFoto(curtiu, likes)
        setLikes(qnt)
        setCurtiu(!novoEstCurtiu)
    }

    return (
        <Fragment>
            <Image
                style={estilo.imagem}
                onError={(e) => console.log(e.nativeEvent.error, 'erro de foto')}
                source={{ uri: urlFoto }} />
            <Text style={estilo.descricao}>{descricao}</Text>
            <View style={estilo.viewLike}>
                <TouchableOpacity
                    onPress={clicouCurtir}>
                    <Image
                        source={imgLike(curtiu)}
                        style={estilo.like} />
                </TouchableOpacity>
                <Text style={estilo.descricao}>curtidas {likes}</Text>
            </View>
        </Fragment>
    )
};

export default Foto;