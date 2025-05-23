# CyberChip
Grupo: Enzo Marsola 556310. Cauan Cruz 558238
Aplicativo mobile desenvolvido em React Native para a disciplina de CP2. O app simula a navegação e seleção de chips cibernéticos com funcionalidades de listagem, detalhamento e carrinho de compras.

## 📱 Plataforma

- Compatível com Android.
- Adaptado para modos **portrait** e **landscape**.

---

## 🚀 Funcionalidades

- 📂 **Navegação por Menu**: Drawer Navigation com telas para Home, Produtos, Carrinho e Pedidos.
- 📃 **Lista de Produtos**: com busca por nome e descrição, imagens e detalhes de cada produto.
- 🛒 **Carrinho de Compras**: com badge no menu, controle de quantidade e exclusão de itens.
- 💾 **Armazenamento Assíncrono**: produtos carregados de um arquivo local JSON e persistência do carrinho com `AsyncStorage`.
- 🌐 **Offline Ready**: app funcional sem conexão, incluindo acesso às imagens já carregadas.
- 🎨 **Dark Mode**: interface moderna com tema escuro.

---

## 🧠 Estrutura de Código

Organizado segundo os princípios da **Clean Architecture**:

```
src/
├── assets/                # Imagens dos produtos
├── components/            # Componentes reutilizáveis
├── context/               # Gerenciador de estado global (AppProvider)
├── data/                  # Arquivo JSON com produtos
├── pages/                 # Telas principais (Home, Produtos, Carrinho, Pedidos, ProdutoDetalhe)
├── services/              # Lógica de dados (ex: leitura do JSON)
├── stores/                # Estado centralizado (opcional)
└── App.tsx                # Entry point
```

- **Componentes**: CardProduto, BadgeCarrinho, etc.
- **Estado Global**: via Context API (`useApp`)
- **3 Telas principais** + tela de detalhe

---

## 📦 Bibliotecas Utilizadas

- `react-native`
- `@react-navigation/native`
- `@react-navigation/drawer`
- `@react-navigation/stack`
- `react-native-gesture-handler`
- `react-native-reanimated`
- `@react-native-async-storage/async-storage`
- `expo` e `expo-status-bar`

> Todas as dependências estão listadas no `package.json`.

---

## 🛠️ Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/CyberChip.git
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o projeto** (em modo dev):
   ```bash
   npx expo start
   ```

---

## 📦 APK

O APK está disponível na pasta do repositório:
```
/build/CyberChip.apk
```

Instale em seu Android para testar a versão nativa offline.

---

## 👨‍💻 Créditos

Este projeto foi desenvolvido como parte da avaliação da disciplina CP2 - React Native.

> As variáveis, métodos e funções seguem a nomenclatura com as iniciais dos integrantes do grupo.

---

## ✅ Requisitos Atendidos

- [x] Navegação com Drawer
- [x] Lista com busca por nome e descrição
- [x] Detalhes do produto com imagem grande
- [x] Carrinho com controle de quantidade
- [x] Estado global via Context
- [x] Organização em componentes, telas, serviços e contextos
- [x] Funcionalidade offline
- [x] Aplicativo testado nativamente no Android
- [x] Clean Architecture aplicada
- [x] Build final incluída no repositório


