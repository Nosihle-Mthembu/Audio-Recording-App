import React, { useState, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import SafeAreaViewComponent from './src/components/SafeAreaView';
import Container from './src/components/Container';
import Content from './src/components/Content';
import ViewComponent from './src/components/View';
import TouchableOpacityComponent from './src/components/TouchableOpacity';
import TextComponent from './src/components/Text';
import ButtonComponent from './src/components/Button';
import ScrollViewComponent from './src/components/ScrollView';
import FlatListComponent from './src/components/FlatList';
import TextInputComponent from './src/components/TextInput';

const App = () => {
  const [recordings, setRecordings] = useState([]);
  const [recording, setRecording] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [audioPath, setAudioPath] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const audioRecorderPlayer = new AudioRecorderPlayer();

  const startRecording = async () => {
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    );
    if (permission === PermissionsAndroid.RESULTS.GRANTED) {
      const audioPath = await audioRecorderPlayer.startRecorder();
      setAudioPath(audioPath);
      setRecording(true);
      const date = new Date();
      setDate(date.toLocaleDateString());
      setTime(date.toLocaleTimeString());
    }
  };

  const stopRecording = async () => {
    const audioPath = await audioRecorderPlayer.stopRecorder();
    setAudioPath(audioPath);
    setRecording(false);
    saveRecording();
  };

  const playRecording = async () => {
    await audioRecorderPlayer.startPlayer();
    setPlaying(true);
  };

  const stopPlayback = async () => {
    await audioRecorderPlayer.stopPlayer();
    setPlaying(false);
  };

  const deleteRecording = async () => {
    await audioRecorderPlayer.deleteRecording();
    loadRecordings();
  };

  const saveRecording = async () => {
    const recording = {
      audioPath,
      date,
      time,
    };
    setRecordings([...recordings, recording]);
  };

  const loadRecordings = async () => {
    // Load recordings from storage
  };

  useEffect(() => {
    loadRecordings();
  }, []);

  return (
    <SafeAreaViewComponent>
      <Container>
        <Content>
          <ViewComponent>
            <TextComponent>Audio Recorder</TextComponent>
          </ViewComponent>
          <ScrollViewComponent>
            <FlatListComponent
              data={recordings}
              renderItem={({ item }) => (
                <ViewComponent>
                  <TextComponent>{item.date}</TextComponent>
                  <TextComponent>{item.time}</TextComponent>
                  <TouchableOpacityComponent onPress={playRecording}>
                    <TextComponent>Play</TextComponent>
                  </TouchableOpacityComponent>
                  <TouchableOpacityComponent onPress={deleteRecording}>
                    <TextComponent>Delete</TextComponent>
                  </TouchableOpacityComponent>
                </ViewComponent>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollViewComponent>
          <ViewComponent>
            <ButtonComponent title="Start Recording" onPress={startRecording} />
            <ButtonComponent title="Stop Recording" onPress={stopRecording} />
          </ViewComponent>
          <TextInputComponent
            placeholder="Enter recording title"
            value={audioPath}
            onChangeText={(text) => setAudioPath(text)}
          />
        </Content>
      </Container>
    </SafeAreaViewComponent>
  );
};

export default App;
