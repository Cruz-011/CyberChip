import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useApp } from '../context/AppProvider';

export default function ItemCarrinho({ item }: any) {
  const { c_removerDoCarrinho } = useApp();

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text>Qtd: {item.quantidade}</Text>
        <Text style={styles.preco}>R$ {(item.preco * item.quantidade).toFixed(2)}</Text>
        <Button title="Remover" onPress={() => c_removerDoCarrinho(item.id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#222',
    marginVertical: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  preco: {
    color: '#0f0',
    marginTop: 4,
    marginBottom: 6,
  },
});
