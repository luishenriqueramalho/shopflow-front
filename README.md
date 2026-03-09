# ShopFlow

Aplicação mobile de Digital Commerce desenvolvida em **React Native CLI + TypeScript**, consumindo dados de um **BFF em Node.js + Express**.

O projeto foi construído com foco em **arquitetura escalável**, **código limpo**, **separação de responsabilidades**, **controle robusto de estados** e **boas práticas de engenharia de software**.

---

## Visão geral

O ShopFlow é composto por duas partes:

- **Mobile App**: aplicação React Native responsável pela experiência do usuário
- **BFF (Backend for Frontend)**: camada backend que fornece os dados de produtos para o app

A aplicação contempla:

- Tela de transição inicial
- Listagem de produtos
- Detalhes do produto
- Carrinho
- Tela de pagamento
- Fluxo de compra simulado com feedback visual

---

## Tecnologias utilizadas

### Mobile

- React Native CLI
- TypeScript
- Redux Toolkit
- Redux-Saga
- React Navigation
- Styled Components

### Backend (BFF)

- Node.js
- Express
- TypeScript
- CORS

---

## Como iniciar o backend

Entre na pasta do backend:

```bash
cd bff
```

Instale as dependências:

```bash
yarn
```

Execute em modo desenvolvimento:

```bash
yarn dev
```

A aplicação será iniciada em:

```txt
http://localhost:3000
```

### Endpoints disponíveis

#### Listar produtos

```http
GET /products
```

#### Buscar produto por id

```http
GET /products/:id
```

---

## Como iniciar o frontend

Entre na pasta do app mobile:

```bash
cd shopflow-front
```

Instale as dependências:

```bash
yarn
```

### iOS

Instale os pods:

```bash
cd ios && pod install && cd ..
```

Execute:

```bash
yarn ios
```

### Android

Execute:

```bash
yarn android
```

---

## Configuração da baseURL

A URL da API deve variar conforme o ambiente:

### iOS Simulator

```txt
http://localhost:3000
```

### Android Emulator

```txt
http://10.0.2.2:3000
```

### Dispositivo físico

```txt
http://IP_DA_MAQUINA:3000
```

---

## Estrutura de pastas

### Mobile

```txt
src/
  app/
    store/
      hooks.ts
      index.ts
      rootReducer.ts
      rootSaga.ts

  assets/
    images/
      index.ts
      Logo.png
    svg/
      ArrowLeftIcon.tsx
      ArrowRightIcon.tsx
      Camera.tsx
      CartIcon.tsx
      FavoriteIcon.tsx
      Filter.tsx
      HomeIcon.tsx
      index.ts
      ProfileIcon.tsx

  components/
    AllItems/
    Button/
    Carousel/
    Categories/
    Loading/
    Menu/
    PaymentStatusModal/
    ProductCard/
    SafeArea/
    VoucherModal/

  features/
    cart/
      domain/
      store/

    products/
      cart/
        domain/
          cart.types.ts
        store/
          cart.selectors.ts
          cart.slice.ts
      products/
        api/
          productsApi.ts
        domain/
          product.types.ts
        store/
          products.saga.ts
          products.selectors.ts
          products.slice.ts

  navigation/
    AppNavigator.tsx
    navigationTypes.d.ts
    routes.ts

  screens/
    Cart/
      index.tsx
      styles.ts
      useCart.ts
    CategoryProducts/
      index.tsx
      styles.ts
      useCategoryProducts.ts
    Home/
      index.tsx
      styles.ts
      useHome.ts
    InitialTransition/
      index.tsx
      styles.ts
      useInitialTransition.ts
    Payment/
      index.tsx
      mock.ts
      styles.ts
      usePayment.ts
    ProductDetails/
      index.tsx
      styles.ts
      useProductDetails.ts

  services/
    http/
      client.ts

  theme/
    colors.ts
    global.ts
    scale.ts
    ThemeContext.tsx

  utils/
    formatCurrency.ts
```

