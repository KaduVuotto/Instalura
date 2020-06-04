import React, { Fragment, useState } from 'react';
import {
    ScrollView,
    FlatList,
    StatusBar,
    Platform,
    Text,
    TextInput,
    Button,
    View,
    Image,
    ImageBackground
} from "react-native";
import estilo from './estilo';
import efetuarLogin from '../../components/api/login';
import AsyncStorage from '@react-native-community/async-storage'

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const tentarLogar = async () => {
        try {
           const token = await efetuarLogin(usuario, senha);
           AsyncStorage
        } catch (erro) {
            setMensagemErro(erro.message)
        }
    }


    return (
        <Fragment>
            <ImageBackground style={{
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center"
            }}
                source={require('../../../res/img/Instagram_Background.jpg')}>
                <View style={estilo.container} >
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={estilo.imagemInstagram}
                            source={require('../../../res/img/instagram.png')} />
                        <Image
                            style={estilo.imagemAlura}
                            source={require('../../../res/img/alura.png')} />
                    </View>
                    <TextInput
                        style={estilo.inputs}
                        placeholder={'Usuario'}
                        placeholderTextColor={'#999'}
                        onChangeText={texto => setUsuario(texto)}
                    />
                    <TextInput
                        style={estilo.inputs}
                        placeholder={'Senha'}
                        placeholderTextColor={'#999'}
                        secureTextEntry={true}
                        onChangeText={texto => setSenha(texto)}
                    />
                    <Text
                    
                    style={estilo.mensagemErro}>{mensagemErro}</Text>
                    <View style={estilo.btnEntrar}>
                        <Button
                            color={'#7232bd'}
                            title={'Entrar'}
                            onPress={tentarLogar}
                        />
                    </View>
                </View>
            </ImageBackground>
        </Fragment>
    )
};

export default Login;
