import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewPostsScreen from '../screens/NewsPostsScreen';
import HotPostsScreen from '../screens/HotPostsScreen';
import TopsPostsScreen from '../screens/TopsPostsScreen';
import ControversialsScreen from '../screens/ControversialsScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="New" component={NewPostsScreen} />
      <Tab.Screen name="Top" component={TopsPostsScreen} />
      <Tab.Screen name="Hot" component={HotPostsScreen} />
      <Tab.Screen name="Controversial" component={ControversialsScreen} />
    </Tab.Navigator>
  );
}