import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const AdminSignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminSignIn = async () => {
    try {
      const response = await axios.post('https://tournament-backend-api.azurewebsites.net/admin/signin', {
        email,
        password
      });

      if (response.status === 200) {
        // Admin authentication successful
        navigation.navigate('DataUploadScreen'); // Navigate to Admin screen
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleAdminSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 40,
    color: '#ffff',
    marginBottom: 20,
    bottom:40,
    right:27
  },
  input: {
    width: '80%',
    height: 42,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 14,
    color:'#fff',
    margin:20
  },
  button: {
    backgroundColor: 'red',
    width: '45%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27,
   top: 30

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
   
  },
});

export default AdminSignInScreen;