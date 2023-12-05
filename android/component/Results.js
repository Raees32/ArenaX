import React from 'react';
import { View, Text, StyleSheet, FlatList,SafeAreaView } from 'react-native';

const data = [
    {
        id: '1',
        Winner: 'Pubg id 1',
        MatchNo: 'Mo - 01',
        Date: '20/06/2023',
        Map: 'Erangel',
        Prize: 2500,
    },
    {
        id: '2',
        Winner: 'Pubg id 2',
        MatchNo: 'Mo - 02',
        Date: '22/06/2023',
        Map: 'Erangel',
        Prize: 3000,
    },
    {
        id: '3',
        Winner: 'Pubg id 3',
        MatchNo: 'Mo - 03',
        Date: '07/06/2023',
        Map: 'Erangel',
        Prize: 3500,
    },
    {
        id: '4',
        Winner: 'Pubg id 4',
        MatchNo: 'Mo - 04',
        Date: '10/06/2023',
        Map: 'Erangel',
        Prize: 4000,
    },
    // Add more data items as needed
];

const Results = () => {
    const renderItem = ({ item }) => (
        <View style={styles.tournamentContainer}>
            <Text style={styles.label}>Winner: {item.Winner}</Text>
            <View style={styles.row}>
                <View style={[styles.column, styles.borderRight]}>
                    <Text style={styles.label}>Match No:</Text>
                    <Text style={styles.value}>{item.MatchNo}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.label}>Date:</Text>
                    <Text style={styles.value}>{item.Date}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={[styles.column, styles.borderRight]}>
                    <Text style={styles.label}>Map:</Text>
                    <Text style={styles.value}>{item.Map}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.label}>Prize:</Text>
                    <Text style={styles.value}>{item.Prize}</Text>
                </View>
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

const styles = StyleSheet.create({
    tournamentContainer: {
        marginVertical: 13,
        margin: 25,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor:'#000000'
    
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 10,
        
    },
    column: {
        flex: 1,
        marginHorizontal: 5,
        padding: 12,
        color:'#fff'
    // backgroundColor:''
    },
    label: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        padding: 6,
        color:'#fff',
       
        backgroundColor:'#ff0000',
        textAlign:'center',
borderRadius:17,
      
        
    },
    value: {
        fontSize: 16,
        color: 'black',
        color:'#fff',
        textAlign:'center'
    
    },
    borderRight: {
        borderRightWidth: 1,
        borderColor: '#000',
        

        
    },

    
});

export default Results;











