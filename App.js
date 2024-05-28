import React, { useState, useEffect } from 'react';
import SignInScreen from './android/component/Signin';

import SignUpScreen from './android/component/SignUp';
import Admin from './android/component/Admin';
import AdminSignInScreen from './android/component/Adminsignup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DataUploadScreen from './android/component/Dataupload';
import Tabs from './android/component/Tabs';
import Start from './android/component/starting'

import Freefire from './android/component/freefire';
import Chess from './android/component/chess';
import Pubg from './android/component/pubg';
const MainStack = createStackNavigator();



function App() {
  const [userIsSignedIn, setUserIsSignedIn] = useState(false);

  useEffect(() => {
    // Simulate app loading time and then set userIsSignedIn to true after 7 seconds
    const timeout = setTimeout(() => {
      setUserIsSignedIn(true);
    }, 2600); // 7 seconds

    return () => clearTimeout(timeout);
  }, []);
  

  return (
    <NavigationContainer   >
      <MainStack.Navigator>
        {!userIsSignedIn ? (
          <MainStack.Screen
            name="Start"
            component={Start}
            options={{ headerShown: false }}
          />
        ) : null}
        <MainStack.Screen 
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: true,
            headerTitle: 'ArenaX',
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
        <MainStack.Screen name="Admin" component={Admin} 
        options={{
          headerShown: true,
          headerTitle: 'Admin',
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
        }}/>
        <MainStack.Screen name="AdminSignIn" component={AdminSignInScreen}
        options={{
          headerShown: true,
          headerTitle: 'Admin',
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
        }} />
        <MainStack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: true,
            headerTitle: 'ArenaX',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: "#000",
              
           
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
          name="DataUploadScreen"
          component={DataUploadScreen}
          options={{
            headerShown: true,
            headerTitle: 'ArenaX',
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
          name="Pubg Result"
          component={Pubg}
          options={{
            headerShown: true,
            headerTitle: 'ArenaX',
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
          name="FreeFire Result"
          component={Freefire}
          options={{
            headerShown: true,
            headerTitle: 'ArenaX',
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
          name="Chess Result"
          component={Chess}
          options={{
            headerShown: true,
            headerTitle: 'ArenaX',
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
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;










// import React, { useState, useEffect } from 'react';
// import SignInScreen from './android/component/Signin';
// import Catch from './android/component/UserHome'
// import SignUpScreen from './android/component/SignUp';
// import Admin from './android/component/Admin';
// import AdminSignInScreen from './android/component/Adminsignup';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import DataUploadScreen from './android/component/Dataupload';
// import Tabs from './android/component/Tabs';
// import start from './android/component/starting'

// const MainStack = createStackNavigator();
// const AuthStack = createStackNavigator();

// function App() {

//   const [userIsSignedIn, setUserIsSignedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(true);

//   const handleUserSignIn = () => {
//     setUserIsSignedIn(true);
   
//   };

//   const handleAdminSignIn = () => {
//     setUserIsSignedIn(true);
//     setIsAdmin(true);
//   };
 

//   return (
//     <NavigationContainer>
//       {userIsSignedIn ? (
//         <MainStack.Navigator>
//           <MainStack.Screen
//             name="Tabs"
//             component={Tabs}
//             options={{
//               headerShown: true,
//               headerTitle: 'Pubg Legends',
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 46,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
//         </MainStack.Navigator>
//       ) : (
//         <AuthStack.Navigator initialRouteName="SignIn">
//           <AuthStack.Screen
//             name="SignIn"
//             component={SignInScreen}
//             options={{
//               headerShown: false,
//             }}
//           />
          
//           <AuthStack.Screen
//             name="SignUp"
//             component={SignUpScreen}
//             options={{
//               headerShown: true,
//               headerTitle: 'Create Account',
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 46,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
          
//           <AuthStack.Screen
//             name="Tabs"
//             component={Tabs}
//             options={{
//               headerShown: true,
//               headerTitle: 'Pubg Legends',
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 46,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
       
//           <AuthStack.Screen
//             name="Admin"
//             component={Admin}
//             options={{
//               headerShown: true,
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 46,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
//           <AuthStack.Screen
//             name="DataUploadScreen"
//             component={DataUploadScreen}
//             options={{
//               headerShown: true,
//               headerTitle: 'Upload Data',
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 46,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
//           <AuthStack.Screen
//             name="AdminSignIn"
//             component={AdminSignInScreen}
//             options={{
//               headerShown: true,
//               headerTitle: 'Admin Sign In',
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 46,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
//         </AuthStack.Navigator>
//       )}
//     </NavigationContainer>
//   );
// }

// export default App;

















// import React, { useState } from 'react';
// import SignInScreen from './android/component/Signin';
// import Catch from './android/component/UserHome'
// import SignUpScreen from './android/component/SignUp';
// import Admin from './android/component/Admin'; 
// import AdminSignInScreen from './android/component/Adminsignup'; // Import the AdminSignInScreen component
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import DataUploadScreen from './android/component/Dataupload';


// const MainStack = createStackNavigator();
// const AuthStack = createStackNavigator();

// function App() {
//   const [userIsSignedIn, setUserIsSignedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false); // Track admin status

//   const handleUserSignIn = () => {
//     setUserIsSignedIn(true);
//   };

//   const handleAdminSignIn = () => {
//     setUserIsSignedIn(true);
//     setIsAdmin(true);
//   };

//   return (
//     <NavigationContainer>
//       {userIsSignedIn ? (
//         <MainStack.Navigator>
//           <MainStack.Screen
//             name="Catch"
//             component={Catch}
//             options={{
//               headerShown: true,
//               headerTitle: 'Pubg Legends',
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 46,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
//         </MainStack.Navigator>
//       ) : (
//         <AuthStack.Navigator initialRouteName={isAdmin ? "DataUploadScreen" : "SignIn"}>
//           <AuthStack.Screen
//             name="SignIn"
//             component={SignInScreen}
//             options={{
//               headerShown: false,
//             }}
//           />
//           <AuthStack.Screen
//             name="SignUp"
//             component={SignUpScreen}
//             options={{
//               headerShown: true,
//               headerTitle: 'Create Account',
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 46,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
//           <AuthStack.Screen
//             name="Admin"
//             component={Admin}
//             options={{
//               headerShown: true,
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 46,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
//           <AuthStack.Screen
//             name="DataUploadScreen"
//             component={DataUploadScreen}
//             options={{
//               headerShown: true,
//               headerTitle: 'Upload Data',
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 46,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
//           {/* Add AdminSignInScreen as a screen in the AuthStack */}
//           <AuthStack.Screen
//             name="AdminSignIn"
//             component={AdminSignInScreen}
//             options={{
//               headerShown: true,
//               headerTitle: 'Admin Sign In',
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 46,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
//         </AuthStack.Navigator>
//       )}
//     </NavigationContainer>
//   );
// }

// export default App;







// import React, { useState } from 'react';
// import SignInScreen from './android/component/Signin';
// import Tabs from './android/component/Tabs';
// import WalletScreen from './android/component/waleet';
// import SignUpScreen from './android/component/SignUp';
// import AdminLogin from './android/component/Adminlogin';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const MainStack = createStackNavigator();
// const AuthStack = createStackNavigator();

// function App() {
//   const [userIsSignedIn, setUserIsSignedIn] = useState(false);

//   return (
//     <NavigationContainer>
//       {userIsSignedIn ? (
//         <MainStack.Navigator>
//           <MainStack.Screen
//             name="Tabs"
//             component={Tabs}
//             options={{
//               headerShown: true,
//               headerTitle: 'Pubg Legends',
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 46,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
//           <MainStack.Screen
//             name="Wallet"
//             component={WalletScreen}
//             options={{
//               headerShown: true,
//               headerTitle: 'Pubg Legends',
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 47,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
//         </MainStack.Navigator>
//       ) : (
//         <AuthStack.Navigator initialRouteName="SignIn">
//           <AuthStack.Screen
//             name="SignIn"
//             component={SignInScreen}
//             options={{
//               headerShown: false,
//             }}
//           />
//           <AuthStack.Screen
//             name="SignUp"
//             component={SignUpScreen}
//             options={{
//               headerShown: true,
//               headerTitle: 'Create Account',
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 46,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
//           <AuthStack.Screen
//             name="Tabs"
//             component={Tabs}
//             options={{
//               headerShown: true,
//               headerTitle: 'Pubg Legends',
//               headerTitleAlign: 'center',
//               headerStyle: {
//                 backgroundColor: '#ff0000',
//                 height: 46,
//               },
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 25,
//                 color: '#fff',
//               },
//             }}
//           />
//         </AuthStack.Navigator>
//       )}
//     </NavigationContainer>
//   );
// }

// export default App;






















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

