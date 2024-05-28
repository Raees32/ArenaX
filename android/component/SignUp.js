import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,  Alert } from 'react-native';
import axios from 'axios';
import Video from 'react-native-video';
const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('https://tournament-backend-api.azurewebsites.net/signup', {
        username,
        email,
        phone,
        password
      });

      if (response.status === 201) {
        // Successful sign-up, navigate to SignIn instead of Tabs
        navigation.navigate('SignIn');
      } else {
        throw new Error('Failed to sign up');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      Alert.alert('Error', 'Failed to sign up: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
       <Video
       source={require('./video/h4.mp4')} // Change this path to your video file
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        repeat
        muted
      />
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.undertitle}>Please Fill The Input Below Here</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#fff"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Number"
        placeholderTextColor="#fff"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('SignIn')}
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
   
    
  },
  title: {
    fontSize: 39,
    marginRight: 60,
    marginTop:120,
    color:'#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 7,
   fontFamily: 'sans-serif',
    bottom:20,
    left: 20

  },
  undertitle:{
    marginBottom: 60,
    marginRight:60,
    fontSize: 17,
    color:'#fff',
    left: 20
    
  },


  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
   borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',

    color: '#ffff',
    margin:5
  
    
  },
  button: {
    backgroundColor: '#ff0000', // Change the button color here
    width: '44%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27,
    marginVertical:27,
    marginBottom:40,
    top: 10
    // Change the border radius here
  },
  buttonText: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 28,
    
  
  },
  loginText: {
    marginTop: 16,
    color: '#fff',
    fontSize: 19,
    paddingTop:5,
    marginBottom: 110,
    top:38
    
  },
  linkText: {
    color: '#fff000',
    fontSize: 26,
    fontWeight:'bold'
  },

  
  
});

export default SignUpScreen;



