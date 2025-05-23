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
  c_listaProdutos: Produto[];
  e_carrinho: Produto[];
  c_pedidos: Pedido[];
  e_adicionarAoCarrinho: (produto: Produto) => void;
  c_removerDoCarrinho: (id: string) => void;
  c_confirmarPedido: () => void;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [c_listaProdutos, setListaProdutos] = useState<Produto[]>(produtos);
  const [e_carrinho, setCarrinho] = useState<Produto[]>([]);
  const [c_pedidos, setPedidos] = useState<Pedido[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('carrinho').then(data => {
      if (data) setCarrinho(JSON.parse(data));
    });
    AsyncStorage.getItem('pedidos').then(data => {
      if (data) setPedidos(JSON.parse(data));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('carrinho', JSON.stringify(e_carrinho));
    AsyncStorage.setItem('pedidos', JSON.stringify(c_pedidos));
  }, [e_carrinho, c_pedidos]);

  const e_adicionarAoCarrinho = (produto: Produto) => {
    const existente = e_carrinho.find(p => p.id === produto.id);
    if (existente) {
      existente.quantidade = (existente.quantidade || 1) + 1;
      setCarrinho([...e_carrinho]);
    } else {
      setCarrinho([...e_carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const c_removerDoCarrinho = (id: string) => {
    const atualizado = e_carrinho.filter(p => p.id !== id);
    setCarrinho(atualizado);
  };

  const c_confirmarPedido = () => {
    if (e_carrinho.length === 0) return;
    const novoPedido: Pedido = {
      id: Date.now().toString(),
      itens: [...e_carrinho],
    };
    setPedidos([...c_pedidos, novoPedido]);
    setCarrinho([]);
  };

  return (
    <AppContext.Provider
      value={{
        c_listaProdutos,
        e_carrinho,
        c_pedidos,
        e_adicionarAoCarrinho,
        c_removerDoCarrinho,
        c_confirmarPedido,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