### BFF

```txt
bff/
  src/
    controllers/
      products.controller.ts
    data/
      products.mock.ts
    routes/
      products.routes.ts
    types/
      product.types.ts
    app.ts
    server.ts
```

---

## Scripts úteis

### Frontend

```bash
yarn lint
yarn lint:fix
yarn format
yarn format:fix
```

### Backend

```bash
yarn dev
yarn build
yarn start
```

---

## Git Hooks com Husky

O projeto utiliza **Husky + lint-staged** para garantir qualidade antes dos commits.

### O que é executado no pre-commit

- ESLint nos arquivos alterados
- Prettier nos arquivos alterados

Isso evita commits com código fora do padrão definido pelo projeto.

---

## Respostas técnicas

### 1. Como você organizou a arquitetura do projeto mobile e por quê?

A arquitetura do projeto mobile foi organizada por **camadas e por feature**, priorizando separação de responsabilidades, escalabilidade e facilidade de manutenção.

A estrutura foi dividida em:

- **screens**: responsáveis pela composição visual de cada tela
- **features**: concentram regras de negócio por domínio, como `products` e `cart`
- **store**: centraliza a configuração global do Redux, reducers e sagas
- **components**: componentes reutilizáveis e desacoplados da regra de negócio
- **services/http**: camada de comunicação com API
- **navigation**: controle de rotas e tipagem da navegação
- **theme/utils**: padronização visual e funções auxiliares

Dentro de cada feature, a separação entre `domain`, `api` e `store` evita acoplamento entre interface, estado global e acesso a dados. Isso facilita testes, evolução do projeto e reaproveitamento de código.

Essa organização foi escolhida porque atende bem aplicações React Native que precisam crescer de forma estruturada, mantendo o código legível e sustentável no médio e longo prazo.

### 2. Qual o papel do BFF nesse cenário?

O BFF atua como uma camada intermediária entre o app mobile e a origem dos dados.

Neste desafio, ele foi responsável por:

- expor endpoints REST simplificados para o frontend
- centralizar a entrega dos dados de produtos
- isolar o app mobile da origem real dos dados
- permitir evolução futura sem impactar diretamente a aplicação cliente

Mesmo usando mock estático neste cenário, o BFF representa uma decisão arquitetural importante porque cria uma fronteira clara entre frontend e backend. Em um ambiente real, essa camada poderia agregar regras como autenticação, composição de respostas, adaptação de payloads e integração com múltiplos serviços.

### 3. Como o Redux-Saga ajuda no controle de efeitos colaterais?

O Redux-Saga foi utilizado para controlar efeitos colaterais assíncronos de forma previsível e desacoplada da camada de UI.

No projeto, ele foi aplicado principalmente no fluxo de:

- busca da lista de produtos
- busca de detalhes do produto

O benefício principal é que a tela não precisa conter lógica de API. Ela apenas dispara actions como:

- `fetchProductsRequest`
- `fetchProductByIdRequest`

As sagas interceptam essas actions, executam as chamadas assíncronas e despacham ações de sucesso ou erro.

As principais vantagens dessa abordagem são:

- melhor separação entre UI e efeitos colaterais
- fluxo assíncrono mais organizado
- maior previsibilidade na atualização do estado
- facilidade para adicionar retry, cancelamento, debounce ou paralelismo futuramente
- melhor testabilidade das regras assíncronas

### 4. Descreva as melhorias de performance aplicadas na aplicação mobile.

Algumas melhorias de performance foram aplicadas para garantir renderização mais eficiente e evitar trabalho desnecessário.

#### Uso de FlatList

A listagem de produtos e a estrutura principal da Home foram ajustadas para utilizar `FlatList`, evitando problemas com `VirtualizedLists` aninhadas e aproveitando melhor a virtualização nativa.

#### Memoização com useMemo

