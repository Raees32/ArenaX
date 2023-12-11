import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { GoogleSignin,  } from '@react-native-community/google-signin';
import { ScrollView } from 'react-native-gesture-handler';

// GoogleSignin.configure({
//   webClientId: '284529224689-9i85led4i1kjoj0b945qdl7eractbecp.apps.googleusercontent.com',
// });

const SignInScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => 
   {
  //   try {
  //     const emailSignInResponse = await fetch('http://localhost:3000/signIn', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         password,
  //       }),
  //     });

  //     const emailSignInData = await emailSignInResponse.json();

  //     if (emailSignInData.success) {
  //       // Assuming you have a setUserIsSignedIn function
  //       setUserIsSignedIn(true);
  //       navigation.navigate('Tabs');
  //       return;
  //     }

  //        // Your Google Sign-In logic here
  //        await GoogleSignin.hasPlayServices();
  //        const userInfo = await GoogleSignin.signIn();
  //        const googleSignInResponse = await fetch('http://localhost:3000/googleSignIn', {
  //          method: 'POST',
  //          headers: {
  //            'Content-Type': 'application/json',
  //          },
  //          body: JSON.stringify({
  //            idToken: userInfo.idToken,
  //          }),
  //        });
   
  //        const googleSignInData = await googleSignInResponse.json();
   
  //        if (googleSignInData.success) {
  //          setUserIsSignedIn(true); // Ensure setUserIsSignedIn is defined
           navigation.navigate('Tabs');
  //        } else {
  //          console.error(googleSignInData.error);
  //        }
  //      } catch (error) {
  //        console.error(error);
  //      }
     };
     const handleSignup  = async () => 
     {



      navigation.navigate('SignUp');
     };



     const handleGoogleSignIn = async () => {
      // try {
      //   await GoogleSignin.hasPlayServices();
      //   const userInfo = await GoogleSignin.signIn(); // Add an empty object {} here
      //   const response = await fetch('http://localhost:3000/googleSignIn', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       idToken: userInfo.idToken,
      //     }),
      //   });
    
      //   const responseData = await response.json();
    
      //   if (responseData.success) {
      //     // Assuming you have a setUserIsSignedIn function
      //     setUserIsSignedIn(true);
      //     navigation.navigate('Tabs');
      //   } else {
      //     console.error(responseData.error);
      //   }
      // } catch (error) {
      //   console.error(error);
      // }
    };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>                                                                                                                     
          <Image source={require('../component/logo1.jpg')} style={styles.logo} />
          <Text style={styles.title}>Login</Text>
          <Text style={styles.undertitle}>Please Sign in to Continue.</Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
         <TouchableOpacity style={styles.button} onPress={handleSignIn}>
  <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

{/* Add some space between the buttons */}


<TouchableOpacity style={styles.button} onPress={handleSignup}>
  <Text style={styles.buttonText}>Sign Up</Text>
</TouchableOpacity>
          <Text style={styles.Ortxt}>OR</Text>
          <TouchableOpacity style={styles.googleSignInButton} onPress={handleGoogleSignIn}>
            <Image source={require('./Images/gogl.png')} style={styles.googleSignInImage} />
            <Text style={styles.googleSignInText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  undertitle: {
    color: '#ffff',
    marginBottom: 20,
    marginRight: 124,
    fontSize: 18,
   
  },
  title: {
    fontSize: 43,
   color: '#ffff',
    textShadowColor: 'rgba(0, 0, 0, 0.115)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginRight: 230,
    marginBottom: 7,
    fontWeight: 'bold',
    marginTop: 5,
    fontFamily:'sans-serif'
   
  },
  input: {
    width: '80%',
    height: 42,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 14,
    backgroundColor: '#fff',
    color: '#000000',
   
  },
  button: {
    backgroundColor: '#ff0000',
    width: '45%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27,
    marginTop: 9,
    marginBottom: 8,
   
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  

loginText: {
    color: '#ffff',
    fontSize: 18,
   
  },
   logo: {
    width: 250, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    marginTop:4, // Add space between the logo and the title
  },
  goglButton: {
    alignItems: 'center',
    
   // Adjust the space between "Login" button and "Sign in with Google" button
  },
 Ortxt:{
    color:'#fff',
    fontSize: 16,
    fontWeight:'bold',
    marginBottom:5,
  },
  googleSignInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    width: '90%',
    height: 45,
    alignSelf: 'center',
    backgroundColor: '#ff0', // Customize the background color
    borderRadius: 27,
  },

  googleSignInImage: {
    width: 25, // Adjust the width of the Google image as needed
    height: 20, // Adjust the height of the Google image as needed
    marginRight: 10,
  },

  googleSignInText: {
    color: '#ff0000', // Customize the text color
    fontWeight: 'bold',
    fontSize: 18,
  },
});


