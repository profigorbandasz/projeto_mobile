import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import { styles } from '../styles/styles';

const HelloWorld = () => {
  return(
<View style={styles.botoes}>
     <Pressable style={styles.botoesBaixo }>
  <Text style={styles.botoesECTxt}>esquceu a senha</Text>
  </Pressable> 
  
  <Pressable style={styles.botoesBaixo }>
  <Text style={styles.botoesECTxt}>Cadastrar</Text>
  </Pressable>
  </View>
 
  
  );
  
};

export default HelloWorld;