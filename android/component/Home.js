import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList,SafeAreaView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const data = [
    {
        id: '1',
        imageSource: require('./Images/solo.jpeg'),
        matchNo: 'Mo - 01',
        time: '20/06/2023',
        type: 'Solo',
        winPrize: '2500',
        enterFee: '50',
        totalPlayers: '100',
    },
    {
        id: '2',
        imageSource: require('./Images/multi.jpg'),
        matchNo: 'Mo - 04',
        time: '30/06/2023',
        type: 'MultiPlayer',
        winPrize: '3000',
        enterFee: '100',
        totalPlayers: '100',
    },
    {
        id: '3',
        imageSource: require('./Images/squad.jpg'),
        matchNo: 'Mo - 05',
        time: '4/06/2023',
        type: 'Squad',
        winPrize: '3500',
        enterFee: '150',
        totalPlayers: '100',
    },
    {
        id: '4',
        imageSource: require('./Images/team.jpg'),
        matchNo: 'Mo - 02',
        time: '21/06/2023',
        type: 'Multi',
        winPrize: '4000',
        enterFee: '200',
        totalPlayers: '100',
    },
    // Add more data items as needed
];

const Home = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <View style={styles.tournamentContainer}>
            <Image style={styles.img} source={item.imageSource} resizeMode='cover' />
            <View style={styles.infoContainer}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Match No:</Text>
                        <Text style={styles.label}>Time:</Text>
                        <Text style={styles.label}>Type:</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.value}>{item.matchNo}</Text>
                        <Text style={styles.value}>{item.time}</Text>
                        <Text style={styles.value}>{item.type}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Win Prize:</Text>
                        <Text style={styles.label}>Enter Fee:</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.value}>{item.winPrize}</Text>
                        <Text style={styles.value}>{item.enterFee}</Text>
                    </View>
                </View>
                <View style={styles.centered}>
                    <Text style={styles.label}>Total Players: {item.totalPlayers}</Text>
                </View>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        // Handle Join button click
                        navigation.navigate('Payment', { tournament: item });
                    }}
                >
                    <Text style={styles.buttonText}>Join Match</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        // Handle Participants button click
                    }}
                >
                    <Text style={styles.buttonText}>Get Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
        </SafeAreaView>
    );
};

const Stack = createStackNavigator();


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
       
    },
    tournamentContainer: {
     backgroundColor: '#000000',
    },
    img: {
        width: 360,
        height: 240,
       borderWidth: 2,
        borderColor:'#fff',
      margin: 22,
      marginBottom: 2,
      borderRadius: 25,

       
        
    },
    infoContainer: {
        marginTop:7,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       paddingHorizontal: 15,
    },
    column: {
        flex: 1,
        marginHorizontal: 45,
        
    },
    centered: {
        alignItems: 'center',
        marginTop: 15,
        marginRight: 19,
        color:'#fff'
      
    },
    button: {
        backgroundColor: 'red',
        width: '40%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 13,
        
       
    },
    buttonText: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 19,
       
    },
    label: {
        fontSize: 18,
        color:'#fff',
        fontWeight: 'bold',
       
       


    },
    value: {
        fontSize: 18,
        color: '#ffff',
        paddingTop: 1,
        
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 25,
       
       
    },
});

export default Home;

