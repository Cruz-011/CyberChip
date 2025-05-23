import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useApp } from '../context/AppProvider';

export default function Pedidos() {
  const { c_pedidos } = useApp();

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data= {c_pedidos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={c_styles.pedido}>
            <Text style={c_styles.titulo}>Pedido #{item.id}</Text>
            {item.itens.map(p => (
              <Text key={p.id} style={c_styles.item}>
                {p.nome} x{p.quantidade}
              </Text>
            ))}
          </View>
        )}
        ListEmptyComponent={<Text style={c_styles.vazio}>Nenhum pedido feito ainda.</Text>}
      />
    </View>
  );
}

const c_styles = StyleSheet.create({
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
    color: '#fff',
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
