import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';

const TelaPrincipal = (props: PrincipalProps) => {
    return (
        <ScrollView>
        <View style={styles.tela}>
          
            <Exemplo1/>
        </View>
        <View>
        <HelloWorld/>
        </View> 
        </ScrollView>
    );
}

export default TelaPrincipal;
