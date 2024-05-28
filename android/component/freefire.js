import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Animated } from 'react-native';
import Video from 'react-native-video';
const FreeFireData = [
    {
        id: '1',
        Winner: 'Ahsan',
        Match: 'Mo - 01',
        Date: '20/06/2023',
        Map: 'Erangel',
        Prize: 2500,
    },
    {
        id: '2',
        Winner: 'Ali',
        Match: 'Mo - 02',
        Date: '22/06/2023',
        Map: 'Erangel',
        Prize: 3000,
    },
    // Add more PUBG data items as needed
];

const Freefire = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.stagger(300, [
            ...FreeFireData.map(() =>
                Animated.timing(
                    fadeAnim,
                    {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    }
                )
            )
        ]).start();
    }, [fadeAnim]);

    const renderItem = ({ item }) => (
        <Animated.View style={[styles.tournamentContainer, { opacity: fadeAnim }]}>
            <Text style={styles.label}>Winner: {item.Winner}</Text>
            <View style={styles.gridContainer}>
                <View style={styles.gridItem}>
                    <Text style={styles.label}>Match</Text>
                    <Text style={styles.value}>{item.Match}</Text>
                </View>
                <View style={styles.gridItem}>
                    <Text style={styles.label}>Date</Text>
                    <Text style={styles.value}>{item.Date}</Text>
                </View>
                <View style={styles.gridItem}>
                    <Text style={styles.label}>Map</Text>
                    <Text style={styles.value}>{item.Map}</Text>
                </View>
                <View style={styles.gridItem}>
                    <Text style={styles.label}>Prize</Text>
                    <Text style={styles.value}>{item.Prize}</Text>
                </View>
            </View>
        </Animated.View>
    );

    return (
        <SafeAreaView style={styles.container}>
                 
 <Video
        source={require('./video/h2.mp4')}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        repeat={true}
        muted
      />
            <FlatList
                data={FreeFireData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                
            />
            {/* Player profile and stats can be added here */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
   
    tournamentContainer: {
        marginVertical: 13,
        marginHorizontal: 30,
        borderWidth: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 15,
        borderRadius: 30,
        marginBottom: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        top: 20
    },
    gridContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    gridItem: {
        flex: 1,
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        padding: 6,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        textAlign: 'center',
        borderRadius: 10,
    },
    value: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
});

export default Freefire;