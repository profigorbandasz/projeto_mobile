import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/stylesLogin';
import Exemplo1 from '../components/login';

const Telalogin = (props: PrincipalProps) => {
    return (
        <ScrollView>
            <ImageBackground style={styles.tela} source={{uri: 'https://services.meteored.com/img/article/universo-pode-estar-desacelerando-segundo-novas-observacoes-de-galaxias-1712261219743_1280.png'}}>
       
         
            <Exemplo1/>
        
        
        </ImageBackground>
        </ScrollView>
    );
}

export default Telalogin;
