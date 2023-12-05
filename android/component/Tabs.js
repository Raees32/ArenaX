import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Results from './Results';
import Home from './Home';
import Payment from './Payment';
import Profile from './Profile';
import WalletScreen from './waleet';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileStack from './ProfileStack';


const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: '#000000', height: 46, marginBottom: 14 }}
      activeColor="#FF0" // Set the active color to white
      shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              color={focused ? '#FF0000' : '#FFFFFF'} // Change color to white when focused
              size={28}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={({ route }) => ({
          tabBarLabel: 'Payment',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="wallet"
              color={focused ? '#FF0000' : '#FFFFFF'} // Change color to white when focused
              size={28}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Results"
        component={Results}
        options={({ route }) => ({
          tabBarLabel: 'Results',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="trophy"
              color={focused ? '#FF0000' : '#FFFFFF'} // Change color to white when focused
              size={28}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              color={focused ? '#FF0000' : '#FFFFFF'} // Change color to white when focused
              size={28}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

















