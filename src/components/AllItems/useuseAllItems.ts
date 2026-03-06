import { useCallback, useMemo, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Product } from '@/features/products/domain/product.types';

const INITIAL_VISIBLE_ITEMS = 5;
const LOAD_MORE_ITEMS = 5;

const formatPrice = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export const useAllItems = (products: Product[]) => {
  const navigation = useNavigation<any>();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ITEMS);
  const onEndReachedLockedRef = useRef(false);

  const visibleProducts = useMemo(
    () => products.slice(0, visibleCount),
    [products, visibleCount],
  );

  const hasMoreItems = visibleCount < products.length;

  const handleLoadMore = useCallback(() => {
    if (!hasMoreItems || onEndReachedLockedRef.current) {
      return;
    }

    onEndReachedLockedRef.current = true;

    setVisibleCount(previous =>
      Math.min(previous + LOAD_MORE_ITEMS, products.length),
    );
  }, [hasMoreItems, products.length]);

  const handleMomentumScrollBegin = useCallback(() => {
    onEndReachedLockedRef.current = false;
  }, []);

  const handleOpenProduct = useCallback(
    (productId: string) => {
      navigation.navigate('ProductDetails', { productId });
    },
    [navigation],
  );

  const keyExtractor = useCallback((item: Product) => item.id, []);

  return {
    visibleProducts,
    hasMoreItems,
    keyExtractor,
    handleLoadMore,
    handleMomentumScrollBegin,
    handleOpenProduct,
    formatPrice,
  };
};
