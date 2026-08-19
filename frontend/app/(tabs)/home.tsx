import { View, ScrollView, Text } from 'react-native';
import { useJellyfin } from '../../hooks/useJellyfin';
import HeroCarousel from '../../components/HeroCarousel';
import ContentRow from '../../components/ContentRow';

export default function Home() {
  const { libraries, loading } = useJellyfin();

  return (
    <ScrollView style={{ backgroundColor: '#141414', paddingTop: 40 }}>
      <HeroCarousel />
      {!loading && libraries.map((lib) => (
        <ContentRow key={lib.Id} title={lib.Name} items={lib.Items || []} />
      ))}
    </ScrollView>
  );
}
