import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const SafeAreaViewComponent = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default SafeAreaViewComponent;
