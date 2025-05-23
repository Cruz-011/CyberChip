import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  function navegarParaProdutos() {
    router.push('/produtos');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CyberChip</Text>
      <Text style={styles.subtitulo}>Venda de Biochips de Aprimoramento</Text>
      <Text style={styles.texto}>
        Bem-vindo ao futuro! Aqui você encontra biochips para aprimoramento físico, sensorial e cerebral. Escolha, instale e seja mais que humano.
      </Text>

      <TouchableOpacity style={styles.botao} onPress={navegarParaProdutos}>
        <Text style={styles.textoBotao}>Explorar Produtos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 30, 
    justifyContent: 'center', 
    backgroundColor: '#000', 
    alignItems: 'center',
  },
  titulo: { 
    fontSize: 36, 
    color: '#00f5ff', 
    fontWeight: 'bold', 
    marginBottom: 10,
    textShadowColor: '#0ff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtitulo: { 
    fontSize: 20, 
    color: '#66ccff', 
    marginBottom: 30,
    fontWeight: '600',
  },
  texto: { 
    color: '#aaa', 
    fontSize: 16, 
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  botao: {
    backgroundColor: '#00f5ff',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#0ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  textoBotao: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
