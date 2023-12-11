import React from 'react';
import { View, Text,ScrollView, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Policy = ({ navigation }) => {
  
 // This function should be called on a button press or any other event
  
  return (
    <ScrollView>
      <View style={styles.container}>
        
<Text style={styles.afmain}>PUBG Tournament Policy</Text>

        <Text style={styles.h1}>Registration and Payment</Text>

        <Text>
          To participate in a PUBG tournament on our platform, users must first sign in and choose the tournament they want to participate in.
        </Text>
        <Text>
          Users must then pay the tournament entry fee using EasyPaisa or JazzCash.
        </Text>
        <Text>
          Once a user has paid the entry fee, they will be enrolled in the tournament.
        </Text>

        <Text style={styles.h1}>Gameplay</Text>
        <Text>
          All PUBG tournaments on our platform are cross-platform, meaning that players from console and PC can play together.
        </Text>
        <Text>
          The tournament format will be announced in advance.
        </Text>
        <Text>
          Players must join the tournament lobby at the scheduled start time.
        </Text>
        <Text>
          Players must follow all in-game rules and regulations.
        </Text>
        <Text>
          Players who are caught cheating or abusing the game mechanics will be disqualified from the tournament.
        </Text>

        <Text style={styles.h1}>Results and Payment</Text>
        <Text>
          The tournament results will be announced after the tournament has ended.
        </Text>
        <Text>
          The top 3 players will receive prize money, which will be credited to their wallet on the platform.
        </Text>
        <Text>
          To withdraw their prize money, players must provide their PUBG ID and payment number.
        </Text>
        <Text style={styles.bold}>
          We will process all prize money withdrawals within 24 hours.
        </Text>

        <Text style={styles.h1}>Profile Section</Text>
        <Text>
          Each user on our platform has a profile section where they can view their match history, tournament history, and current winnings.
        </Text>

        <Text style={styles.h1}>Wallet</Text>
        <Text >
          Users can withdraw their winnings from their wallet to their EasyPaisa or JazzCash account.
        </Text>

        <Text style={styles.h1}>Policy</Text>
        <Text>
          We have a zero tolerance policy for cheating and abusive behavior. Any player caught cheating or abusing the game mechanics will be permanently banned from the platform.
        </Text>
        <Text>
          We reserve the right to modify this policy at any time.
        </Text>

        <Text style={styles.h1}>Important Note:</Text>
        <Text style={styles.bold}>
          We will process all prize money withdrawals within 24 hours.
        </Text>
        <Text style={styles.bold}>
          We have a zero tolerance policy for cheating and abusive behavior.
        </Text>
       
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  main: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  afmain: {
    fontSize: 21,
    marginBottom: 10,
    textAlign:'center',
    fontWeight:'bold',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Policy;