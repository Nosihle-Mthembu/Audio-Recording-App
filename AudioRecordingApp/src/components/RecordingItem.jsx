import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RecordingItem = ({ recording, onDelete }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{recording.title}</Text>
    <Text style={styles.date}>{recording.date}</Text>
    <Button title="Play" onPress={() => console.log('Play', recording.id)} />
    <Button title="Delete" onPress={() => onDelete(recording.id)} color="red" />
  </View>
);

const styles = StyleSheet.create({
  item: { padding: 10, marginVertical: 5, backgroundColor: '#f9f9f9', borderRadius: 5 },
  title: { fontSize: 16, fontWeight: 'bold' },
  date: { fontSize: 12, color: 'gray' },
});

export default RecordingItem;
