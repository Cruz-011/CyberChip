import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    image: require('../../assets/relic.webp'),
    title: 'Biochip Neural-X',
    description: 'Amplie sua inteligência e reações cognitivas em 300%.',
    tags: ['Poder', 'Velocidade', 'Integração'],
  },
  {
    key: '2',
    image: require('../../assets/relic2.jpg'),
    title: 'Sensory Boost Pro',
    description: 'Eleve seus sentidos a um nível quase sobrenatural.',
    tags: ['Visão', 'Audição', 'Tato'],
  },
  {
    key: '3',
    image: require('../../assets/relict3.jpg'),
    title: 'Endurance Max',
    description: 'Supere seus limites físicos com resistência ampliada.',
    tags: ['Força', 'Resistência', 'Performance'],
  },
];

const AnimatedFlatList = Animated.createAnimatedComponent(Animated.FlatList);

export default function Home() {
  const router = useRouter();
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CyberChip</Text>

      <View style={{ height: 350 }}>
        <AnimatedFlatList
          ref={flatListRef}
          data={slides}
          keyExtractor={(item) => item.key}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.85, 1, 0.85],
              extrapolate: 'clamp',
            });
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.6, 1, 0.6],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View style={[styles.slide, { transform: [{ scale }], opacity }]}>
                <Image source={item.image} style={styles.image} resizeMode="cover" />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.tagsContainer}>
                  {item.tags.map((tag) => (
                    <View key={tag} style={styles.tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              </Animated.View>
            );
          }}
        />
        <View style={styles.indicators}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[
                styles.indicator,
                i === currentIndex ? styles.indicatorActive : {},
              ]}
            />
          ))}
        </View>
      </View>

      <Text style={styles.welcomeText}>
        Bem-vindo ao futuro! Aqui você encontra biochips para aprimoramento físico, sensorial e cerebral. 
        Escolha, instale e seja mais que humano.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/produtos')}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Explorar Produtos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0f',
    paddingTop: 60,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 40,
    color: '#00e5ff',
    fontWeight: '900',
    marginBottom: 20,
    textShadowColor: '#008fb3',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  slide: {
    width,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '90%',
    height: 180,
    borderRadius: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00e5ff',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: '#a0cfdc',
    textAlign: 'center',
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    backgroundColor: '#004f61',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  tagText: {
    color: '#00cfff',
    fontWeight: '600',
    fontSize: 13,
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    backgroundColor: '#00333d',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  indicatorActive: {
    backgroundColor: '#00e5ff',
    width: 12,
    height: 12,
  },
  welcomeText: {
    color: '#a0cfdc',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#00e5ff',
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 30,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
