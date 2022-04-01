import React, { Component } from "react";
import { View, Text, StyleSheet,Header } from "react-native";
import AppHeader from '../components/AppHeader';

export default class RideHistoryScreen extends Component {
  render() {
    return (
      
        
      <View style={styles.container}>
        
        <Text style={styles.text}>Ride History Screen</Text>
      </View>
       
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  },
  text: {
    color: "#4C5D70",
    fontSize: 30
  }
});
