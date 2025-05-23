import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet, Text } from 'react-native';
import CardProduto from '../components/CardProduto';
import produtosJson from '../data/produtos.json';

export default function Produtos() {
  const [busca, setBusca] = useState('');
  const [produtos, setProdutos] = useState(produtosJson);

  useEffect(() => {
    const filtrados = produtosJson.filter(p =>
  (p.titulo + p.descricao + p.categoria).toLowerCase().includes(busca.toLowerCase())
);

    setProdutos(filtrados);
  }, [busca]);

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Buscar produtos..."
        value={busca}
        onChangeText={setBusca}
        style={styles.input}
        placeholderTextColor="#999"
      />
      <FlatList
        data={produtos}
        renderItem={({ item }) => <CardProduto produto={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#222',
    color: '#0ff',
    padding: 10,
    margin: 10,
    borderRadius: 8
  }
});
