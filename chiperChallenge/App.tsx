import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { NavigationController } from './src/navigation/NavigationController';
// import { TopTabNavigator } from './src/navigation/TopTabNavigator';

const App = () => {

  return (
    <NavigationContainer>
      <NavigationController />
      {/* <TopTabNavigator /> */}
    </NavigationContainer>
  )
}

export default App
