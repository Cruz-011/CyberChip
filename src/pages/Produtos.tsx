import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet, Text } from 'react-native';
import CardProduto from '../components/CardProduto';
import produtosJson from '../data/produtos.json';

export default function Produtos() {
  const [e_busca, setBusca] = useState('');
  const [c_produtos, setProdutos] = useState(produtosJson);

  useEffect(() => {
    const filtrados = produtosJson.filter(p =>
  (p.titulo + p.descricao + p.categoria).toLowerCase().includes(e_busca.toLowerCase())
);

    setProdutos(filtrados);
  }, [e_busca]);

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Buscar produtos..."
        value={e_busca}
        onChangeText={setBusca}
        style={c_styles.input}
        placeholderTextColor="#999"
      />
      <FlatList
        data={c_produtos}
        renderItem={({ item }) => <CardProduto produto={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const c_styles = StyleSheet.create({
  input: {
    backgroundColor: '#222',
    color: '#0ff',
    padding: 10,
    margin: 10,
    borderRadius: 8
  }
});
