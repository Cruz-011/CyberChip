
# 🚀 **CyberChip**

Grupo: **Enzo Marsola (556310)** | **Cauan Cruz (558238)**  
Aplicativo mobile desenvolvido em **React Native** para a disciplina de **CP2**.  
O app simula a navegação e seleção de **chips cibernéticos**, com funcionalidades de **listagem, detalhamento e carrinho de compras.**

---

## 📱 **Plataforma**

- ✔️ **Compatível com Android**
- ✔️ Suporte total aos modos **portrait** e **landscape**

---

## 🔥 **Funcionalidades**

- 📂 **Navegação por Menu** — Drawer Navigation com telas para **Home, Produtos, Carrinho e Pedidos**
- 🔍 **Busca inteligente** — por nome e descrição dos produtos
- 📃 **Lista de Produtos** — com imagens, descrição e preço
- 🛒 **Carrinho de Compras** — com controle de quantidade, badge de itens e remoção
- 💾 **Armazenamento Local** — persistência de dados com `AsyncStorage`
- 🌐 **Offline Ready** — o app funciona mesmo sem internet (inclusive imagens)
- 🎨 **Tema Dark** — interface moderna e responsiva
- 🚀 **Build Nativa APK disponível**

---

## 🧠 **Arquitetura do Código** — _Clean Architecture no osso_

```
src/
├── assets/         # Imagens dos produtos
├── components/     # Componentes reutilizáveis (UI/UX)
├── context/        # Context API para estado global
├── data/           # JSON de produtos
├── pages/          # Telas principais (Home, Produtos, Carrinho, Pedidos, Detalhe)
├── services/       # Regras de negócio (ex: carregar produtos)
└── App.tsx         # Entry point
```

- ♻️ Componentes: `CardProduto`, `BadgeCarrinho`, etc.
- 🔗 Estado global: via Context (`useApp`)
- 🚥 Navegação: Drawer + Stack para detalhe

---

## 📦 **Bibliotecas de Poder**

- `react-native`
- `expo`
- `@react-navigation/native`
- `@react-navigation/drawer`
- `@react-navigation/stack`
- `react-native-gesture-handler`
- `react-native-reanimated`
- `@react-native-async-storage/async-storage`

---

## 🚀 **Instalação Local**

1. Clone o projeto:
```bash
git clone https://github.com/seu-usuario/CyberChip.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o app:
```bash
npx expo start
```

---

## 📥 **Download do APK**

> 👉 **[Clique aqui para baixar o APK](https://expo.dev/accounts/cauandacruz/projects/CyberChip/builds/503f3f2f-94fd-4102-ae2f-cd05e198c175)**

Ou escaneie o QR Code diretamente na página do Expo para instalar no seu dispositivo Android.

---

## ✅ **Requisitos Entregues**

- ✔️ Drawer Navigation implementado
- ✔️ Lista com busca inteligente
- ✔️ Detalhes dos produtos com imagens grandes
- ✔️ Carrinho funcional com badge e controle de quantidade
- ✔️ Estado global via Context API
- ✔️ Organização modular (componentes, telas, serviços e contexto)
- ✔️ Funcionalidade Offline
- ✔️ Dark Mode com UI responsiva
- ✔️ Testado nativamente no Android
- ✔️ APK gerado e entregue
- ✔️ Clean Architecture aplicada de ponta a ponta

---

## 👨‍💻 **Créditos**

Projeto desenvolvido por:

- **Enzo Marsola** — RM: 556310  
- **Cauan Cruz** — RM: 558238  

Disciplina de **CP2 - React Native**  
> As variáveis, funções e métodos seguem a nomenclatura baseada nas iniciais dos integrantes.
