import React, { useState , useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, Alert, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import Video from 'react-native-video';
import Sound from 'react-native-sound';


const backgroundSound = new Sound('song.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Failed to load the sound', error);
    return;
  }
  // Play the sound
  backgroundSound.setNumberOfLoops(-1); // -1 for infinite loop
});

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

    
  useEffect(() => {
    // Start playing the background sound when the component mounts
    backgroundSound.play();

    // Stop and release the background sound when the component unmounts
    return () => {
      backgroundSound.stop();
      backgroundSound.release();
    };
  }, []);




  const handleSignIn = async () => {
    try {
      const response = await axios.post('https://tournament-backend-api.azurewebsites.net/signin', {
        username,
        password
      });
      console.log('Sign-in response:', response.data);
      if (response.status === 200) {
        const data = response.data;
        if (data && data.user) {
          if (data.user.isAdmin) {
            navigation.navigate('Admin');
          } else {
            navigation.navigate('Tabs');
          }
          
        } else {
          throw new Error('Invalid response from server');
        }
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Sign-in error:', error.message);
      Alert.alert('Error', error.message);
    }
    finally {
      // Stop the background sound when sign-in is attempted (whether successful or not)
      backgroundSound.stop();
    }
  };

  const handleSignup = async () => {
    navigation.navigate('SignUp');
  };

  const handleAdminLogin = () => {
    navigation.navigate('Admin');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
       <Video
        source={require('./video/h4.mp4')} // Change this path to your video file
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        repeat
        muted
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
     

        <View style={styles.container}>
         
          <Text style={styles.title}>Login</Text>
          <Text style={styles.undertitle}>Please Sign in to Continue.</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#fff"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Image source={require('../component/logo1.jpg')} style={styles.logoadmin} />
          <TouchableOpacity style={styles.buttons} onPress={handleAdminLogin}>
            <Text style={styles.buttonTextss}>Admin</Text>
          </TouchableOpacity>
          <Icon name="arrow-down" style={styles.icon} />
          <View style={styles.signupContainer}>
            <Text style={styles.new}>Don't have an account?</Text>
            <TouchableOpacity style={styles.arrowContainer} onPress={handleSignup}>
              <Text style={styles.buttonTexts}>Sign Up</Text>
            </TouchableOpacity>
          </View>
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
    
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  undertitle: {
    color: '#fff',
    marginBottom: 30,
    marginRight: 5,
    fontSize: 23,
    fontWeight:'bold',
    
  
    
  },
  title: {
    fontSize: 55,
    color: '#ffff',
    textShadowColor: 'rgba(0, 0, 0, 0.115)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginRight: 190,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
   bottom:40,
    left:40,
    marginTop:30
  },
  input: {
    width: '82%',
    height: 44,
    borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',

    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 14,
    color: 'white',
    margin: 10,
    top: 35,
    backgroundColor: '#000000'
  },
  button: {
    backgroundColor: '#ff0000',
    width: '45%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27,
    top: 65,
    marginBottom: 8,
  },
  buttons:{
   left: 98,
  color:'#fff',
  fontSize: 15,
  },
  buttonTextss:{
fontSize: 15,
color:'#fff',
left: 36,
top:126

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
    width: 250,
    height: 200,
    top: 40,
  },
  new: {
    color: '#ffff',
    fontSize: 18,
    right:23,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   top:103
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTexts: {
  fontWeight: 'bold',
    fontSize: 22,
    marginRight: 10,
    color: '#ff0',
    right:23,
  },
  icon: {
    color: '#ff0000',
    fontSize: 40,
    top: 40
    
  },
  logoadmin:{
    width: 55,
    height: 55,
    top: 205,
   left: 136,
   borderRadius:50
  },
  
 
 
});

export default SignInScreen;










// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform ,Alert} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import axios from 'axios'; // Import Axios here
// import Icon from 'react-native-vector-icons/Entypo';

// const SignInScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async () => {
//     try {
//       const response = await axios.post('http://172.27.48.1:3000/signin', {
//         email,
//         password
//       });
  
//       if (response.status === 200) {
//         const data = response.data;
//         if (data && data.user) {
//           navigation.navigate('Tabs'); // Navigate to Tabs after successful sign-in
//         } else {
//           throw new Error('Invalid response from server');
//         }
//       } else {
//         throw new Error('Invalid credentials');
//       }
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };
//   const handleSignup = async () => {
//     navigation.navigate('SignUp');
//   };

//   return (
//     <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.container}>
//           <Image source={require('../component/logo1.jpg')} style={styles.logo} />
//           <Text style={styles.title}>Login</Text>
//           <Text style={styles.undertitle}>Please Sign in to Continue.</Text>

//           <TextInput
//             style={styles.input}
//             placeholder="Email"

//             value={email}
//             onChangeText={(text) => setEmail(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"

//             value={password}
//             onChangeText={(text) => setPassword(text)}
//             secureTextEntry
//           />
//           <TouchableOpacity style={styles.button} onPress={handleSignIn}>
//             <Text style={styles.buttonText}>Login</Text>
//           </TouchableOpacity>
//           <Icon name="arrow-down" style={styles.icon} />
//           {/* Parent view for "Don't have an account?" text and "Sign Up" button */}
//           <View style={styles.signupContainer}>

//             <Text style={styles.new}>Don't have an account?</Text>
//             <TouchableOpacity style={styles.arrowContainer} onPress={handleSignup}>

//               <Text style={styles.buttonTexts}>Sign Up</Text>

//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
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
//     marginRight: 110,
//     fontSize: 18,
//     top: 40

//   },
//   title: {
//     fontSize: 43,
//     color: '#ffff',
//     textShadowColor: 'rgba(0, 0, 0, 0.115)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//     marginRight: 210,
//     top: 20,
//     fontWeight: 'bold',
//     marginTop: 10,
//     fontFamily: 'sans-serif',
//   },
//   input: {
//     width: '80%',
//     height: 42,
//     borderWidth: 1,
//     borderColor: '#fff',
//     borderRadius: 20,
//     paddingHorizontal: 12,
//     marginBottom: 14,
//     color: 'white',
//     margin: 10,
//     top: 35,
//     backgroundColor: 'black'

//   },
//   button: {
//     backgroundColor: '#ff0000',
//     width: '45%',
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 27,
//     top: 55,
//     marginBottom: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 25,



//   },
//   loginText: {
//     color: '#ffff',
//     fontSize: 18,
//   },
//   logo: {
//     width: 250,
//     height: 200,
//     top: 40,
//   },
//   new: {
//     color: '#ffff',
//     fontSize: 18,
//   },
//   signupContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 120,
//   },
//   arrowContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   buttonTexts: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 25,
//     marginRight: 10,
//   },
//   icon: {
//     color: '#ffffff',
//     fontSize: 30,
//     top: 70,
//   },
// });

// export default SignInScreen;