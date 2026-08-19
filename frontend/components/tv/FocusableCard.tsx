import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { useFocusable } from 'react-native-tv-focus';

export default function FocusableCard({ title, image, onPress }) {
  const { focused, ref } = useFocusable({
    onPress,
    focusKey: `card-${title.replace(/\s/g, '')}`,
  });

  return (
    <TouchableOpacity ref={ref} activeOpacity={1}>
      <View style={[styles.card, focused && styles.focused]}>
        <Image source={{ uri: image || 'https://via.placeholder.com/200x120' }} style={styles.image} />
        {focused && <Text style={styles.title}>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { width: 200, height: 120, margin: 8, borderRadius: 8, overflow: 'hidden' },
  focused: { transform: [{ scale: 1.2 }], borderWidth: 3, borderColor: '#E50914' },
  image: { width: '100%', height: '100%' },
  title: { position: 'absolute', bottom: 8, left: 8, color: 'white', fontWeight: 'bold' },
});
