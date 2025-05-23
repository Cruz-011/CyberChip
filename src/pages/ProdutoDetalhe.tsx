import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useApp } from '../context/AppProvider';

// Mapeamento de imagens locais
const imagens: any = {
  'titanx.png': require('../../assets/produtos/titanx.png'),
  'velocityv.png': require('../../assets/produtos/download.jpg'),
  'ironfist.png': require('../../assets/produtos/download.jpg'),
  'shieldplus.png': require('../../assets/produtos/relict3.jpg'),
  'eagleeye.png': require('../../assets/produtos/titanx.png'),
  'sonichearing.png': require('../../assets/produtos/download (1).jpg'),
  'sixthsense.png': require('../../assets/produtos/download (1).jpg'),
  'cortexplus.png': require('../../assets/produtos/titanx.png'),
  'hackmaster.png': require('../../assets/produtos/relic.webp'),
  'neurallink.png': require('../../assets/produtos/relict3.jpg'),
};

export default function ProdutoDetalhe() {
  const route = useRoute();
  const { produto } = route.params as any;
  const { adicionarAoCarrinho } = useApp();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={imagens[produto.imagem]}
        style={styles.imagem}
        resizeMode="contain"
      />
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.categoria}>Categoria: {produto.categoria}</Text>
      <Text style={styles.descricao}>{produto.descricao}</Text>
      <Text style={styles.preco}>Preço: R$ {produto.preco.toFixed(2)}</Text>
      <Button title="Adicionar ao Carrinho" onPress={() => adicionarAoCarrinho(produto)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0ff',
    marginBottom: 10,
  },
  categoria: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0f0',
  },
});
