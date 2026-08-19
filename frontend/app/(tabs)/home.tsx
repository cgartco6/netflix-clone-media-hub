import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import { useJellyfin } from '../../hooks/useJellyfin';
import HeroCarousel from '../../components/HeroCarousel';
import ContentRow from '../../components/ContentRow';

export default function Home() {
  const { libraries, loading } = useJellyfin();

  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: '#141414', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#E50914" />
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: '#141414', paddingTop: 40 }}>
      <HeroCarousel />
      {libraries.map((lib) => (
        <ContentRow key={lib.Id} title={lib.Name} items={lib.Items || []} />
      ))}
    </ScrollView>
  );
}
