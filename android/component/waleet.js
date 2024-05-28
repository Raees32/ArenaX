import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView,  TouchableOpacity, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import axios from 'axios'; // Import axios for making HTTP requests
import Video from 'react-native-video';


const WalletScreen = ({ navigation }) => {
  const [pubgId, setPubgId] = useState('');
  const [number, setNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('easypaisa');

  const handleSubmit = async () => {
    try {
      // Send wallet submission data to the backend
      const response = await axios.post('https://tournament-backend-api.azurewebsites.net/submit-wallet', {
        pubgId,
        number,
        selectedPaymentOption,
        amount,
      });

      // Check if submission was successful
      if (response.data.success) {
        Alert.alert('Success', 'You will receive payment within 24 hours.');
        // Reset form fields after successful submission
        setPubgId('');
        setNumber('');
        setAmount('');
        setSelectedPaymentOption('easypaisa');
        navigation.goBack(); // Navigate back to the previous screen
      } else {
        Alert.alert('Error', 'An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting wallet:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('./video/new.mp4')}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        repeat
        muted
      />
      <View style={styles.overlay}>
        <Text style={styles.undertitle}>Please fill the requirements properly</Text>

        <View style={styles.radioContainer}>
          <RadioButton
            value="easypaisa"
            status={selectedPaymentOption === 'easypaisa' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedPaymentOption('easypaisa')}
          />
          <Text style={styles.radioLabel}>Easy Paisa</Text>

          <RadioButton
            value="jazzcash"
            status={selectedPaymentOption === 'jazzcash' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedPaymentOption('jazzcash')}
          />
          <Text style={styles.radioLabel}>Jazz Cash</Text>
        </View>

        <TextInput
          placeholder="Your Pubg ID"
          style={styles.input}
          placeholderTextColor="#000000"
          value={pubgId}
          onChangeText={setPubgId}
        />
        <TextInput
          placeholder="Your Number"
          style={styles.input}
          value={number}
          placeholderTextColor="#000000"
          onChangeText={setNumber}
          keyboardType='number-pad'
        />
        <TextInput
          placeholder="Enter Amount"
          style={styles.input}
          value={amount}
          placeholderTextColor="#000000"
          onChangeText={setAmount}
          keyboardType='number-pad'
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  undertitle: {
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 18,
    bottom: 30
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  radioLabel: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 8,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 25,
    backgroundColor: '#ffffff',
    color: '#000000',
    width: '75%',
  },
  button: {
    backgroundColor: '#ff0000',
    width: '45%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27,
    marginBottom: 10,
    top: 30
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default WalletScreen;