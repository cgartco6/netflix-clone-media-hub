import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import apiClient from '../../services/apiClient';

export default function Settings() {
  const [m3uUrl, setM3uUrl] = useState('');
  const [xmltvUrl, setXmltvUrl] = useState('');

  const addChannelSource = async () => {
    if (!m3uUrl) return Alert.alert('Error', 'M3U URL is required');
    try {
      await apiClient.post('/live-tv/sources', { m3uUrl, xmltvUrl });
      Alert.alert('Success', 'TV sources updated');
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>M3U Playlist URL</Text>
      <TextInput style={styles.input} value={m3uUrl} onChangeText={setM3uUrl} placeholder="http://..." placeholderTextColor="#666" />
      <Text style={styles.label}>XMLTV Guide URL (optional)</Text>
      <TextInput style={styles.input} value={xmltvUrl} onChangeText={setXmltvUrl} placeholder="http://..." placeholderTextColor="#666" />
      <Button title="Add Live TV Source" onPress={addChannelSource} color="#E50914" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#141414', padding: 20, paddingTop: 60 },
  label: { color: '#fff', fontSize: 16, marginBottom: 8, marginTop: 16 },
  input: { backgroundColor: '#222', color: '#fff', padding: 12, borderRadius: 8, fontSize: 16 },
});
