import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Results from './Results';
import Catch from './UserHome'

import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileStack from './ProfileStack';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Catch"
      barStyle={{  backgroundColor: 'rgba(0, 0, 0, 7)', height: 64 }}// Adjust height here
      activeColor="#fff"

      shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={Catch}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              color={focused ? '#FF0000' : 'yellow'}
              
              size={22} // Adjust icon size here
            />
          ),
          tabBarLabel: 'Home', // Add a label
        }}
      />
    
      <Tab.Screen
        name="Results"
        component={Results}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="trophy"
              color={focused ? '#FF0000' : '#FFFFFF'}
              size={22} // Adjust icon size here
            />
          ),
          tabBarLabel: 'Results', // Add a label
        }}
      />
     
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              color={focused ? '#FF0000' : '#FFFFFF'}
              size={22} // Adjust icon size here
            />
          ),
          tabBarLabel: 'Profile', // Add a label
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;