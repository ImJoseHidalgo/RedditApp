import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WebViewScreen from '../screens/WebViewScreen';
import { PostData } from '../interfaces/redditInterface';
import { TopTabNavigator } from './TopTabNavigator';

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
        }
      }}
    >
      <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
    </Stack.Navigator>
  );
}