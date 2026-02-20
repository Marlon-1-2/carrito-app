import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'

interface Props{
    text:string
    onPress:()=>void;
}

export const ButtonComponent = ({text , onPress}:Props) => {
  return (
    <TouchableOpacity style={stylesGlobal.button} onPress={onPress}>
        <Text style={stylesGlobal.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}
