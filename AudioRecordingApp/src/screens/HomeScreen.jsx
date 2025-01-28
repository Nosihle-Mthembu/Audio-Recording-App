import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import RecordingItem from '../components/RecordingItem';

const HomeScreen = ({ navigation }) => {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    // Fetch stored recordings on component
    // Placeholder for loading recordings from storage
    setRecordings([
      { id: '1', title: 'Voice Note 1', date: '2025-01-01' },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Button 
        title="New Recording" 
        onPress={() => navigation.navigate('Record')} 
      />
      <FlatList
        data={recordings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecordingItem 
            recording={item} 
            onDelete={(id) => 
              setRecordings((prev) => prev.filter((rec) => rec.id !== id))
            } 
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default HomeScreen;