Foram utilizados `useMemo` para cálculos derivados e coleções transformadas, como:

- itens do carrossel
- agrupamento de categorias
- subtotal, desconto e total no pagamento
- textos formatados de valores monetários

Isso reduz recomputações desnecessárias em renderizações sucessivas.

#### Memoização com useCallback

Handlers de interação foram encapsulados com `useCallback`, evitando recriação excessiva de funções e ajudando na estabilidade de props repassadas para componentes filhos.

#### Estado global enxuto

O Redux foi mantido com estado objetivo e derivado por selectors, evitando duplicação de dados e inconsistência entre telas.

#### Controle de renderização

O fluxo foi construído com separação clara entre loading, erro e sucesso, evitando renderizações ambíguas e facilitando o comportamento previsível da interface.

#### Evitar lógica pesada na UI

Regras de negócio, cálculos e navegação foram encapsulados em hooks customizados, reduzindo a complexidade dos componentes visuais.

### 5. Quais boas práticas de desenvolvimento você aplicou neste desafio?

Foram aplicadas diversas boas práticas com foco em qualidade de código e arquitetura.

#### Separação de responsabilidades

A UI foi mantida o mais declarativa possível, enquanto regras de negócio e comportamentos ficaram em hooks e camadas específicas.

#### SOLID e baixo acoplamento

A organização por feature e por camadas reduz dependências indevidas entre módulos e facilita extensão futura.

#### Tipagem forte com TypeScript

Foram utilizados tipos explícitos para entidades, payloads, selectors, estados e navegação, reduzindo erros e melhorando a manutenção.

#### Estados explícitos de tela

Todas as telas principais trataram corretamente estados de:

- loading
- sucesso
- erro
- retry

#### Reaproveitamento de componentes

Foram criados componentes reutilizáveis para partes comuns da interface, como modais, cards e elementos de navegação.

#### Redux como fonte única da verdade

Carrinho e produtos foram tratados no estado global, garantindo consistência entre telas como detalhes, carrinho e pagamento.

#### Fluxo assíncrono desacoplado com Saga

Chamadas REST não ficaram dentro de componentes de apresentação, preservando a responsabilidade única da UI.

#### Navegação organizada

A navegação foi tratada de forma centralizada, com handlers encapsulados em hooks de tela.

#### Padronização de código

Foi adicionada configuração com Husky e lint-staged para reforçar qualidade antes dos commits.

---

## Decisões de arquitetura

### Redux Toolkit + Redux-Saga

A combinação foi escolhida por oferecer:

- reducers mais enxutos
- actions mais simples
- fluxo assíncrono robusto
- melhor organização de side effects

### Separação por feature

Essa abordagem facilita escalar o projeto sem transformar a base em uma estrutura genérica demais ou excessivamente acoplada.

### Hooks customizados por tela

Cada tela concentra sua lógica em um hook próprio, o que melhora leitura, manutenção e testabilidade.

---

## Fluxo implementado

- Splash / InitialTransition
- Home com listagem de produtos
- Detalhes do produto
- Adição ao carrinho
- Carrinho com atualização de quantidades
- Checkout
- Pagamento com voucher
- Modal de processamento de pagamento
- Modal de sucesso
- Limpeza do carrinho após conclusão da compra

---

## Sequência sugerida de commits

```txt
chore: init mobile and bff structure
chore: setup eslint prettier and aliases
feat: implement bff products endpoints with mock data
feat: add products listing with redux saga
feat: add product details flow
feat: implement cart state and interactions
feat: add payment flow with voucher and status modal
fix: resolve flatlist virtualization issue on home
chore: setup husky and lint-staged
docs: add project readme
```

---

## Considerações finais

O projeto foi construído com foco em uma base limpa, tipada e escalável, pronta para evolução. A arquitetura adotada favorece manutenção, clareza de responsabilidades e extensão futura, tanto no mobile quanto no backend.
