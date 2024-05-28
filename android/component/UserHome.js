import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal,  TextInput, Alert } from 'react-native';
import axios from 'axios';
import { Linking } from 'react-native';
import Sound from 'react-native-sound';
import Video from 'react-native-video';
const Catch = ({ navigation }) => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [paymentMessage, setPaymentMessage] = useState('');
  const [backgroundSound, setBackgroundSound] = useState(null);
 
 
 

 
  useEffect(() => {
    // Initialize the background sound
   
    fetchTournaments();
    const sound = new Sound('song.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      setBackgroundSound(sound);
     
    sound.play(); // Play the sound
    });

    return () => {
      // Stop and release the sound when leaving the Catch screen
      if (backgroundSound) {
        backgroundSound.stop();
        backgroundSound.release();
      }
    };
  }, []);

  useEffect(() => {
    // Pause the background sound when the component loses focus
    const unsubscribe = navigation.addListener('blur', () => {
      if (backgroundSound) {
        backgroundSound.pause();
      }
    });

    // Resume playing the background sound when the component gains focus
    const resumeSound = navigation.addListener('focus', () => {
      if (backgroundSound) {
        backgroundSound.play();
      }
    });

    return () => {
      unsubscribe();
      resumeSound();
    };
  }, [backgroundSound, navigation]);


  

  const fetchTournaments = async () => {
    try {
      const response = await axios.get('https://tournament-backend-api.azurewebsites.net/admin/data');
      setTournaments(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tournaments:', error);
      Alert.alert('Error', 'Failed to fetch tournaments');
      setLoading(false);
    }
  };
  
 

  const handlePaymentConfirm = async () => {
    try {
      const paymentResponse = await axios.post('https://tournament-backend-api.azurewebsites.net/api/payment', {
        cardNum: cardNumber,
        expiryMon: expiryMonth,
        expiryYear: expiryYear,
      });

      if (paymentResponse.data.success) {
        setPaymentSuccess(true);
        setPaymentMessage('Rs 100 deducted from your account'); // Set payment message
        Alert.alert('Success', paymentResponse.data.message ,[{ text: 'OK', onPress: () => {} }]);
      } else {
        console.error('Payment failed:', paymentResponse.data.message);
        Alert.alert('Error', 'Payment failed');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      Alert.alert('Error', 'Error processing payment');
    }
  };

  const handleKeyPress = (item) => {
    setSelectedTournament(item);
    setShowModal(true);
    setPaymentSuccess(false); // Reset payment state when selecting a new tournament
    setPaymentMessage(''); // Reset payment message
  };
  
  const handleJoinNow = () => {
    if (selectedTournament && paymentSuccess) {
      if (selectedTournament.TournamentName.toLowerCase() === 'pubg') {
        Linking.openURL('market://details?id=com.tencent.ig');
      } else if (selectedTournament.TournamentName.toLowerCase() === 'freefire') {
        Linking.openURL('https://play.google.com/store/apps/details?id=com.dts.freefireth&hl=en');
      } else if (selectedTournament.TournamentName.toLowerCase() === 'chess') {
        Linking.openURL('https://www.chess.com/play/online');
        
      }
    }
    
  };
  

  return (
    <View style={styles.container}>
    <Video
        source={require('./video/h4.mp4')}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        repeat={true}
        muted
      />
      <FlatList
        data={tournaments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.ImageURL }} style={styles.image} />
            <Text style={styles.itemText}>{`Tournament Name: ${item.TournamentName}`}</Text>
            <Text style={styles.itemText}>{`Match Details: ${item.MatchDetails}`}</Text>
            <Text style={styles.itemText}>{`Fee: ${item.Fee}`}</Text>
            <Text style={styles.itemText}>{`Prize: ${item.Prize}`}</Text>
            <Text style={styles.itemText}>{`Totalplayer: ${item.Totalplayer}`}</Text>
            {selectedTournament?._id === item._id && paymentSuccess && (
              <Text style={styles.itemText}>{`Room ID: ${item.Roomid}`}</Text>
            )}
            <TouchableOpacity onPress={() => handleKeyPress(item)} style={styles.joinButton}>
              <Text style={[styles.buttonText, selectedTournament?._id === item._id ? styles.selectedButtonText : null]}>Payment</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleJoinNow}
                style={[
                  styles.joinButton,
                  selectedTournament?._id !== item._id || !paymentSuccess ? styles.disabledJoinButton : null,
                ]}
                disabled={selectedTournament?._id !== item._id || !paymentSuccess}
              >
                <Text style={styles.buttonText}>Join Match</Text>
              </TouchableOpacity>
              
   
            </View>
          </View>
        )}
        
      />

      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Payment Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              placeholderTextColor="#000000"
              onChangeText={setCardNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Expiry Month"
              placeholderTextColor="#000000"
              onChangeText={setExpiryMonth}
            />
            <TextInput
              style={styles.input}
              placeholder="Expiry Year"
              placeholderTextColor="#000000"
              onChangeText={setExpiryYear}
            />
            <TouchableOpacity
      onPress={handlePaymentConfirm}
      style={[ styles.confirmButton]} // Apply custom styles for Confirm Payment button
    >
      <Text style={styles.buttonText}>Confirm Payment</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => setShowModal(false)}
      style={[ styles.cancelButton]} // Apply custom styles for Cancel button
    >
      <Text style={styles.buttonText}>Cancel</Text>
    </TouchableOpacity>
            {paymentSuccess && <Text style={styles.paymentMessage}>{paymentMessage}</Text>}
          </View>

        </View>
      </Modal>

    
      
      
    </View>
  );
};
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  
  },
  itemContainer: {
    marginBottom: 13,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 9,
    marginVertical:4
  
    
    
  },
  image: {
    width: '100%',
    height: 160,
    marginBottom: 10,
    borderRadius: 10,
    backfaceVisibility:'visible',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  itemText: {
    fontSize: 17,
    marginBottom: 6,
    color: '#ffff',
    padding: 2,
  
    
  },
  joinButton: {
    backgroundColor: 'red',
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 7,
    marginTop: 15,
    alignSelf: 'flex-start',
left:4
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  
  disabledJoinButton: {
    backgroundColor: '#ccc', // Background color for disabled join button
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end', // Align the container to the right side
    bottom: 49,
    paddingHorizontal: 7,
    
     // Adjust the position of the container vertically
  },
  modalContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding:8
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 50,
    borderRadius: 15,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
    bottom:40
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 50,
    marginBottom: 15,
    color: '#333',
    bottom:30
  },
  paymentMessage: {
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
    fontSize:20
  },
 
  confirmButton: {
    backgroundColor: 'green',
    marginTop: 10,
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 7,
    alignItems: 'center',
    bottom:30, // Background color for the Confirm Payment button
  },
  cancelButton:{
    backgroundColor: '#ff0000',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 7,
    alignItems: 'center', 
    bottom:15
  },
  videoContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Catch;










// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal,  TextInput, Alert } from 'react-native';
// import axios from 'axios';
// import { Linking } from 'react-native';
// import Sound from 'react-native-sound';
// const Catch = ({ navigation }) => {
//   const [tournaments, setTournaments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryMonth, setExpiryMonth] = useState('');
//   const [expiryYear, setExpiryYear] = useState('');
//   const [selectedTournament, setSelectedTournament] = useState(null);
//   const [paymentMessage, setPaymentMessage] = useState('');
//   const [backgroundSound, setBackgroundSound] = useState(null);
//   const [playerData, setPlayerData] = useState(null);
//   const [games, setGames] = useState([]);
//   const username = 'chessplayer123'; // Replace with dynamic username if needed
//   useEffect(() => {
//     fetchPlayerData();
//     fetchPlayerGames();
// }, []);

 
//   useEffect(() => {
//     // Initialize the background sound
//     fetchTournaments();
//     const sound = new Sound('song.mp3', Sound.MAIN_BUNDLE, (error) => {
//       if (error) {
//         console.log('Failed to load the sound', error);
//         return;
//       }
//       setBackgroundSound(sound);
//       sound.play(); // Play the sound
//     });

//     return () => {
//       // Stop and release the sound when leaving the Catch screen
//       if (backgroundSound) {
//         backgroundSound.stop();
//         backgroundSound.release();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     // Pause the background sound when the component loses focus
//     const unsubscribe = navigation.addListener('blur', () => {
//       if (backgroundSound) {
//         backgroundSound.pause();
//       }
//     });

//     // Resume playing the background sound when the component gains focus
//     const resumeSound = navigation.addListener('focus', () => {
//       if (backgroundSound) {
//         backgroundSound.play();
//       }
//     });

//     return () => {
//       unsubscribe();
//       resumeSound();
//     };
//   }, [backgroundSound, navigation]);



//   const fetchTournaments = async () => {
//     try {
//       const response = await axios.get('http://192.168.0.130:3000/admin/data');
//       setTournaments(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching tournaments:', error);
//       Alert.alert('Error', 'Failed to fetch tournaments');
//       setLoading(false);
//     }
//   };
  

//   const handlePaymentConfirm = async () => {
//     try {
//       const paymentResponse = await axios.post('http://192.168.0.130:3000/api/payment', {
//         cardNum: cardNumber,
//         expiryMon: expiryMonth,
//         expiryYear: expiryYear,
//       });

//       if (paymentResponse.data.success) {
//         setPaymentSuccess(true);
//         setPaymentMessage('Rs 100 deducted from your account'); // Set payment message
//         Alert.alert('Success', paymentResponse.data.message ,[{ text: 'OK', onPress: () => {} }]);
//       } else {
//         console.error('Payment failed:', paymentResponse.data.message);
//         Alert.alert('Error', 'Payment failed');
//       }
//     } catch (error) {
//       console.error('Error processing payment:', error);
//       Alert.alert('Error', 'Error processing payment');
//     }
//   };

//   const handleKeyPress = (item) => {
//     setSelectedTournament(item);
//     setShowModal(true);
//     setPaymentSuccess(false); // Reset payment state when selecting a new tournament
//     setPaymentMessage(''); // Reset payment message
//   };
//   const handleJoinNow = () => {
//     if (selectedTournament && paymentSuccess) {
//       if (selectedTournament.TournamentName.toLowerCase() === 'pubg') {
//         Linking.openURL('market://details?id=com.tencent.ig');
//       } else if (selectedTournament.TournamentName.toLowerCase() === 'freefire') {
//         Linking.openURL('https://play.google.com/store/apps/details?id=com.dts.freefireth&hl=en');
//       } else if (selectedTournament.TournamentName.toLowerCase() === 'chess') {
//         Linking.openURL('https://www.chess.com/play/online');
//       }
//     }
//   };
  

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={tournaments}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Image source={{ uri: item.ImageURL }} style={styles.image} />
//             <Text style={styles.itemText}>{`Tournament Name: ${item.TournamentName}`}</Text>
//             <Text style={styles.itemText}>{`Match Details: ${item.MatchDetails}`}</Text>
//             <Text style={styles.itemText}>{`Fee: ${item.Fee}`}</Text>
//             <Text style={styles.itemText}>{`Prize: ${item.Prize}`}</Text>
//             <Text style={styles.itemText}>{`Totalplayer: ${item.Totalplayer}`}</Text>
//             {selectedTournament?._id === item._id && paymentSuccess && (
//               <Text style={styles.itemText}>{`Room ID: ${item.Roomid}`}</Text>
//             )}
//             <TouchableOpacity onPress={() => handleKeyPress(item)} style={styles.joinButton}>
//               <Text style={[styles.buttonText, selectedTournament?._id === item._id ? styles.selectedButtonText : null]}>Payment</Text>
//             </TouchableOpacity>
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={handleJoinNow}
//                 style={[
//                   styles.joinButton,
//                   selectedTournament?._id !== item._id || !paymentSuccess ? styles.disabledJoinButton : null,
//                 ]}
//                 disabled={selectedTournament?._id !== item._id || !paymentSuccess}
//               >
//                 <Text style={styles.buttonText}>Join Match</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />

//       <Modal
//         visible={showModal}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setShowModal(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Enter Payment Details</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Card Number"
//               placeholderTextColor="#000000"
//               onChangeText={setCardNumber}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Expiry Month"
//               placeholderTextColor="#000000"
//               onChangeText={setExpiryMonth}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Expiry Year"
//               placeholderTextColor="#000000"
//               onChangeText={setExpiryYear}
//             />
//             <TouchableOpacity
//       onPress={handlePaymentConfirm}
//       style={[ styles.confirmButton]} // Apply custom styles for Confirm Payment button
//     >
//       <Text style={styles.buttonText}>Confirm Payment</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       onPress={() => setShowModal(false)}
//       style={[ styles.cancelButton]} // Apply custom styles for Cancel button
//     >
//       <Text style={styles.buttonText}>Cancel</Text>
//     </TouchableOpacity>
//             {paymentSuccess && <Text style={styles.paymentMessage}>{paymentMessage}</Text>}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 13,
//     paddingTop: 10,
//     backgroundColor: 'black',
//   },
//   itemContainer: {
//     marginBottom: 13,
//     borderWidth: 2,
//     borderColor: '#000',
//     borderRadius: 15,
//     backgroundColor: 'black',
//     padding: 10,
    
    
//   },
//   image: {
//     width: '100%',
//     height: 160,
//     marginBottom: 10,
//     borderRadius: 10,
//   },
//   itemText: {
//     fontSize: 17,
//     marginBottom: 6,
//     color: '#ffff',
//     padding: 2,
  
    
//   },
//   joinButton: {
//     backgroundColor: 'red',
//     paddingVertical: 8,
//     paddingHorizontal: 18,
//     borderRadius: 7,
//     marginTop: 15,
//     alignSelf: 'flex-start',

//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16
//   },
  
//   disabledJoinButton: {
//     backgroundColor: '#ccc', // Background color for disabled join button
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignSelf: 'flex-end', // Align the container to the right side
//     bottom: 53,
//     paddingHorizontal: 10,
    
//      // Adjust the position of the container vertically
//   },
//   modalContainer: {
//     flex:1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding:8
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 50,
//     borderRadius: 15,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 21,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#000000',
//     bottom:40
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: '#000000',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 50,
//     marginBottom: 15,
//     color: '#333',
//     bottom:30
//   },
//   paymentMessage: {
//     marginTop: 10,
//     color: 'green',
//     fontWeight: 'bold',
//     fontSize:20
//   },
 
//   confirmButton: {
//     backgroundColor: 'green',
//     marginTop: 10,
//     paddingHorizontal: 6,
//     paddingVertical: 8,
//     borderRadius: 7,
//     alignItems: 'center',
//     bottom:30, // Background color for the Confirm Payment button
//   },
//   cancelButton:{
//     backgroundColor: '#ff0000',
//     marginTop: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     borderRadius: 7,
//     alignItems: 'center', 
//     bottom:15
//   }

// });

// export default Catch;





















// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal,  TextInput, Alert } from 'react-native';
// import axios from 'axios';
// import { Linking } from 'react-native';
// import Sound from 'react-native-sound';
// const Catch = ({ navigation }) => {
//   const [tournaments, setTournaments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryMonth, setExpiryMonth] = useState('');
//   const [expiryYear, setExpiryYear] = useState('');
//   const [selectedTournament, setSelectedTournament] = useState(null);
//   const [paymentMessage, setPaymentMessage] = useState('');
//   const [backgroundSound, setBackgroundSound] = useState(null);
 
//   useEffect(() => {
//     // Initialize the background sound
//     fetchTournaments();
//     const sound = new Sound('song.mp3', Sound.MAIN_BUNDLE, (error) => {
//       if (error) {
//         console.log('Failed to load the sound', error);
//         return;
//       }
//       setBackgroundSound(sound);
//       sound.play(); // Play the sound
//     });

//     return () => {
//       // Stop and release the sound when leaving the Catch screen
//       if (backgroundSound) {
//         backgroundSound.stop();
//         backgroundSound.release();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     // Pause the background sound when the component loses focus
//     const unsubscribe = navigation.addListener('blur', () => {
//       if (backgroundSound) {
//         backgroundSound.pause();
//       }
//     });

//     // Resume playing the background sound when the component gains focus
//     const resumeSound = navigation.addListener('focus', () => {
//       if (backgroundSound) {
//         backgroundSound.play();
//       }
//     });

//     return () => {
//       unsubscribe();
//       resumeSound();
//     };
//   }, [backgroundSound, navigation]);



//   const fetchTournaments = async () => {
//     try {
//       const response = await axios.get('http://192.168.0.130:3000/admin/data');
//       setTournaments(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching tournaments:', error);
//       Alert.alert('Error', 'Failed to fetch tournaments');
//       setLoading(false);
//     }
//   };
  

//   const handlePaymentConfirm = async () => {
//     try {
//       const paymentResponse = await axios.post('http://192.168.0.130:3000/api/payment', {
//         cardNum: cardNumber,
//         expiryMon: expiryMonth,
//         expiryYear: expiryYear,
//       });

//       if (paymentResponse.data.success) {
//         setPaymentSuccess(true);
//         setPaymentMessage('Rs 100 deducted from your account'); // Set payment message
//         Alert.alert('Success', paymentResponse.data.message ,[{ text: 'OK', onPress: () => {} }]);
//       } else {
//         console.error('Payment failed:', paymentResponse.data.message);
//         Alert.alert('Error', 'Payment failed');
//       }
//     } catch (error) {
//       console.error('Error processing payment:', error);
//       Alert.alert('Error', 'Error processing payment');
//     }
//   };

//   const handleKeyPress = (item) => {
//     setSelectedTournament(item);
//     setShowModal(true);
//     setPaymentSuccess(false); // Reset payment state when selecting a new tournament
//     setPaymentMessage(''); // Reset payment message
//   };

//   const handleJoinNow = () => {
//     if (selectedTournament && paymentSuccess) {
//       Linking.openURL('https://play.google.com/store/apps/details?id=com.dts.freefireth&hl=en');
//       // Linking.openURL('market://details?id=com.tencent.ig');
//     }
//   };
//   const handleJoinNows= () => {
//     if (selectedTournament && paymentSuccess) {
    
//       Linking.openURL('market://details?id=com.tencent.ig');
//     }
//   };


//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={tournaments}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Image source={{ uri: item.ImageURL }} style={styles.image} />
//             <Text style={styles.itemText}>{`Tournament Name: ${item.TournamentName}`}</Text>
//             <Text style={styles.itemText}>{`Match Details: ${item.MatchDetails}`}</Text>
//             <Text style={styles.itemText}>{`Fee: ${item.Fee}`}</Text>
//             <Text style={styles.itemText}>{`Prize: ${item.Prize}`}</Text>
//             {selectedTournament?._id === item._id && paymentSuccess && (
//               <Text style={styles.itemText}>{`Room ID: ${item.Roomid}`}</Text>
//             )}
//             <TouchableOpacity onPress={() => handleKeyPress(item)} style={styles.joinButton}>
//               <Text style={[styles.buttonText, selectedTournament?._id === item._id ? styles.selectedButtonText : null]}>Payment</Text>
//             </TouchableOpacity>
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={handleJoinNow}
//                 style={[
//                   styles.joinButton,
//                   selectedTournament?._id !== item._id || !paymentSuccess ? styles.disabledJoinButton : null,
//                 ]}
//                 disabled={selectedTournament?._id !== item._id || !paymentSuccess}
//               >
//                 <Text style={styles.buttonText}>Join Match</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />

//       <Modal
//         visible={showModal}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setShowModal(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Enter Payment Details</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Card Number"
//               placeholderTextColor="#000000"
//               onChangeText={setCardNumber}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Expiry Month"
//               placeholderTextColor="#000000"
//               onChangeText={setExpiryMonth}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Expiry Year"
//               placeholderTextColor="#000000"
//               onChangeText={setExpiryYear}
//             />
//             <TouchableOpacity
//       onPress={handlePaymentConfirm}
//       style={[ styles.confirmButton]} // Apply custom styles for Confirm Payment button
//     >
//       <Text style={styles.buttonText}>Confirm Payment</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       onPress={() => setShowModal(false)}
//       style={[ styles.cancelButton]} // Apply custom styles for Cancel button
//     >
//       <Text style={styles.buttonText}>Cancel</Text>
//     </TouchableOpacity>
//             {paymentSuccess && <Text style={styles.paymentMessage}>{paymentMessage}</Text>}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 13,
//     paddingTop: 10,
//     backgroundColor: 'black',
//   },
//   itemContainer: {
//     marginBottom: 13,
//     borderWidth: 2,
//     borderColor: '#000',
//     borderRadius: 15,
//     backgroundColor: 'black',
//     padding: 10,
    
    
//   },
//   image: {
//     width: '100%',
//     height: 160,
//     marginBottom: 10,
//     borderRadius: 10,
//   },
//   itemText: {
//     fontSize: 17,
//     marginBottom: 6,
//     color: '#ffff',
//     padding: 2,
  
    
//   },
//   joinButton: {
//     backgroundColor: 'red',
//     paddingVertical: 8,
//     paddingHorizontal: 18,
//     borderRadius: 7,
//     marginTop: 15,
//     alignSelf: 'flex-start',

//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16
//   },
  
//   disabledJoinButton: {
//     backgroundColor: '#ccc', // Background color for disabled join button
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignSelf: 'flex-end', // Align the container to the right side
//     bottom: 53,
//     paddingHorizontal: 10,
    
//      // Adjust the position of the container vertically
//   },
//   modalContainer: {
//     flex:1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding:8
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 50,
//     borderRadius: 15,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 21,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#000000',
//     bottom:40
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: '#000000',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 50,
//     marginBottom: 15,
//     color: '#333',
//     bottom:30
//   },
//   paymentMessage: {
//     marginTop: 10,
//     color: 'green',
//     fontWeight: 'bold',
//     fontSize:20
//   },
 
//   confirmButton: {
//     backgroundColor: 'green',
//     marginTop: 10,
//     paddingHorizontal: 6,
//     paddingVertical: 8,
//     borderRadius: 7,
//     alignItems: 'center',
//     bottom:30, // Background color for the Confirm Payment button
//   },
//   cancelButton:{
//     backgroundColor: '#ff0000',
//     marginTop: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     borderRadius: 7,
//     alignItems: 'center', 
//     bottom:15
//   }

// });

// export default Catch;
