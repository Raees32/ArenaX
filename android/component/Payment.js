import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform,Image } from 'react-native';

const Payment = () => {
    const [pubg, setPubg] = useState('');
    const [payment, setPayment] = useState('');

    const handleJoinTournament = () => {
        // Add logic to handle joining the tournament here
    };
    const handleEasyPaisaClick = () => {
        // Add logic for EasyPaisa image click here
    };

    const handleJazzCashClick = () => {
        // Add logic for JazzCash image click here
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.heading}>Fill the Details Properly</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Your PUBG ID"
                        value={pubg}
                        onChangeText={(text) => setPubg(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Payment Number"
                        value={payment}
                        keyboardType='number-pad'
                        onChangeText={(text) => setPayment(text)}
                    />
                </View>
                <View style={styles.noteContainer}>
                    <Text style={styles.note}>Note:</Text>
                    <Text style={styles.noteText}>
                        Please ensure that you enter your correct PUBG ID and payment number carefully before joining the tournament. Your accuracy is crucial. Thank you!
                    </Text>
                    </View>
                    <View style={styles.paymentImagesContainer}>        
 <TouchableOpacity  onPress={handleEasyPaisaClick}>
    <Image
        source={require('./Images/easy.png')}
        style={[styles.paymentImage, { opacity: 0.9 }] }
    />
</TouchableOpacity>
<TouchableOpacity onPress={handleJazzCashClick}>
    <Image
        source={require('./Images/jazcash.jpg')}
        style={[styles.paymentImage, { opacity: 0.9 }]}
    />
</TouchableOpacity>
</View>

                <View style={styles.paymentMethod}>
                    <Text style={styles.paymentMethodText}>Payment Method</Text>
                    <Text style={styles.note}>Jazz Cash & Eassy Pasa</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.joinButton} onPress={handleJoinTournament}>
                        <Text style={styles.buttonText}>Join Tournament</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    inputContainer: {
        marginTop: 20,
        top:7,
    },
    input: {
        width: 300,
        height: 40,
        borderBottomWidth: 2,
        borderColor: '#ff0000',
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#FFF',
        color: '#000000',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffff',
        marginBottom: 10,
    },
    noteContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    note: {
        fontWeight: 'bold',
        color: '#ffff',
        fontSize: 19,
    },
    noteText: {
        color: '#ffff',
        fontSize: 15,
        textAlign: 'center',
    },
    paymentMethod: {
        marginTop: 20,
        alignItems: 'center',
    },
    paymentMethodText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#ffff',
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30,
    },
    joinButton: {
        backgroundColor: 'red',
        width: 135,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 22,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    paymentImagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 10,
    },
    paymentImage: {
        width: 80,
        height: 70,
        borderRadius: 20,
        marginHorizontal: 20, // Add a border radius
    },
});

export default Payment;
