import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Video from 'react-native-video';

const AnimatedButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const Results = ({ navigation }) => {
  const blinkValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const blinkAnimation = Animated.sequence([
      Animated.timing(blinkValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(blinkValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);

    const blinkLoop = Animated.loop(blinkAnimation);

    blinkLoop.start();

    return () => {
      blinkLoop.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Video
        source={require('./video/result.mp4')}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        repeat={true}
        muted
      />
      <View style={styles.resultContainer}>
        <Animated.Text style={[styles.resultText, { opacity: blinkValue }]}>
          Result Announced..
        </Animated.Text>
      </View>
      <AnimatedButton
        title="PUBG Results"
        onPress={() => navigation.navigate('Pubg Result')}
      />
      <AnimatedButton
        title="FreeFire Results"
        onPress={() => navigation.navigate('FreeFire Result')}
      />
      <AnimatedButton
        title="Chess Results"
        onPress={() => navigation.navigate('Chess Result')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultContainer: {
    marginBottom: 20,
  },
  resultText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    bottom:80
  },
  buttonContainer: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // Transparent red background
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Results;

// // Frontend code to fetch PUBG results based on room ID
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
// import axios from 'axios';

// const Results = () => {
//     const [pubgResults, setPUBGResults] = useState([]);

//     useEffect(() => {
//         fetchPUBGResults();
//     }, []);

//     const fetchPUBGResults = async () => {
//         try {
//             const response = await axios.get('http://your-backend-url/api/pubg-results/your-room-id');
//             setPUBGResults(response.data);
//         } catch (error) {
//             console.error('Error fetching PUBG results:', error);
//         }
//     };

//     // Render PUBG results
//     return (
//         <SafeAreaView>
//             <FlatList
//                 data={pubgResults}
//                 renderItem={({ item }) => (
//                     <View style={styles.tournamentContainer}>
//                         <Text style={styles.label}>Winner: {item.Winner}</Text>
//                         {/* Render other PUBG result details */}
//                     </View>
//                 )}
//                 keyExtractor={(item) => item.id}
//             />
//         </SafeAreaView>
//     );
// };

// // Styles
// const styles = StyleSheet.create({
//     // Define your styles here
// });

// export default Results;
// Replace 'http://your-backend-url/api/pubg-results/your-room-id' with the actual URL of your backend API endpoint to fetch PUBG results, and replace 'your-room-id' with the actual room ID provided by the user.