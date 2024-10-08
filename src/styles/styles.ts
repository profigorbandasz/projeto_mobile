import { StyleSheet } from "react-native";

const styles = StyleSheet.create({


    botoesBaixo:{
        backgroundColor:"black",
    paddingTop:4,
   padding:10,
    alignItems:'center',    
    marginTop:30,
borderRadius:50,


    },
    botoesECTxt:{
fontSize:25, 
color:'white'
    },

    botaoCadastrar:{
        
        backgroundColor:"black",
        paddingTop:4,
       padding:10,
        alignItems:'center',    
        marginTop:30,
    borderRadius:50,

    },
    botaoEntrar:{
    backgroundColor:"black",
    paddingBottom:13,
    paddingRight:3,
    alignItems:'center',
    marginTop:30,
borderRadius:50
},
    botoes: {
        
        backgroundColor: '#a15ff5',  
            flexDirection: 'row',
            justifyContent: 'space-between', 
            padding: 20,
          },

        tela: {
            paddingBottom:'25%',
        flex: 1,
        alignItems:'center',
        backgroundColor: '#a15ff5'
        },

    titulo2: {
marginLeft:"29%",
justifyContent: 'center',
        marginTop:10,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    titulo1: {
       justifyContent: 'center',
        marginTop:10,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },

  
    
    
    caixa_texto: {
backgroundColor:'white',
        color: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        marginTop:0,
    width:300
    },

    

    imagem_200: {
        marginLeft:"14%",
        borderRadius: 100,
        marginTop:50,
        width: 200,
        height: 200
    }
});

export {styles};