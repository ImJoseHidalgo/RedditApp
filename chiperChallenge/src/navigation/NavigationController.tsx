import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WebViewScreen from '../screens/WebViewScreen';
import { PostData } from '../interfaces/redditInterface';
import { TopTabNavigator } from './TopTabNavigator';
import { ActivityIndicator } from 'react-native';

export type RootStackParams = {
  HomeScreen: undefined;
  WebViewScreen: PostData;
}

const Stack = createStackNavigator();

export const NavigationController = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#000',
        },
        headerStyle: { 
          backgroundColor: '#000',
        },
        headerTintColor: '#FF4502',
        
      }}
    >
      <Stack.Screen name="Reddit" component={TopTabNavigator} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
    </Stack.Navigator>
  );
}