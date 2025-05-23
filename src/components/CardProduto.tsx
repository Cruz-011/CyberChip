import React from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppProvider';

export default function CardProduto({ produto }: any) {
  const { adicionarAoCarrinho } = useApp();
  const navigation = useNavigation();

  function handleAdicionar() {
    adicionarAoCarrinho(produto);
    Alert.alert('Sucesso', 'Produto adicionado ao carrinho!');
  }

  function irParaDetalhes() {
    navigation.navigate('ProdutoDetalhe' as never, { produto } as never);
  }

  return (
    <TouchableOpacity onPress={irParaDetalhes} style={styles.card}>
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.descricao}>{produto.descricao}</Text>
      <Text style={styles.categoria}>{produto.categoria}</Text>
      <Text style={styles.preco}>R$ {produto.preco}</Text>
      <Button title="Adicionar" onPress={handleAdicionar} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  nome: {
    color: '#00f5ff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  preco: {
    color: '#0ff',
    marginVertical: 5,
  },
  descricao: {
    color: '#ccc',
    marginTop: 5,
  },
  categoria: {
    color: '#666',
    marginTop: 3,
    fontStyle: 'italic',
  },
});
