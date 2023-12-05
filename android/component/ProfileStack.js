import React from 'react';
import WalletScreen from './waleet';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import Policy from './policy'; // Import the Policy component

const ProfileStack = () => {
  const ProfileStack = createStackNavigator();
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name="Policy" // Define a screen for the Policy component
        component={Policy}
        
        options={{
            headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStack;
