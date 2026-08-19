import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default function HeroCarousel() {
  // In production, fetch featured content from Jellyfin
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://image.tmdb.org/t/p/original/example.jpg' }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>Featured Movie</Text>
        <Text style={styles.description}>Watch now with a Netflix-style UI</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 400, marginBottom: 20 },
  image: { width: width, height: 400, resizeMode: 'cover' },
  overlay: { position: 'absolute', bottom: 60, left: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff' },
  description: { fontSize: 16, color: '#ddd', marginTop: 8 },
});
