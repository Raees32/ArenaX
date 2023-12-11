import React, { useState } from 'react';
import SignInScreen from './android/component/Signin';
import Tabs from './android/component/Tabs';
import WalletScreen from './android/component/waleet';
import SignUpScreen from './android/component/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();

function App() {
  const [userIsSignedIn, setUserIsSignedIn] = useState(false);

  return (
    <NavigationContainer>
      {userIsSignedIn ? (
        <MainStack.Navigator>
          <MainStack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              headerShown: true,
              headerTitle: 'Pubg Legends',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#ff0000',
                height: 46,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
                color: '#fff',
              },
            }}
          />
          <MainStack.Screen
            name="Wallet"
            component={WalletScreen}
            options={{
              headerShown: true,
              headerTitle: 'Pubg Legends',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#ff0000',
                height: 47,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
                color: '#fff',
              },
            }}
          />
        </MainStack.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="SignIn">
          <AuthStack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              headerShown: false,
            }}
          />
          <AuthStack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              headerShown: true,
              headerTitle: 'Create Account',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#ff0000',
                height: 46,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
                color: '#fff',
              },
            }}
          />
          <AuthStack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              headerShown: true,
              headerTitle: 'Pubg Legends',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#ff0000',
                height: 46,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
                color: '#fff',
              },
            }}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;






















// import React, { useState } from 'react';
// import SignInScreen from './android/component/Signin';
// import Tabs from './android/component/Tabs';
// import WalletScreen from './android/component/waleet';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const MainStack = createStackNavigator();
// const AuthStack = createStackNavigator();

// function App() {
//   const [userIsSignedIn, setUserIsSignedIn] = useState(false);

//  return (
//     <NavigationContainer>
//       {userIsSignedIn ? (
//         <>
//           <MainStack.Navigator>
//             <MainStack.Screen
//               name="Tabs"
//               component={Tabs}
//               options={{
//                 headerShown: true,
//                 headerTitle: 'Pubg Legends',
//                 headerTitleAlign: 'center',
//                 headerStyle: {
//                   backgroundColor: '#ff0000',
//                   height: 46,
//                 },
//                 headerTitleStyle: {
//                   fontWeight: 'bold',
//                   fontSize: 25,
//                   color: '#fff',
//                 },
//               }}
//             />
//             <MainStack.Screen
//               name="Wallet"
//               component={WalletScreen}
//               options={{
//                 headerShown: true,
//                 headerTitle: 'Pubg Legends',
//                 headerTitleAlign: 'center',
//                 headerStyle: {
//                   backgroundColor: '#ff0000',
//                   height: 47,
//                 },
//                 headerTitleStyle: {
//                   fontWeight: 'bold',
//                   fontSize: 25,
//                   color: '#fff',
//                 },
//               }}
//             />
//           </MainStack.Navigator>
//         </>
//       ) : (
//         <>
//           <AuthStack.Navigator initialRouteName="SignIn">
//             <AuthStack.Screen
//               name="SignIn"
//               component={SignInScreen}
//               options={{
//                 headerShown: false,
//               }}
//             />
//             <AuthStack.Screen
//               name="Tabs"
//               component={Tabs}
//               options={{
//                 headerShown: true,
//                 headerTitle: 'Pubg Legends',
//                 headerTitleAlign: 'center',
//                 headerStyle: {
//                   backgroundColor: '#ff0000',
//                   height: 46,
//                 },
//                 headerTitleStyle: {
//                   fontWeight: 'bold',
//                   fontSize: 25,
//                   color: '#fff',
//                 },
//               }}
//             />
//           </AuthStack.Navigator>
//         </>
//       )}
//     </NavigationContainer>
//   );
// }

// export default App;

