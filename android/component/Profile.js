import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, TextInput, Modal } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import React, { useState } from 'react';
import Video from 'react-native-video';
const Profile = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [avatarSource, setAvatarSource] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleDeleteAccount = async () => {
    try {
      // Send a request to your backend to delete the account
      const response = await axios.post('https://tournament-backend-api.azurewebsites.net/delete-account', {
        username,
        password,
      });

      // Check if the account was successfully deleted
      if (response.data.success) {
        // Optionally, you can perform additional actions after successful deletion
        // For example, navigate to a different screen or show a success message
        console.log("Account deleted successfully");
        // Navigate to a different screen or perform any other action
      } else {
        // Handle the case where the deletion was unsuccessful
        console.log("Failed to delete account");
        // Optionally, you can show an error message to the user
      }
    } catch (error) {
      // Handle any errors that occur during the deletion process
    
      // Optionally, you can show an error message to the user
    }

    // Hide the confirmation modal
    toggleModal();
  };
  const navigateToWallet = () => {
    navigation.navigate('Wallet'); // Navigate to the Wallet screen
  };

  const handleJoinMatchRule = () => {
    Alert.alert(
      'Join Match Rule',
      'Please read the instructions carefully before joining the tournament.',
      [
        {
          text: 'OK',
          onPress: () => {
            // Handle the OK button press if needed
          },
        },
      ]
    );
  };

  const selectImage = () => {
  
  }

  return (
    <View style={styles.container}>
      <Video
        source={require('./video/new.mp4')}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        repeat={true}
        muted
      />
      <View style={styles.flexRow}>
        <View style={styles.circularContainer}>
          {avatarSource ? (
            <Image source={avatarSource}  />
          ) : (
            <Ionicons name="person" style={styles.circularIcon} />
          )}
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Pubg I:</Text>
            <Text style={styles.profileValue}>Ahsan</Text>
          </View>
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Won Tournament:</Text>
            <Text style={styles.profileValue}>10</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.editButtons} onPress={selectImage}>
        <Text style={styles.editText}>Edit Image</Text>
        <Ionicons name="pencil" style={styles.editIcon} />
      </TouchableOpacity>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Match Join</Text>
          <Text style={styles.buttonTextNumber}>10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Wallet</Text>
          <Text style={styles.buttonTextNumber}>500</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={navigateToWallet}>
          <Text style={styles.withdrawText}>Withdraw</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.verticalTouchables}>
        <TouchableOpacity style={styles.touchableItem} onPress={handleJoinMatchRule}>
          <Text style={styles.inputtxt}>Join Match Rule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableItem}>
          <Text style={styles.inputtxt}>Refer and Earn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableItem}>
          <Text style={styles.inputtxt}>Room ID and Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchableItem}
          onPress={() => navigation.navigate('Policy')} // Navigate to the Policy screen
        >
          <Text style={styles.inputtxt}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableItem} onPress={handleDeleteAccount}>
          <Text style={styles.inputtxt}>Delete Account</Text>
        </TouchableOpacity>
      </View>

      {/* Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          toggleModal();
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Delete Account</Text>
            <Text style={styles.modalText}>Enter your username and password to confirm deletion:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Username"
              value={username}
              placeholderTextColor={'#000'}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Password"
              value={password}
              placeholderTextColor={'#000'}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={handleDeleteAccount}>
                <Text style={styles.modalButtonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circularContainer: {
    width: 100,
    height: 100,
    borderRadius: 100, // Make it circular by setting borderRadius to half of the width/height
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
    left: 5
  },
  circularImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    // Ensure the image is also circular
  },
  circularIcon: {
    fontSize: 70,
    color: 'gray',
  },
  editButtons: {
   right:119
  },
 
 
  profileInfo: {
    justifyContent: 'center',
    marginEnd: 15,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
   
  },
  profileLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#fff'
  },
  profileValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    right: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    backgroundColor: '#ff0'
  },
  buttonStyle: {
    alignItems: 'center',
    margin: 45,
    marginBottom: 10,
    marginTop: 10
  },
  buttonText: {
    fontSize: 16,
    color: '#ff0000',
    fontWeight: 'bold'
  },
  buttonTextNumber: {
    fontSize: 20,
    color: '#ff0000',
    fontWeight: 'bold',
  },
  withdrawText: {
    fontSize: 17,
    color: '#ffff',
    borderWidth: 1,
    borderColor: '#ff0000',
    backgroundColor: 'red',
    marginTop: 3,
    padding: 7,
    fontWeight: 'bold',
    borderRadius: 10,
  },
  verticalTouchables: {
    marginTop: 23,
    alignItems: 'center',
    marginBottom: 10,
  },
  touchableItem: {
    padding: 11,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: 330,
    marginVertical: 7,
    backgroundColor: '#ff0000',
    borderRadius: 10,
    color: '#fff',
    marginBottom: 13,
  },
  inputtxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding:20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#000',
    left:35,
    top:10
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    marginBottom:10,
    paddingHorizontal:10,
    color:'#000',
    width:240,
    height:35,
    bottom:20,
    left:10

  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
    right:8
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  editIcon:{
    left: 22
  }
});

export default Profile;