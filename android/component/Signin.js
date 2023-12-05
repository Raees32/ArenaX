import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement your sign-in logic here
    // For this example, navigate to the "Home" tab instead of "Home" screen
   
    navigation.navigate('Tabs');
  };

  const handleGoogleSignIn = () =>{

  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../component/logo1.jpg')} // Replace with the path to your logo image
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.undertitle}>Please Sign in to Continues.</Text>
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
      <Text style={styles.Ortxt}>OR</Text>
      <TouchableOpacity style={styles.goglButton} onPress={handleGoogleSignIn}>
        <View style={styles.goglButtonContent}>
          <Image
            source={require('./Images/gogl.png')} // Replace with the path to your Google logo image
            style={styles.goglLogo}
          />
          <Text style={styles.goglButtonText}>Sign in with Google</Text>
        </View>
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
    marginBottom: 13,
    fontWeight: 'bold',
    marginTop: 17,
    fontFamily:'sans-serif'
   
  },
  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 17,
    backgroundColor: '#fff',
    color: '#000000',
   
  },
  button: {
    backgroundColor: '#ff0000',
    width: '44%',
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27,
    marginTop: 17,
    marginBottom: 20,
   
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
  },
  

loginText: {
    color: '#ffff',
    fontSize: 18,
   
  },
   logo: {
    width: 250, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    marginTop:68 // Add space between the logo and the title
  },
  goglButton: {
    alignItems: 'center',
    marginTop: 19,
   // Adjust the space between "Login" button and "Sign in with Google" button
  },
  goglButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
     // Border color
    borderWidth: 2, // Border width
    borderRadius: 30,
    padding: 11,
    marginBottom:100,
    backgroundColor:'#dcdcdc',
    
   
  },
  goglLogo: {
    width: 27, // Adjust the width as needed
    height: 28, // Adjust the height as needed
    marginRight: 10, // Adjust the space between the Google logo and text
  },
  goglButtonText: {
    color: '#ff0000',
    fontSize: 16,
    fontWeight:'bold' // Adjust the font size as needed
  },
  Ortxt:{
    color:'#fff',
    fontSize: 19,
    fontWeight:'bold'
  }
});


export default SignInScreen;
















