import React from 'react';
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Video from 'react-native-video';
const Start = () => {
  const { width, height } = useWindowDimensions(); // Get screen dimensions

  return (
    <View style={styles.container}>
      <View style={[styles.videoContainer, { width: width, height: height }]}>
        <Video
          source={require('./video/h2.mp4')} // Change this path to your video file
          style={styles.video}
          resizeMode="cover"
          muted
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default Start;