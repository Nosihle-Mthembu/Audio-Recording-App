import React from 'react';
import { View, StyleSheet } from 'react-native';

const Content = ({ children }) => {
  return (
    <View style={styles.content}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
});

export default Content;
