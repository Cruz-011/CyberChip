import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useApp } from '../context/AppProvider';

// Mapeamento de imagens locais
const imagens: any = {
  'titanx.png': require('../../assets/produtos/download.jpg'),
  'velocityv.png': require('../../assets/produtos/download.jpg'),
  'ironfist.png': require('../../assets/produtos/download.jpg'),
  'shieldplus.png': require('../../assets/produtos/relict3.jpg'),
  'eagleeye.png': require('../../assets/produtos/relict3.jpg'),
  'sonichearing.png': require('../../assets/produtos/download (1).jpg'),
  'sixthsense.png': require('../../assets/produtos/download (1).jpg'),
  'cortexplus.png': require('../../assets/produtos/relict3.jpg'),
  'hackmaster.png': require('../../assets/produtos/relict3.jpg'),
  'neurallink.png': require('../../assets/produtos/relict3.jpg'),
};

export default function ProdutoDetalhe() {
  const route = useRoute();
  const { e_produto } = route.params as any;
  const { e_adicionarAoCarrinho } = useApp();

  return (
    <ScrollView contentContainerStyle={c_styles.container}>
      <Image
        source={imagens[e_produto.imagem]}
        style={c_styles.imagem}
        resizeMode="contain"
      />
      <Text style={c_styles.nome}>{e_produto.nome}</Text>
      <Text style={c_styles.categoria}>Categoria: {e_produto.categoria}</Text>
      <Text style={c_styles.descricao}>{e_produto.descricao}</Text>
      <Text style={c_styles.preco}>Preço: R$ {e_produto.preco.toFixed(2)}</Text>
      <Button title="Adicionar ao Carrinho" onPress={() => e_adicionarAoCarrinho(e_produto)} />
    </ScrollView>
  );
}

const c_styles = StyleSheet.create({
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
