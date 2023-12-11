import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
    // You would typically send a request to your server to create a new user
    // You can use a library like axios to make API requests
    navigation.navigate('Tabs');
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.undertitle}>Please Fill The Input Below Here</Text>
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
        placeholder="Number"
        style={styles.input}
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Login</Text>
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
   
    backgroundColor: '#000000',
    
  },
  title: {
    fontSize: 39,
    marginRight: 90,
    marginTop:130,
    color:'#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginVertical: 9,
    fontFamily: 'sans-serif',

  },
  undertitle:{
    marginBottom: 60,
    marginRight:90,
    fontSize: 18,
    color:'#fff'
  },


  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ffff',
    borderRadius: 23,
    paddingHorizontal: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#ffff'
  
    
  },
  button: {
    backgroundColor: '#ff0000', // Change the button color here
    width: '44%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27,
    marginVertical:27,
    marginBottom:50,
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
    marginBottom: 120,
    
  },
  linkText: {
    color: '#ff0000',
    fontSize: 22,
  },

  
  
});

export default SignUpScreen;



