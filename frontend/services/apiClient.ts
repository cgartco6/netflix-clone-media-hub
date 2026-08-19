import axios from 'axios';
import { Platform } from 'react-native';

// Change this to your deployed backend URL (Fly.io, Koyeb, etc.)
const BACKEND_URL = Platform.OS === 'web'
  ? process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000'
  : 'http://192.168.1.100:3000'; // replace with your actual IP

const apiClient = axios.create({
  baseURL: BACKEND_URL,
  timeout: 10000,
});

export default apiClient;
