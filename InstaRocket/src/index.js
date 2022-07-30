import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Bem vindo Gabriel</Text>
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    welcome: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      color: 'black'
    },

  })



