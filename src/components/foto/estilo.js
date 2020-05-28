import {
    Dimensions,
    StyleSheet,
} from "react-native";

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    imagem: {
        width: largura,
        height: largura,
    },
    like: {
        width: 40,
        height: 40,
        marginLeft: 16,
        marginBottom: 16,
        marginTop: 10,
    },
    descricao: {
        marginLeft: 16
    },
    viewLike: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default estilo;
