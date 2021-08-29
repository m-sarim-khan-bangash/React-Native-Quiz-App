import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headingtext}>Quiz App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2980b9',
    padding: 12,
    borderBottomColor: '#192a56',
    borderBottomWidth: 5,
  },
  headingtext: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 28,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
});
export default Header;
