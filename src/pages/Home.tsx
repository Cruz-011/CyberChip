import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CyberChip</Text>
      <Text style={styles.subtitulo}>Venda de Biochips de Aprimoramento</Text>
      <Text style={styles.texto}>
        Bem-vindo ao futuro! Aqui você encontra biochips para aprimoramento físico, sensorial e cerebral. Escolha, instale e seja mais que humano.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 28, color: '#0ff', fontWeight: 'bold' },
  subtitulo: { fontSize: 18, color: '#ccc', marginBottom: 20 },
  texto: { color: '#aaa', fontSize: 16 }
});
