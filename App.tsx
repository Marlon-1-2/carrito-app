import React from 'react'
import { View } from 'react-native'
import { LoginScreen } from './src/screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/navigator/StackNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}
export default App;
