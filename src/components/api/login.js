const efetuarLogin = async (usuario, senha) => {
    let url = '10.0.2.2';
    if (Platform.OS == 'ios') {
        url = 'localhost';
    }
    const cabecalhoHTTP = {
        method: 'POST',
        body: JSON.stringify({
            userName: usuario,
            password: senha,
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }
    const resposta = await fetch(`http://${url}:3030/users/login`,
        cabecalhoHTTP);

    if (resposta.ok) {
        
    } else {
        throw new Error('Não foi possível efetuar login')
    }

    console.warn(resposta);
}

export default efetuarLogin;