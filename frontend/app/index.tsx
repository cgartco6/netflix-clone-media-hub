import { Redirect } from 'expo-router';
import { Platform } from 'react-native';

export default function Index() {
  const isTV = Platform.isTV || (Platform.OS === 'android' && Platform.isTV);
  return <Redirect href={isTV ? '/(tv)/home' : '/(tabs)/home'} />;
}
