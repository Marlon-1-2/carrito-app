import React from 'react'
import { StatusBar, Text, View, KeyboardTypeOptions, Alert, TouchableOpacity } from 'react-native';
import { TitleComponents } from '../components/TitleComponents'
import { BodyComponents } from '../components/BodyComponents'
import { stylesGlobal } from '../theme/appTheme'
import { InputComponents } from '../components/InputComponents'
import { ButtonComponent } from '../components/ButtonComponent'
import { useState } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { PRIMARY_COLOR } from '../commons/constants';
import Icon from '@expo/vector-icons/MaterialIcons';
import { User } from '../navigator/StackNavigator';
//define la estructura del formulario
interface FormLogin {
  email: string,
  password: string
}
//interface define las propiedades del componente
interface Props{
users:User[]; //arreglo de usuarios desde el stack navigator
}
export const LoginScreen = ({users}:Props) => {
 
  //hook usestate: permite gestionar el estado del formulario
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: '',
    password: ''
  });
  //hook useState: permite getsionar el estado de la contraseña 
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
  //hook useNavigator me permite navegar de una pantalla a otra 
  const navigation = useNavigation();
  //funcion para caprurar los valores de mi formulario
  const handleChangeValue = (name: string, value: string) => {
    //console.log(name," ",value);
    //funciuon para cambiar el estado del formulario
    setFormLogin({ ...formLogin, [name]: value });
  }
  //funcion para verificar si exixte el usuario 
  const verifyUser = ():User => {
    const existUser = users.filter(user => user.email == formLogin.email && user.password == formLogin.password)[0];
    return existUser;
  }

  // funcion pata iniciar sesion
  const handleSingIn = (): void => {
    if (formLogin.email == '' || formLogin.password == '') {
      //mesaje de alerta 
      Alert.alert('Error', 'Profavor complete todos los campos');
      return;
    }
    if (!verifyUser()) {
      Alert.alert('Error', 'Usuario y/o contraseña incorrectos');
      return;
    }

    console.log(formLogin);
    //si todo sale bien navegar a la pantalla de home
    navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
  }

  return (
    <View>
      <StatusBar />
      <TitleComponents title='Iniciar Sesión' />
      <BodyComponents>
        <Text style={stylesGlobal.titleWelcomw}>Bienvenido de nuevo!</Text>
        <Text>Realiza yus compras de manera rápida y segura</Text>
        <View style={stylesGlobal.containerInput}>
          <InputComponents
            placeholder='Email'
            keyboardType='email-address'
            handleChangeValue={handleChangeValue}
            name='email' />
          <InputComponents
            placeholder='Contraseña'
            keyboardType='default'
            handleChangeValue={handleChangeValue}
            name='password'
            isPassword={hiddenPassword} />
          <Icon name={hiddenPassword == true ? 'visibility' : 'visibility-off'} color={PRIMARY_COLOR}
            size={20}
            style={stylesGlobal.iconPassword}
            onPress={() => setHiddenPassword(!hiddenPassword)}
          />
        </View>
        <ButtonComponent text='Iniciar' onPress={handleSingIn} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Registro' }))}>
          <Text style={stylesGlobal.textRedirect}>
            No tienes cuenta? Registrate ahora
          </Text>
        </TouchableOpacity>
      </BodyComponents>
    </View>
  )
}
