import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useApp } from '../context/AppProvider';

export default function Carrinho() {
  const { carrinho, removerDoCarrinho, confirmarPedido } = useApp();

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={carrinho}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>{item.imagem}{item.nome} QTN:{item.quantidade}</Text>
            <Button title="Remover" onPress={() => removerDoCarrinho(item.id)} />
          </View>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Carrinho vazio</Text>}
      />

      {carrinho.length > 0 && (
        <View style={styles.botaoConfirmar}>
          <Button title="Confirmar Pedido" onPress={confirmarPedido} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#0af',
    borderRadius: 5,
  },
  texto: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  vazio: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#999',
  },
  botaoConfirmar: {
    marginTop: 20,
  },
});
