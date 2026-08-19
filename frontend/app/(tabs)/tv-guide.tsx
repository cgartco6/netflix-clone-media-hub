import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import apiClient from '../../services/apiClient';

export default function TvGuide() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    apiClient.get('/live-tv/channels')
      .then(res => setChannels(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Live TV Guide</Text>
      <FlatList
        data={channels}
        keyExtractor={(item) => item.Id}
        renderItem={({ item }) => (
          <View style={styles.channelCard}>
            <Text style={styles.channelName}>{item.Name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#141414', paddingTop: 40, paddingHorizontal: 16 },
  header: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  channelCard: { backgroundColor: '#222', padding: 16, marginBottom: 8, borderRadius: 8 },
  channelName: { color: '#fff', fontSize: 16 },
});
