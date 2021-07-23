import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { NavigationController } from './src/navigation/NavigationController';

const App = () => {

  return (
    <NavigationContainer>
      <NavigationController />
    </NavigationContainer>
  )
}

export default App
