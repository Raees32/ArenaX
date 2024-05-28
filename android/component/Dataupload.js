
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const DataUploadScreen = () => {
  const [ImageURL, setImageURL] = useState('');
  const [TournamentName, setTournamentName] = useState('');
  const [MatchDetails, setMatchDetails] = useState('');
  const [Fee, setFee] = useState('');
  const [Prize, setPrize] = useState('');
  const [ Totalplayer, setTotalplayer] = useState('');
  const [Roomid, setRoomid] = useState('');
  
  const handleUpload = async () => {
    try {
      const response = await axios.post('http://192.168.0.130:3000/admin/upload', {
        ImageURL,
        TournamentName,
        MatchDetails,
        Fee,
        Prize,
        Totalplayer,
        Roomid // Step 4: Include RoomId in the request
      });

      if (response.status === 201) {
        Alert.alert('Success', 'Data uploaded successfully');
      } else {
        throw new Error('Failed to upload data');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
    
  };
  
  const handleDelete = async () => {
    try {
      const response = await axios.post('https://tournament-backend-api.azurewebsites.net/admin/delete', {
        TournamentName: TournamentName // Use the TournamentName as the identifier
      });
      if (response.status === 200) {
        Alert.alert('Success', 'Tournament deleted successfully');
        // Reset input fields after deletion
        setImageURL('');
        setTournamentName('');
        setMatchDetails('');
        setFee('');
        setPrize('');
        setTotalplayer('');
        setRoomid('');
      } else {
        throw new Error('Failed to delete tournament');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Upload</Text>
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        placeholderTextColor="#fff"
        value={ImageURL}
        onChangeText={(text) => setImageURL(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Tournament Name"
        placeholderTextColor="#fff"
        value={TournamentName}
        onChangeText={(text) => setTournamentName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        placeholderTextColor="#fff"
        value={MatchDetails}
        onChangeText={(text) => setMatchDetails(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fee"
        placeholderTextColor="#fff"
        value={Fee}
        onChangeText={(text) => setFee(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Prize"
        placeholderTextColor="#fff"
        value={Prize}
        onChangeText={(text) => setPrize(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Total Players"
        placeholderTextColor="#fff"
        value={ Totalplayer}
        onChangeText={(text) => setTotalplayer(text)}
        keyboardType="numeric"
      />
      <TextInput // Step 3: Add TextInput for Room ID
        style={styles.input}
        placeholder="Room ID"
        value={Roomid}
        placeholderTextColor="#fff"
        onChangeText={(text) => setRoomid(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleUpload}>
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete Tournament</Text>
      </TouchableOpacity>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color:"#fff"
  },
  button: {
    backgroundColor: 'red',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
   
    fontWeight: 'bold',
    color:"#fff"
  },
});

export default DataUploadScreen;