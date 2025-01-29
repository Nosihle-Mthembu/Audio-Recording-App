import React from 'react';
import { View, StyleSheet } from 'react-native';

const ViewComponent = ({ children }) => {
  return (
    <View style={styles.view}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
});

export default ViewComponent;
