import { Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

export const requestAudioPermission = async () => {
  const permission = 
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.RECORD_AUDIO
      : PERMISSIONS.IOS.MICROPHONE;
  
  const result = await request(permission);
  return result === RESULTS.GRANTED;
};

export const requestStoragePermission = async () => {
  const permission = 
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
      : PERMISSIONS.IOS.MEDIA_LIBRARY;

  const result = await request(permission);
  return result === RESULTS.GRANTED;
};
