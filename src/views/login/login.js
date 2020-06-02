import React, { Fragment } from 'react';
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

const Login = () => {
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
                    />
                    <TextInput
                        style={estilo.inputs}
                        placeholder={'Senha'}
                        placeholderTextColor={'#999'}
                        secureTextEntry={true}
                    />
                    <View style={estilo.btnEntrar}>
                        <Button
                            color={'#7232bd'}
                            title={'Entrar'}
                        />
                    </View>
                </View>
            </ImageBackground>
        </Fragment>
    )
};

export default Login;
