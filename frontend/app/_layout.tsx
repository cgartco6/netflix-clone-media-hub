import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function RootLayout() {
  // Detect platform to load different navigators
  const isTV = Platform.isTV || Platform.OS === 'android' && Platform.isTV;
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isTV ? (
        <Stack.Screen name="(tv)" options={{ animation: 'none' }} />
      ) : (
        <Stack.Screen name="(tabs)" options={{ animation: 'fade' }} />
      )}
      <Stack.Screen name="player/[id]" options={{ presentation: 'fullScreenModal' }} />
    </Stack>
  );
}
