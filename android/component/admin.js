
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';



const AdminLogins = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    navigation.navigate('AdminSignIn'); // Navigate to AdminSignInScreen
  };

  const handleAdminLogin = async () => {
    try {
      const response = await axios.post('https://tournament-backend-api.azurewebsites.net/admin/register', {
        email,
        password
      });

      if (response.status === 201) {
        // Admin authentication successful
        navigation.navigate('Admin'); // Navigate to Admin screen
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#fff"
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleAdminLogin}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.new}>Already have an account?</Text>
      <TouchableOpacity style={styles.buttons} onPress={handleSignUp}>
        <Text style={styles.buttonTexts}>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 40,
    bottom: 45,
    right: 35
  },
  input: {
    width: '80%',
    height: 42,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 14,
    color: 'white',
    margin: 20,
    backgroundColor: 'black',
    bottom:20,
   
  },
  button: {
    backgroundColor: '#ff0000',
    width: '45%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27,
   top: 40
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonTexts:{
    fontWeight: 'bold',
    fontSize: 24,
    color: 'blue',
    top: 145,
    left: 120
  },
  new:{
    color: '#fff',
    top: 175,
    fontSize: 19,
  marginRight:50,
  
  }
});

export default AdminLogins;

















// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';



// const AdminLogins = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

 
//     const handleSignUp = () => {
//       navigation.navigate('AdminSignIn'); // Navigate to AdminSignUpScreen
   
//     }
//   const handleAdminLogin = async () => {
//     try {
//       const response = await axios.post('http://172.27.48.1:3000/admin/register', {
//         email,
//         password
//       });
  
//       if (response.status === 201) {
//         // Admin authentication successful
//         navigation.navigate('DataUploadScreen'); // Navigate to DataUploadScreen
//       } else {
//         throw new Error('Invalid credentials');
//       }
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Admin Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button} onPress={handleAdminLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.buttons} onPress={handleSignUp}>
//         <Text style={styles.buttonText}>SignUp</Text>
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
//   title: {
//     fontSize: 30,
//     color: '#ffffff',
//     marginBottom: 20,
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
//     backgroundColor: 'black',
//   },
//   button: {
//     backgroundColor: '#ff0000',
//     width: '45%',
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 27,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
// });

// export default AdminLogins;