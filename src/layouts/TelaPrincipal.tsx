import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';

//Componente chamado TelaPrincipal que recebe PrincipalProps como parametro 
//e constrói uma View com o componente HelloWorld e Exemplo1 dentro
const TelaPrincipal = (props: PrincipalProps) => {
    return (
        <View 
            style={styles.tela}>
            <HelloWorld />
            <Exemplo1/>
        </View>
    );
}

//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;
