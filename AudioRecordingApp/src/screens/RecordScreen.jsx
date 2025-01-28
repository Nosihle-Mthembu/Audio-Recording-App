import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { requestAudioPermission } from '../utils/permissions';

const audioRecorderPlayer = new AudioRecorderPlayer();

const RecordScreen = ({ navigation }) => {
  const [recording, setRecording] = useState(false);
  const [recordedFile, setRecordedFile] = useState('');

  const startRecording = async () => {
    const hasPermission = await requestAudioPermission();
    if (!hasPermission) return alert('Permission Denied');

    setRecording(true);
    const result = await audioRecorderPlayer.startRecorder();
    setRecordedFile(result);
  };

  const stopRecording = async () => {
    setRecording(false);
    await audioRecorderPlayer.stopRecorder();
    // Add the recording to the list
    console.log('Saved recording:', recordedFile);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>{recording ? 'Recording...' : 'Press to Record'}</Text>
      <Button 
        title={recording ? 'Stop Recording' : 'Start Recording'} 
        onPress={recording ? stopRecording : startRecording} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default RecordScreen;
