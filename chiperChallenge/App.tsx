import 'react-native-gesture-handler'
import React from 'react'
import { Image, StatusBar, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { NavigationController } from './src/navigation/NavigationController';

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='black' />
      <View style={ styles.header }>
        <Image source={{ uri: 'https://www.reddiquette.com/wp-content/uploads/2020/09/What-Is-The-Reddit-Logo-Called.png' }} style={ styles.logo } />
      </View>
      <NavigationController />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#000'
  },
  logo: {
    width: 35,
    height: 35,
  }
})