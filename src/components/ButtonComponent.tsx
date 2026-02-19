import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'

interface Props{
    text:string
}

export const ButtonComponent = ({text}:Props) => {
  return (
    <TouchableOpacity style={stylesGlobal.button}>
        <Text style={stylesGlobal.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}
