import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Filter } from '@/assets/svg';
import {
  Container,
  Header,
  HeaderActionButton,
  HeaderTitle,
  ItemCard,
  ItemDescription,
  ItemImage,
  ItemPrice,
  LoadMoreFooter,
  LoadMoreText,
  Row,
} from './styles';

export type ProductItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  variations: string[];
  gallery: string[];
};

const INITIAL_VISIBLE_ITEMS = 5;
const LOAD_MORE_ITEMS = 5;

export const PRODUCTS_MOCK: ProductItem[] = [
  {
    id: '1',
    name: 'Lorem ipsum dolor sit amet consectetur',
    price: 17,
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    variations: ['Pink', 'M'],
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: '2',
    name: 'Lorem ipsum dolor sit amet consectetur',
    price: 17,
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    variations: ['White', 'P'],
    gallery: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: '3',
    name: 'Lorem ipsum dolor sit amet consectetur',
    price: 17,
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    variations: ['Red', 'G'],
    gallery: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506629905607-d9c297dcbf3c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: '4',
    name: 'Lorem ipsum dolor sit amet consectetur',
    price: 17,
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    variations: ['Black', 'M'],
    gallery: [
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: '5',
    name: 'Lorem ipsum dolor sit amet consectetur',
    price: 17,
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    variations: ['Blue', 'GG'],
    gallery: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: '6',
    name: 'Lorem ipsum dolor sit amet consectetur',
    price: 17,
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    variations: ['Green', 'M'],
    gallery: [
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: '7',
    name: 'Lorem ipsum dolor sit amet consectetur',
    price: 17,
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    variations: ['Pink', 'P'],
    gallery: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: '8',
    name: 'Lorem ipsum dolor sit amet consectetur',
    price: 17,
    image:
      'https://images.unsplash.com/photo-1506629905607-d9c297dcbf3c?auto=format&fit=crop&w=800&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    variations: ['Purple', 'M'],
    gallery: [
      'https://images.unsplash.com/photo-1506629905607-d9c297dcbf3c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: '9',
    name: 'Lorem ipsum dolor sit amet consectetur',
    price: 17,
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    variations: ['Orange', 'G'],
    gallery: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: '10',
    name: 'Lorem ipsum dolor sit amet consectetur',
    price: 17,
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    variations: ['Beige', 'P'],
    gallery: [
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: '11',
    name: 'Lorem ipsum dolor sit amet consectetur',
    price: 17,
    image:
      'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    variations: ['Gray', 'M'],
    gallery: [
      'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506629905607-d9c297dcbf3c?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: '12',
    name: 'Lorem ipsum dolor sit amet consectetur',
    price: 17,
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    variations: ['Brown', 'GG'],
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    ],
  },
];

type RootStackParamList = {
  ProductDetails: {
    product: ProductItem;
  };
};

const formatPrice = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

const AllItems = () => {
  const navigation = useNavigation<any>();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ITEMS);
  const onEndReachedLockedRef = useRef(false);

  const visibleProducts = useMemo(
    () => PRODUCTS_MOCK.slice(0, visibleCount),
    [visibleCount],
  );

  const hasMoreItems = visibleCount < PRODUCTS_MOCK.length;

  const handleLoadMore = useCallback(() => {
    if (!hasMoreItems || onEndReachedLockedRef.current) {
      return;
    }

    onEndReachedLockedRef.current = true;

    setVisibleCount(previous =>
      Math.min(previous + LOAD_MORE_ITEMS, PRODUCTS_MOCK.length),
    );
  }, [hasMoreItems]);

  const handleOpenProduct = useCallback(
    (product: ProductItem) => {
      navigation.navigate('ProductDetails', { product });
    },
    [navigation],
  );

  const keyExtractor = useCallback((item: ProductItem) => item.id, []);

  const renderItem: ListRenderItem<ProductItem> = useCallback(
    ({ item }) => (
      <ItemCard activeOpacity={0.9} onPress={() => handleOpenProduct(item)}>
        <ItemImage source={{ uri: item.image }} resizeMode="cover" />
        <ItemDescription numberOfLines={2}>{item.name}</ItemDescription>
        <ItemPrice>{formatPrice(item.price)}</ItemPrice>
      </ItemCard>
    ),
    [handleOpenProduct],
  );

  const renderFooter = useCallback(() => {
    if (!hasMoreItems) {
      return null;
    }

    return (
      <LoadMoreFooter>
        <LoadMoreText>Carregando mais produtos...</LoadMoreText>
      </LoadMoreFooter>
    );
  }, [hasMoreItems]);

  return (
    <Container>
      <Header>
        <HeaderTitle>Todos os itens</HeaderTitle>

        <HeaderActionButton activeOpacity={0.7}>
          <Filter />
        </HeaderActionButton>
      </Header>

      <FlatList
        data={visibleProducts}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={Row}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2}
        onMomentumScrollBegin={() => {
          onEndReachedLockedRef.current = false;
        }}
        ListFooterComponent={renderFooter}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        removeClippedSubviews
      />
    </Container>
  );
};

export default AllItems;
