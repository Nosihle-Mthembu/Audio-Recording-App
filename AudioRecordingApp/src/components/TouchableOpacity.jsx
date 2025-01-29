import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const TouchableOpacityComponent = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
});

export default TouchableOpacityComponent;
