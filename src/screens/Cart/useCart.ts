import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '@/features/cart/store/cart.selectors';
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeFromCart,
} from '@/features/cart/store/cart.slice';
import { CartItem } from '@/features/cart/domain/cart.types';

export const useCart = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();

  const items = useAppSelector(selectCartItems);
  const itemsCount = useAppSelector(selectCartItemsCount);
  const total = useAppSelector(selectCartTotal);

  const handleIncreaseQuantity = useCallback(
    (itemId: string) => {
      dispatch(increaseCartItemQuantity(itemId));
    },
    [dispatch],
  );

  const handleDecreaseQuantity = useCallback(
    (itemId: string) => {
      dispatch(decreaseCartItemQuantity(itemId));
    },
    [dispatch],
  );

  const handleRemoveItem = useCallback(
    (itemId: string) => {
      dispatch(removeFromCart(itemId));
    },
    [dispatch],
  );

  const totalFormatted = useMemo(
    () =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(total),
    [total],
  );

  const formatPrice = useCallback((value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }, []);

  const keyExtractor = useCallback((item: CartItem) => item.id, []);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleCheckout = useCallback(() => {
    if (!items.length) {
      return;
    }

    navigation.navigate('Payment');
  }, [items.length, navigation]);

  return {
    navigation,
    items,
    itemsCount,
    totalFormatted,
    keyExtractor,
    formatPrice,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveItem,
    handleGoBack,
    handleCheckout,
  };
};
