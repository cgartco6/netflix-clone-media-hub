import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ContentRow({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => (
          <TouchableOpacity key={item.Id} style={styles.card}>
            <Image source={{ uri: item.ImageUrl || 'https://via.placeholder.com/200x120' }} style={styles.image} />
            <Text style={styles.cardTitle} numberOfLines={1}>{item.Name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 16, marginBottom: 8 },
  card: { marginHorizontal: 8, width: 140 },
  image: { width: 140, height: 80, borderRadius: 6 },
  cardTitle: { color: '#ddd', fontSize: 12, marginTop: 4, textAlign: 'center' },
});
