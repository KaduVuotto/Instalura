import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
  StatusBar,
  Platform,
} from "react-native";
import { Cabecalho } from '../../components/cabecalho';
import { Foto } from '../../components/foto';
import lerFotos from '../../components/api/feed';
import { Comentarios } from '../../components/comentarios';
import { curtirFoto, imgLike } from '../../components/api/curtidas';
import adicionarComentario from '../../components/api/comentario';



const Feed = () => {
  const [fotos, setFotos] = useState([]);


  useEffect(() => {
    lerFotos(setFotos);
  }, [])

  let altura = 0;
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
              imgLike={imgLike}
              curtirFoto={curtirFoto}
            />
            <Comentarios
              comentarios={item.comentarios}
              adicionarComentario={adicionarComentario}
            />
          </Fragment>}
      />
    </ScrollView>
  )
};

Feed.navigationOptions = ({navigation}) => {
  const opcoes = {
      title: navigation.getParam('nome'),
  }
  return opcoes;
}

export default Feed;
