import React from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';
import { useApp } from '../context/AppProvider';



export default function CardProduto({ produto }: any) {
  const { adicionarAoCarrinho } = useApp();

  function handleAdicionar() {
    adicionarAoCarrinho(produto);
    Alert.alert('Sucesso', 'Produto adicionado ao carrinho!');
  }

  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.descricao}>{produto.descricao}</Text>
      <Text style={styles.categoria}>{produto.categoria}</Text>
      <Text style={styles.preco}>R$ {produto.preco}</Text>
      <Button title="Adicionar" onPress={handleAdicionar} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 10,
    margin: 10
  },
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 8
  },
  nome: {
    color: '#00f5ff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5
  },
  preco: {
    color: '#0ff',
    marginVertical: 5
  },
   titulo: {
    fontSize: 18,
    color: '#0ff',
    fontWeight: 'bold',
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

