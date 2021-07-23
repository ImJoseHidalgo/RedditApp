import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import WebViewScreen from '../screens/WebViewScreen';
import { PostData } from '../interfaces/redditInterface';

export type RootStackParams = {
  HomeScreen: undefined;
  WebViewScreen: PostData;
}

const Stack = createStackNavigator();

export const NavigationController = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: {
          backgroundColor: '#000',
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
    </Stack.Navigator>
  );
}