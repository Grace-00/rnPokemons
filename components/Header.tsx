import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Pokemons</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#E74C3C',
  },
  headerText: {
    marginLeft: 15,
    color: '#fff',
    fontSize: 25,
  },
});
