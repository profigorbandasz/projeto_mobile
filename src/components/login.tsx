import React from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable} from 'react-native';
import { styles } from '../styles/stylesLogin';

const login = () => {
  //variável
  let url = 'https://www.mobafire.com/images/champion/square/singed.png';
// fire fox https://w7.pngwing.com/pngs/35/712/png-transparent-mozilla-foundation-firefox-computer-icons-web-browser-firefox-sphere-desktop-wallpaper-android-thumbnail.png
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
        secureTextEntry
        defaultValue="Digite sua senha"
      />
    
      <Pressable 
      style={(state)=> [styles.botaoEntrar, state.pressed ? {opacity:0.5} :null]}
      >

      <Text style={styles.titulo1} >entrar</Text>
      </Pressable>


          <View style={styles.botoes}>

     <Pressable style={(state)=> [styles.botoesBaixo, state.pressed ? {opacity:0.5} :null]}>
  <Text style={styles.botoesECTxt}>esquceu a senha</Text>
  </Pressable> 
  
  <Pressable style={(state)=> [styles.botoesBaixo, state.pressed ? {opacity:0.5} :null]}
      >
  <Text style={styles.botoesECTxt}>Cadastrar</Text>
  
  </Pressable>
  </View>
 
  
  
    </ScrollView>
  );
};

export default login;

