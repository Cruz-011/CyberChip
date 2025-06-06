import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './src/context/AppProvider';
import { StatusBar } from 'expo-status-bar';

import Home from './src/pages/Home';
import Produtos from './src/pages/Produtos';
import Carrinho from './src/pages/Carrinho';
import Pedidos from './src/pages/Pedidos';
import ProdutoDetalhe from './src/pages/ProdutoDetalhe';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function ProdutosStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#00FFFF',
      }}
    >
      <Stack.Screen name="Produtos" component={Produtos} />
      <Stack.Screen name="ProdutoDetalhe" component={ProdutoDetalhe} options={{ title: 'Detalhes do Produto' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer theme={DarkTheme}>
        <StatusBar style="light" />
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#121212' },
            headerTintColor: '#00FFFF',
            drawerStyle: { backgroundColor: '#121212' },
            drawerActiveTintColor: '#00FFFF',
            drawerInactiveTintColor: '#fff',
            drawerLabelStyle: { fontSize: 16 },
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Produtos" component={ProdutosStack} />
          <Drawer.Screen name="Carrinho" component={Carrinho} />
          <Drawer.Screen name="Pedidos" component={Pedidos} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
