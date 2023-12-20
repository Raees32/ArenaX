import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AdHome = ({ navigation }) => {
  const handleAdminPress = () => {
    // Navigate to the 'Admin' stack
    navigation.navigate('Upload');
  };

  return (
    <View style={styles.container}>
      {/* Black background */}
      <View style={styles.background} />

      {/* Red button in the center */}
      <TouchableOpacity style={styles.adminButton} onPress={handleAdminPress}>
        <Text style={styles.buttonText}>Admin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  background: {
    backgroundColor: '#000000',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  adminButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default AdHome;