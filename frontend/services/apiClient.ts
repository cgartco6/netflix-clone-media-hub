import axios from 'axios';
import { Platform } from 'react-native';

// For TV / Mobile emulator, use your computer's local IP
const getBaseUrl = () => {
  if (Platform.OS === 'web') return 'http://localhost:3000';
  return 'http://192.168.1.100:3000'; // change to your backend IP
};

const apiClient = axios.create({
  baseURL: getBaseUrl(),
  timeout: 10000,
});

export default apiClient;