export default SignInScreen;



















// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import axios from 'axios';

// const SignInScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = () => {
//     // Implement your sign-in logic here
//     // For this example, navigate to the "Home" tab instead of "Home" screen
   
//     navigation.navigate('Tabs');
//   };

//   const handleGoogleSignIn = () =>{

//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../component/logo1.jpg')} // Replace with the path to your logo image
//         style={styles.logo}
//       />
//       <Text style={styles.title}>Login</Text>
//       <Text style={styles.undertitle}>Please Sign in to Continues.</Text>
//       <TextInput
//         placeholder="Email"
//         style={styles.input}
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         placeholder="Password"
//         style={styles.input}
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSignIn}>
//         <Text style={styles.buttonText}>Login</Text>
       
//       </TouchableOpacity>
//       <Text style={styles.Ortxt}>OR</Text>
//       <TouchableOpacity style={styles.goglButton} onPress={handleGoogleSignIn}>
//         <View style={styles.goglButtonContent}>
//           <Image
//             source={require('./Images/gogl.png')} // Replace with the path to your Google logo image
//             style={styles.goglLogo}
//           />
//           <Text style={styles.goglButtonText}>Sign in with Google</Text>
//         </View>
//       </TouchableOpacity>
     
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000000',
//   },
//   undertitle: {
//     color: '#ffff',
//     marginBottom: 20,
//     marginRight: 124,
//     fontSize: 18,
   
//   },
//   title: {
//     fontSize: 43,
//    color: '#ffff',
//     textShadowColor: 'rgba(0, 0, 0, 0.115)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//     marginRight: 230,
//     marginBottom: 13,
//     fontWeight: 'bold',
//     marginTop: 17,
//     fontFamily:'sans-serif'
   
//   },
//   input: {
//     width: '80%',
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#fff',
//     borderRadius: 20,
//     paddingHorizontal: 12,
//     marginBottom: 17,
//     backgroundColor: '#fff',
//     color: '#000000',
   
//   },
//   button: {
//     backgroundColor: '#ff0000',
//     width: '44%',
//     height: 57,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 27,
//     marginTop: 17,
//     marginBottom: 20,
   
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 28,
//   },
  

// loginText: {
//     color: '#ffff',
//     fontSize: 18,
   
//   },
//    logo: {
//     width: 250, // Adjust the width as needed
//     height: 200, // Adjust the height as needed
//     marginTop:68 // Add space between the logo and the title
//   },
//   goglButton: {
//     alignItems: 'center',
//     marginTop: 19,
//    // Adjust the space between "Login" button and "Sign in with Google" button
//   },
//   goglButtonContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//      // Border color
//     borderWidth: 2, // Border width
//     borderRadius: 30,
//     padding: 11,
//     marginBottom:100,
//     backgroundColor:'#dcdcdc',
    
   
//   },
//   goglLogo: {
//     width: 27, // Adjust the width as needed
//     height: 28, // Adjust the height as needed
//     marginRight: 10, // Adjust the space between the Google logo and text
//   },
//   goglButtonText: {
//     color: '#ff0000',
//     fontSize: 16,
//     fontWeight:'bold' // Adjust the font size as needed
//   },
//   Ortxt:{
//     color:'#fff',
//     fontSize: 19,
//     fontWeight:'bold'
//   }
// });
// export default SignInScreen;
