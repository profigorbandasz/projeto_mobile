import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    tela: {
        flex: 1,
        alignItems:'center',
        backgroundColor: '#a15ff5'
    },
    titulo1: {
       justifyContent: 'center',
        marginTop:50,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },

    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        padding:100,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10
    },
    texto_botao: {
        fontSize: 20,
        color: 'white'
    },
    
    caixa_texto: {
backgroundColor:'white',
        color: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        marginTop:50
    },

    largura_70: {
        width: '70%'
    },

    imagem_200: {
        borderRadius: 100,
        marginTop:50,
        width: 200,
        height: 200
    }
});

export {styles};