import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { TitleComponents } from '../components/TitleComponents'
import { BodyComponents } from '../components/BodyComponents'
import { stylesGlobal } from '../theme/appTheme'
import { InputComponents } from '../components/InputComponents'
import { ButtonComponent } from '../components/ButtonComponent'
import { useState } from 'react';

//define la estructura del formulario
interface FormLogin{
  email:string,
  password:string
}

export const LoginScreen = () => {

  //hook usestate: permite gestionar el estado del formulario
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email:'',
    password:''
  });

//funcion para caprurar los valores de mi formulario
const handleChangeValue = (name:string,value:string) =>{
  console.log(name," ",value);
}

  return (
    <View>
      <StatusBar/>
        <TitleComponents title='Iniciar Sesión'/>
        <BodyComponents>
          <Text style={stylesGlobal.titleWelcomw}>Bienvenido de nuevo!</Text>
          <Text>Realiza yus compras de manera rápida y segura</Text> 
          <View style={stylesGlobal.containerInput}>
          <InputComponents placeholder='Email' keyboardType='email-address' handleChangeValue={handleChangeValue} name='email'/>
          <InputComponents placeholder='Contraseña' keyboardType='default' handleChangeValue={handleChangeValue} name='password'/>
          </View>
          <ButtonComponent text='Enviar'/>
        </BodyComponents>
    </View>
  )
}
