import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextComponent = ({ children }) => {
  return (
    <Text style={styles.text}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default TextComponent;
