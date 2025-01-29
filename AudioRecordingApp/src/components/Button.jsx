import React from 'react';
import { Button, StyleSheet } from 'react-native';

const ButtonComponent = ({ title, onPress }) => {
  return (
    <Button title={title} onPress={onPress} />
  );
};

export default ButtonComponent;
