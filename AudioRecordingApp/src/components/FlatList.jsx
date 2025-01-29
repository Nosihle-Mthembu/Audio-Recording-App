import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

const FlatListComponent = ({ data, renderItem, keyExtractor }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default FlatListComponent;
