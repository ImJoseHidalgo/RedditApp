import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewPostsScreen from '../screens/NewsPostsScreen';
import HotPostsScreen from '../screens/HotPostsScreen';
import TopsPostsScreen from '../screens/TopsPostsScreen';
import ControversialsScreen from '../screens/ControversialsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop: top }}
      sceneContainerStyle={{
        backgroundColor: '#000',
      }}
      tabBarOptions={{
        activeTintColor: '#fff',
        pressColor: '#494949',
        showIcon: false,
        indicatorStyle: {
          backgroundColor: '#FF4502'
        },
        style: {
          shadowColor: 'transparent',
          elevation: 0,
          backgroundColor: '#000',
        }
      }}
    >
      <Tab.Screen name="New" component={NewPostsScreen} />
      <Tab.Screen name="Top" component={TopsPostsScreen} />
      <Tab.Screen name="Hot" component={HotPostsScreen} />
      <Tab.Screen name="polemic" component={ControversialsScreen} />
    </Tab.Navigator>
  );
}