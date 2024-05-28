import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Animated, Image, Alert } from 'react-native';
import axios from 'axios'; 
import Video from 'react-native-video';
const Chess = () => {
    const [playerStats, setPlayerStats] = useState(null);
    const [playerProfile, setPlayerProfile] = useState(null);
    const [chessData, setChessData] = useState([]);
    const fadeAnim = useRef(new Animated.Value(2)).current;
    const [opponentProfile, setOpponentProfile] = useState() // Initialize opponentProfile state
    const [opponentProfileText, setOpponentProfileText] = useState(''); // Initialize opponentProfileText state

    useEffect(() => {
        fetchPlayerProfile();
        fetchPlayerStats();
        fetchOpponentData();
    }, []);

    const fetchPlayerProfile = async () => {
        try {
            const response = await axios.get('https://api.chess.com/pub/player/RaeesAhmed1');
            setPlayerProfile(response.data);
        } catch (error) {
            console.error('Error fetching player profile:', error);
            Alert.alert('Error', 'Failed to fetch player profile');
        }
    };

    const fetchPlayerStats = async () => {
        try {
            const response = await axios.get('https://api.chess.com/pub/player/RaeesAhmed1/stats');
            setPlayerStats(response.data);
        } catch (error) {
            console.error('Error fetching player stats:', error);
            Alert.alert('Error', 'Failed to fetch player stats');
        }
    };
    const fetchOpponentData = async () => {
        try {
            const response = await axios.get('https://api.chess.com/pub/player/Jackpawn47'); // Change the username to the opponent's username
            setOpponentProfile(response.data);
            // Fetch opponent's stats if needed
            // const opponentStatsResponse = await axios.get(`https://api.chess.com/pub/player/${opponentUsername}/stats`);
            // setOpponentStats(opponentStatsResponse.data);
        } catch (error) {
            console.error('Error fetching opponent data:', error);
            Alert.alert('Error', 'Failed to fetch opponent data');
        }
    };

  
    useEffect(() => {
        Animated.stagger(300, [
            ...chessData.map(() =>
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
    }, [chessData]);

    const renderItem = ({ item }) => (
        <Animated.View style={[styles.tournamentContainer, { opacity: fadeAnim }]}>
            <Text style={styles.label}>Winner: {item.Winner}</Text>
            <View style={styles.row}>
                <View style={[styles.column, styles.borderRight]}>
                    <Text style={styles.label}>Match</Text>
                    <Text style={styles.value}>{item.Match}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.label}>Date</Text>
                    <Text style={styles.value}>{item.Date}</Text>
                </View>
            </View>
            {/* Add more fields as needed */}
        </Animated.View>
    );

    return (
        <SafeAreaView style={styles.container}>
             <Video
        source={require('./video/ches1.mp4')}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        repeat={true}
        muted
      />
            <FlatList
                data={chessData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
               
            />
            {playerProfile && (
                <View style={styles.profileContainer}>
                    <Image source={{ uri: playerProfile.avatar }} style={styles.avatar} />
                    <Text style={styles.profileText}>Username: {playerProfile.username}</Text>
                    <Text style={styles.profileText}>Name: {playerProfile.name}</Text>
                    <Text style={styles.profileText}>Followers: {playerProfile.followers}</Text>
                    <Text style={styles.profileText}>Country: {playerProfile.country}</Text>
                    <Text style={styles.profileText}>Last Online: {new Date(playerProfile.last_online * 1000).toLocaleString()}</Text>
                    <Text style={styles.profileText}>Joined: {new Date(playerProfile.joined * 1000).toLocaleString()}</Text>
                    <Text style={styles.profileText}>League: {playerProfile.league}</Text>
                </View>
            )}
            {playerStats && (
                <View style={styles.statsContainer}>
                    <Text style={styles.statsTitle}>Player Statistics</Text>
                    <Text style={styles.statsText}>{`Rapid Rating: ${playerStats.chess_rapid.last.rating}`}</Text>
                    <Text style={styles.statsText}>{`Rapid Games Won: ${playerStats.chess_rapid.record.win}`}</Text>
                    <Text style={styles.statsText}>{`Rapid Games Lost: ${playerStats.chess_rapid.record.loss}`}</Text>
                    <Text style={styles.statsText}>{`Rapid Games Drawn: ${playerStats.chess_rapid.record.draw}`}</Text>
                    <Text style={styles.statsText}>{`FIDE Rating: ${playerStats.fide}`}</Text>
                    <Text style={styles.statsText}>{`Highest Tactics Rating: ${playerStats.tactics.highest.rating}`}</Text>
                    <Text style={styles.statsText}>{`Lowest Tactics Rating: ${playerStats.tactics.lowest.rating}`}</Text>
                </View>
            )}
            {opponentProfile && (
    <View style={styles.opponentProfileContainer}>
        <Image source={{ uri: opponentProfile.avatar }} style={styles.avatar} />
        <Text style={styles.opponentProfileText}>Username: {opponentProfile.username}</Text>
       
        <Text style={styles.profileText}>Joined: {new Date(playerProfile.joined * 1000).toLocaleString()}</Text>
                    <Text style={styles.profileText}>League: {playerProfile.league}</Text>
        {/* Render more opponent details if needed */}
    </View>
)}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        bottom:10
       
    },
    tournamentContainer: {
        marginVertical: 13,
        marginHorizontal: 30,
        borderWidth: 2,
        borderColor: '#ff0000',
        padding: 15,
        borderRadius: 30,
  
        backgroundColor: '#000000',
      
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 7,
        paddingHorizontal: 6,
      
    },
    column: {
        flex: 1,
        marginHorizontal: 7,
        padding: 10,
      
    },
    label: {
        fontSize: 19,
        color: 'white',
        fontWeight: 'bold',
        padding: 6,
        backgroundColor: '#ff0000',
        textAlign: 'center',
        borderRadius: 10,
      
    },
    value: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
      
    },
    profileContainer: {
        alignItems: 'center',
        top:10
   
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileText: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5,
    },
    statsContainer: {
        marginTop: 30,
        paddingHorizontal: 20,
        bottom:20,
        left: 90
    },
    statsTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        right:20
    },
    statsText: {
        fontSize: 16,
        color: 'white',
        marginBottom: 2,
    },
    opponentProfileContainer:{
        bottom: 100,
        left: 100
        
    },
    opponentProfileText:{
        fontSize: 17,
        fontWeight:'bold'
    }
    
});

export default Chess;