import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewPostsScreen from '../components/NewPostsScreen';
import HotPostsScreen from '../components/HotPostsScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="NewPostsScreen" component={NewPostsScreen} />
      <Tab.Screen name="HotPostsScreen" component={HotPostsScreen} />
    </Tab.Navigator>
  );
}