import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import QuizSection from './src/components/QuizSection';
import Footer from './src/components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <View style={styles.main}>
        <QuizSection />
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
});

export default App;
