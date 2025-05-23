import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  quantidade: number;
}

export default function BadgeCarrinho({ quantidade }: Props) {
  if (quantidade === 0) return null;

  return (
    <View style={styles.badge}>
      <Text style={styles.texto}>{quantidade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    position: 'absolute',
    right: -6,
    top: -3,
    zIndex: 10,
  },
  texto: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
