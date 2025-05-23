import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import produtos from '../data/produtos.json';

interface Produto {
  id: string;
  nome: string;    
  descricao?: string;
  categoria?: string;
  imagem?: string;
  preco: number;
  quantidade?: number;
}

interface Pedido {
  id: string;
  itens: Produto[];
}

interface AppContextProps {
  listaProdutos: Produto[];
  carrinho: Produto[];
  pedidos: Pedido[];
  adicionarAoCarrinho: (produto: Produto) => void;
  removerDoCarrinho: (id: string) => void;
  confirmarPedido: () => void;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [listaProdutos, setListaProdutos] = useState<Produto[]>(produtos);
  const [carrinho, setCarrinho] = useState<Produto[]>([]);
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('carrinho').then(data => {
      if (data) setCarrinho(JSON.parse(data));
    });
    AsyncStorage.getItem('pedidos').then(data => {
      if (data) setPedidos(JSON.parse(data));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('carrinho', JSON.stringify(carrinho));
    AsyncStorage.setItem('pedidos', JSON.stringify(pedidos));
  }, [carrinho, pedidos]);

  const adicionarAoCarrinho = (produto: Produto) => {
    const existente = carrinho.find(p => p.id === produto.id);
    if (existente) {
      existente.quantidade = (existente.quantidade || 1) + 1;
      setCarrinho([...carrinho]);
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const removerDoCarrinho = (id: string) => {
    const atualizado = carrinho.filter(p => p.id !== id);
    setCarrinho(atualizado);
  };

  const confirmarPedido = () => {
    if (carrinho.length === 0) return;
    const novoPedido: Pedido = {
      id: Date.now().toString(),
      itens: [...carrinho],
    };
    setPedidos([...pedidos, novoPedido]);
    setCarrinho([]);
  };

  return (
    <AppContext.Provider
      value={{
        listaProdutos,
        carrinho,
        pedidos,
        adicionarAoCarrinho,
        removerDoCarrinho,
        confirmarPedido,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
