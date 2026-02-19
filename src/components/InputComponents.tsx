import React from 'react'
import { KeyboardTypeOptions, TextInput } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'

interface Props {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    handleChangeValue:(name:string,value:string)=>void;
    name:string;
}

export const InputComponents = ({ placeholder, keyboardType, handleChangeValue, name}: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(value)=>handleChangeValue(name,value)}
            style={stylesGlobal.usuarioInput} />

    )
}
