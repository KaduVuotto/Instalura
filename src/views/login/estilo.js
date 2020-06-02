import { StyleSheet, Dimensions } from "react-native"

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;
const estilo = StyleSheet.create({
    container: {
        flexGrow: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs: {
        width: largura * 0.8,
        backgroundColor: 'white',
        opacity: 0.6,
        height: 30,
        borderRadius: 22,
        marginTop: 16,
        paddingLeft: 10
    },
    imagemAlura: {
        width: largura * 0.5,
        height: altura * 0.1,
    },
    imagemInstagram: {
        marginTop: 16,
        width: largura * 0.2,
        height: altura * 0.1,
    },
    btnEntrar: {
        backgroundColor: 'white',
        marginTop: 80,
        width: largura * 0.4,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
})

export default estilo;