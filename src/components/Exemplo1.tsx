import React from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable} from 'react-native';
import { styles } from '../styles/styles';

const Exemplo1 = () => {
  //variável
  let url = 'https://w7.pngwing.com/pngs/35/712/png-transparent-mozilla-foundation-firefox-computer-icons-web-browser-firefox-sphere-desktop-wallpaper-android-thumbnail.png';

  //O retorno da função é o que será construído em tela
  return (
    <ScrollView>
      <View>
        <Text style={styles.titulo2}>login</Text>

        </View>
    
<Image 
          source={{uri: url}}
          style={styles.imagem_200}
        />
      <View>
        <Text style={styles.titulo1}>nome</Text>

      </View>

      <TextInput
        style={[styles.caixa_texto]}
        defaultValue="Digite seu nome"
      />

       <Text style={styles.titulo1}>senha</Text>
      <TextInput
        style={[styles.caixa_texto]}
        defaultValue="Digite sua senha"
      />
    
      <Pressable style={styles.botaoEntrar }>
      <Text style={styles.titulo1}>entrar</Text>
      </Pressable>


          
    </ScrollView>
  );
};

export default Exemplo1;

