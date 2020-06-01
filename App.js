import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
  StatusBar,
  Platform,
} from "react-native";
import { Cabecalho } from './src/components/cabecalho';
import { Foto } from './src/components/foto';
import lerFotos from './src/components/api/feed';
import { Comentarios } from './src/components/comentarios';



const App = () => {
  const [fotos, setFotos] = useState([]);


  useEffect(() => {
    lerFotos(setFotos);
  }, [])

  let altura = 0;
  if (Platform.OS === 'ios') {
    altura = 35;
  }
  return (
    <ScrollView style={{
      marginTop: altura
    }}>
      <StatusBar
        backgroundColor='white'
        barStyle={'dark-content'}
      />
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho
              urlImage={item.userURL}
              nomeUsuario={item.userName} />
            <Foto
              urlFoto={item.url}
              descricao={item.description}
              qntLikes={item.likes}
            />
            <Comentarios
              comentarios={item.comentarios}
            />
          </Fragment>}
      />
    </ScrollView>
  )
};

export default App;
