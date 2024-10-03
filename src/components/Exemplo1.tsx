import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import { styles } from '../styles/styles';

const Exemplo1 = () => {
  //variável
  let url = 'https://cdn-icons-png.flaticon.com/512/6364/6364352.png';

  //O retorno da função é o que será construído em tela
  return (
    <ScrollView>
      <Text style={styles.titulo1}>bastante legal</Text>

      <View>
        <Text style={styles.titulo1}>escreva oque pede em baixo</Text>

        <Image
          source={{uri: url}}
          style={styles.imagem_200}
        />
      </View>

      <TextInput
        style={[styles.caixa_texto, styles.largura_70]}
        defaultValue="Digite seu nome"
      />
      <TextInput
        style={[styles.caixa_texto, styles.largura_70]}
        defaultValue="Digite seu sobrenome"
      />
    </ScrollView>
  );
};

export default Exemplo1;

