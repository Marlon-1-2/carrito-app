import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, QUATERNARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../commons/constants';

export const stylesGlobal = StyleSheet.create({
    title:{
        color:SECONDARY_COLOR,
        fontSize:25,
        paddingHorizontal:30,
        paddingTop:70,
        fontWeight:'bold'
    },
    containerBody:{
        backgroundColor:SECONDARY_COLOR,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:30,
        paddingTop:40
    },
    titleWelcomw:{
        fontSize:17,
        fontWeight:'bold'
    },
    usuarioInput:{
        backgroundColor:QUATERNARY_COLOR,
        borderRadius:10,
        //marginTop:15,
        paddingHorizontal:20,
        marginVertical:7,
    },
    containerInput:{
        marginVertical:15,
    },
    button:{
        backgroundColor:TERTIARY_COLOR,
        paddingVertical:15,
        borderRadius:10,
    },
    buttonText:{
        textAlign:'center',
        color: SECONDARY_COLOR,
        fontSize:15,
        fontWeight:'bold'
    },
    iconPassword:{
        position:'absolute',
        bottom:15,
        right:10,
    },
    textRedirect:{
        marginTop:15,
        fontSize:15,
        color:PRIMARY_COLOR,
        fontWeight:'bold',
        textAlign:'center'
    }
}) 