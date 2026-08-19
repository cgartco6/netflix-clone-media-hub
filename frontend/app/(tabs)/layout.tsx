import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: '#141414', borderTopWidth: 0 },
        tabBarActiveTintColor: '#E50914',
        tabBarInactiveTintColor: '#888',
        headerStyle: { backgroundColor: '#141414' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="tv-guide"
        options={{
          title: 'TV Guide',
          tabBarIcon: ({ color }) => <Ionicons name="tv" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
