import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { useJellyfin } from '../../hooks/useJellyfin';
import FocusableCard from '../../components/tv/FocusableCard';

export default function TvHome() {
  const { libraries, loading } = useJellyfin();

  if (loading) return <View style={styles.loading}><Text style={styles.text}>Loading...</Text></View>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome to Media Hub</Text>
      {libraries.map((lib) => (
        <View key={lib.Id} style={styles.row}>
          <Text style={styles.rowTitle}>{lib.Name}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {lib.Items?.map((item) => (
              <FocusableCard key={item.Id} title={item.Name} image={item.ImageUrl} onPress={() => {}} />
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#141414', paddingTop: 40 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#141414' },
  text: { color: '#fff' },
  header: { color: '#fff', fontSize: 32, fontWeight: 'bold', paddingHorizontal: 20, marginBottom: 20 },
  row: { marginBottom: 30 },
  rowTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20, marginBottom: 10 },
});
