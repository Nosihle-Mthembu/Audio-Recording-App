import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const ScrollViewComponent = ({ children }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default ScrollViewComponent;
