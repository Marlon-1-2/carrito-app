import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponents } from '../components/TitleComponents';
import { BodyComponents } from '../components/BodyComponents';
import { stylesGlobal } from '../theme/appTheme';
import { InputComponents } from '../components/InputComponents';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

interface FormRegister {
    name: string;
    email: string;
    password: string;
}

//interface define las propiedades del componente
interface Props {
    lisUsers: User[]; //arreglo de usuarios desde el stack navigator
    handleAddUser: (user:User)=>void; //funcion para modificar el arreglo de usuarios desde el stack navigator
}

export const RegisterScreen = ({lisUsers,handleAddUser}:Props) => {
    //hook use state: permite gestionar el estado del formulario
    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        email: '',
        password: ''
    });
const navigation=useNavigation();
    //funcio para capturar los valores de mi formulario
    const handleChangeValue = (name: string, value: string) => {
        //modificar el esatdo del formulario
        setFormRegister({ ...formRegister, [name]: value });
    }

    //fucion para verificar si el usuario ya existe
    const verifyUser = (): User => {
        const existUser = lisUsers.filter(user => user.email == formRegister.email)[0];
        return existUser;
    }

    //funcion para generar los ids de los nuevos uausrios
    const getIdUser = () => {
        const getId = lisUsers.length+1;
        return getId;
    }


    //funciom para registrase
    const handeRegister = () => {
        //validar que los campos no esten vacios
        if (formRegister.name == '' || formRegister.email == '' || formRegister.password == '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        //validar que el usuario no exista
        if (verifyUser()){
            alert('El usuario ya existe');
            return;
        }

        //registrar el usuario
        //crear un objeto user
        const newUser: User = {
            id: getIdUser(),
            name: formRegister.name,
            email: formRegister.email,
            password: formRegister.password
        }

        //agregar el nuevo usuario al arreglo de usuarios
        handleAddUser(newUser);
        Alert.alert('Usuario registrado correctamente');
//navegar a la pantalla de login
        navigation.goBack();
        //console.log(formRegister);
    }
    return (
        <View>
            <TitleComponents title='Registrate' />
            <BodyComponents>
                <Text style={stylesGlobal.titleWelcomw}>Bienvenido de nuevo!</Text>
                <Text>Realiza yus compras de manera rápida y segura</Text>
                <View style={stylesGlobal.containerInput}>
                    <InputComponents
                        placeholder='Nombre'
                        keyboardType='default'
                        handleChangeValue={handleChangeValue}
                        name='name' />
                    <InputComponents
                        placeholder='Email'
                        keyboardType='email-address'
                        handleChangeValue={handleChangeValue}
                        name='email' />
                    <InputComponents
                        placeholder='Contraseña'
                        keyboardType='default'
                        handleChangeValue={handleChangeValue}
                        name='password' />
                </View>
                <ButtonComponent text='Registrarse' onPress={handeRegister} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                    <Text style={stylesGlobal.textRedirect}>
                        ¿Ya tienes cuenta? Inicia sesión ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponents>
        </View>

    )
}
