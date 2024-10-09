import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert, ImageBackground } from 'react-native';

const TelaLogin = () => {
    return (
        <View style={styles.container}>

            <View style={styles.painel_imagem}>
                <Image
                    style={styles.imagem}
                    source={require('../images/icon_app.png')}         
                    //source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png' }} 
                    />
            </View>

            <View style={styles.container_login}>
                <View style={{flex: 1, alignItems: 'center',}}>
                    <Text
                        style={styles.titulo_caixa_texto}>
                        Login
                    </Text>
                    <TextInput
                        style={styles.caixa_texto} />

                    <Text
                        style={styles.titulo_caixa_texto}>
                        Senha
                    </Text>
                    <TextInput
                        style={styles.caixa_texto}
                        secureTextEntry={true} />

                    <Pressable
                        style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                    >
                        <Text style={styles.desc_botao}>Entrar</Text>
                    </Pressable>
                </View>

                <View 
                    style={{flex: 0.3, flexDirection:'row', justifyContent:'space-evenly', alignItems: 'center'}}>
                    <Pressable
                        style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                    >
                        <Text style={styles.desc_botao}>Cadastrar-se</Text>
                    </Pressable>

                    <Pressable
                        style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                    >
                        <Text style={styles.desc_botao}>Esqueceu a senha</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default TelaLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFACD'
    },
    container_login: {
        flex: 2,
        
    },
    titulo_caixa_texto: {
        fontSize: 25,
        color: 'black'
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        backgroundColor: 'white'
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 10,
        //marginTop: 20,
        borderRadius: 10
    },
    desc_botao: {
        fontSize: 20,
        color: 'white'
    },
    painel_imagem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem: {
        width: 200,
        height: 200,
        resizeMode: "center"
    }
});
