import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, ScrollView,TouchableOpacity  } from 'react-native';
import { RadioButton } from 'react-native-paper';

const WalletScreen = ({navigation}) => {
  const [Pubgid, setPubgId] = useState('');
  const [number, setNumber] = useState('');
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('easypaisa');
  const handleSubmit = () => {
    // Implement your sign-in logic here
    navigation.goBack();
    // For this example, navigate to the "Home" tab instead of "Home" screen
    
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding" // Adjust behavior according to your layout needs
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image
          source={require('./Images/draw.png')}
          style={styles.logo}
        />
        <Text style={styles.undertitle}>Please fill the requirements properly</Text>
        
        <View style={styles.radioContainer}>
          <RadioButton
            value="easypaisa"
            status={selectedPaymentOption === 'easypaisa' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedPaymentOption('easypaisa')}
          />
          <Text style={styles.radioLabel}>Easy Pasa</Text>

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
          value={Pubgid}
          onChangeText={(text) => setPubgId(text)}
        />
        <TextInput
          placeholder="Your Number"
          style={styles.input}
          value={number}
          onChangeText={(text) => setNumber(text)}
    keyboardType='number-pad'
        />
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 180,
    borderRadius: 60,
 marginBottom: 70,
 top: 35
  },
  undertitle: {
    color: '#ffff',
    marginBottom: 29,
    marginRight: 10,
    fontSize: 18,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 31,
  },
  radioLabel: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#000000',
    width: '89%',
    marginLeft:18,
  },
  button: {
    backgroundColor: '#ff0000',
    width: '48%',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27,
    marginTop: 10,
    
   
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },

});

export default WalletScreen;