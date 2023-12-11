import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const Profile = ({navigation}) => {
 
  const navigateToWallet = () => {
    navigation.navigate('Wallet'); // Navigate to the Wallet screen
  };
 

  const [avatarSource, setAvatarSource] = useState(null);
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
    const options = {
      title: 'Select Profile Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setAvatarSource(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <View style={styles.circularContainer}>
          {avatarSource ? (
            <Image source={avatarSource} style={styles.circularImage} />
          ) : (
            <Ionicons name="person" style={styles.circularIcon} />
          )}
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Pubg Id:</Text>
            <Text style={styles.profileValue}>Ahsan</Text>
          </View>
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Won Tournament:</Text>
            <Text style={styles.profileValue}>10</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.editButton} onPress={selectImage}>
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
        <TouchableOpacity style={styles.buttonStyle} onPress={navigateToWallet} >
          <Text style={styles.withdrawText}>Withdraw</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.verticalTouchables}>
        <TouchableOpacity style={styles.touchableItem} onPress={handleJoinMatchRule} >
          <Text  style = {styles.inputtxt}>Join Match Rule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableItem}>
          <Text style = {styles.inputtxt}>Refer and Earn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableItem}>
          <Text style = {styles.inputtxt}>Room ID and Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
  style={styles.touchableItem}
  onPress={() => navigation.navigate('Policy')} // Navigate to the Policy screen
>
  <Text style={styles.inputtxt}>Privacy Policy</Text>
</TouchableOpacity>
      </View>
   
  </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
    backgroundColor:'#000000'
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
    marginRight: 50,
  },
  circularImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100, // Ensure the image is also circular
  },
  circularIcon: {
    fontSize: 75,
    color: 'gray',
  },
  editButton: {
    position: 'absolute',
    borderRadius: 25,
    width: 33,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    fontSize: 22,
    color: '#ff0000',
    paddingStart: 15,
  },
  editText: {
    fontSize: 14,
    color: '#ff0000',
    marginVertical: 2,
    marginTop: 8,
    fontWeight:'bold'
  },
  editButton: {
    alignItems: 'flex-start',
    marginRight: 250,
  },
  profileInfo: {
    justifyContent: 'center',
    marginEnd: 15,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  profileLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    color:'#fff'
  },
  profileValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  
    backgroundColor:'#ff0'
  },
  buttonStyle: {
    alignItems: 'center',
    margin: 45,
    marginBottom:10,
    marginTop: 10
  },
  buttonText: {
    fontSize: 16,
    color: '#ff0000',
    fontWeight:'bold'
  },
  buttonTextNumber: {
    fontSize: 20,
    color: '#ff0000',
    fontWeight:'bold',
  },
  withdrawText: {
    fontSize: 17,
    color: '#ffff',
    borderWidth: 1,
    borderColor:'#ff0000',
    backgroundColor:'red',
    marginTop:3,
    padding:7,
    fontWeight:'bold',
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
    width: 395,
    marginVertical: 7,
    backgroundColor:'#ff0000',
    borderRadius: 10,
    color:'#fff',
    marginBottom: 13,
  
  },
  inputtxt:{
    color: '#fff',
    fontWeight:'bold',
    fontSize: 16,
  }
});

export default Profile;













