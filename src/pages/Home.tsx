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
      const next = (currentIndex + 1) % slides.length;
      flatListRef.current?.scrollToIndex({ index: next, animated: true });
      setCurrentIndex(next);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) setCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CyberChip</Text>

      <View style={styles.carouselContainer}>
        <AnimatedFlatList
          ref={flatListRef}
          data={slides}
          keyExtractor={(item) => item.key}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
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
              outputRange: [0.9, 1, 0.9],
              extrapolate: 'clamp',
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.6, 1, 0.6],
              extrapolate: 'clamp',
            });

            return (
              <View style={styles.slide}>
                <Animated.Image
                  source={item.image}
                  style={[styles.image, { transform: [{ scale }], opacity }]}
                  resizeMode="cover"
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.tags}>
                  {item.tags.map((tag, i) => (
                    <View key={i} style={styles.tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              </View>
            );
          }}
        />
        <View style={styles.indicators}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[
                styles.indicator,
                i === currentIndex && styles.activeIndicator,
              ]}
            />
          ))}
        </View>
      </View>

      <Text style={styles.welcome}>
        Bem-vindo ao futuro. Instale biochips e seja mais que humano.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/produtos')}
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
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 42,
    color: '#00e5ff',
    fontWeight: '900',
    marginBottom: 20,
    textShadowColor: '#008fb3',
    textShadowRadius: 10,
  },
  carouselContainer: {
    width: '100%',
    height: 400,
  },
  slide: {
    width,
    alignItems: 'center',
  },
  image: {
    width,
    height: 220,
  },
  title: {
    fontSize: 24,
    color: '#00e5ff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 15,
    color: '#a0cfdc',
    textAlign: 'center',
    marginTop: 5,
  },
  tags: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
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
  activeIndicator: {
    backgroundColor: '#00e5ff',
    width: 12,
    height: 12,
  },
  welcome: {
    color: '#a0cfdc',
    textAlign: 'center',
    marginVertical: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#00e5ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  buttonText: {
    color: '#0a0a0f',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
