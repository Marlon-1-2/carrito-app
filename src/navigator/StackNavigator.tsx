import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constants';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}


export const StackNavigator = () =>{ 

   //datos de prueba
  const users: User[] = [
    {
      id: 1,
      name: "Juan Perez",
      email: "juanperez@gmail.com",
      password: "123456"
    },
    {
      id: 2,
      name: "Maria Lopez",
      email: "marialopez@gmail.com",
      password: "abcdef"
    }
  ]

  //hook useState: permite gestionar el estado del formulario las liosta de usuraios
  const [listusers, setListUsers] = useState<User[]>(users);

  //funcion para agregar un nuevo usuario a la lista de usuarios
  const handleAddUser = (user:User):void =>{
    //modificar el estado del arreglo de usuarios
    setListUsers([...listusers,user]);
  }
  return (
    <Stack.Navigator screenOptions={{
      cardStyle:{
        backgroundColor:PRIMARY_COLOR
      }
    }}>
      <Stack.Screen 
      name="Login" 
      options={{headerShown:false}} 
      children={()=><LoginScreen users={listusers}/>} />
      <Stack.Screen 
      name="Registro"
      options={{ headerShown: false }}
      children={()=><RegisterScreen lisUsers={listusers} handleAddUser={handleAddUser}/>} />
      <Stack.Screen 
      name="Home" 
      options={{headerShown:false}} 
      component={HomeScreen}/>
    </Stack.Navigator>
  );
}