import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footertext}>Made by Muhammad Sarim Khan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#227093',
    padding: 13,
    borderTopColor: '#333',
    // borderTopWidth: 3,
  },
  footertext: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});
export default Footer;
