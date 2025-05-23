import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useApp } from '../context/AppProvider';

export default function Pedidos() {
  const { pedidos } = useApp();

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={pedidos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.pedido}>
            <Text style={styles.titulo}>Pedido #{item.id}</Text>
            {item.itens.map(p => (
              <Text key={p.id} style={styles.item}>
                {p.nome} x{p.quantidade}
              </Text>
            ))}
          </View>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum pedido feito ainda.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pedido: {
    borderWidth: 1,
    borderColor: '#0af',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 6,
    color: '#0af',
  },
  item: {
    fontSize: 16,
    paddingLeft: 10,
  },
  vazio: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
    fontSize: 16,
  },
});
