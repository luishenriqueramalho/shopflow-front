import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useCallback, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
  selectProductsErrorDetails,
  selectProductsLoadingDetails,
  selectSelectedProduct,
} from '@/features/products/store/products.selectors';
import {
  clearSelectedProduct,
  fetchProductByIdRequest,
} from '@/features/products/store/products.slice';

type RouteParams = {
  productId: string;
};

export const useProductDetails = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();

  const { productId } = route.params;

  const product = useAppSelector(selectSelectedProduct);
  const loading = useAppSelector(selectProductsLoadingDetails);
  const error = useAppSelector(selectProductsErrorDetails);

  useEffect(() => {
    dispatch(fetchProductByIdRequest(productId));

    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [dispatch, productId]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleRetry = useCallback(() => {
    dispatch(fetchProductByIdRequest(productId));
  }, [dispatch, productId]);

  const formattedPrice = useMemo(() => {
    if (!product) {
      return '';
    }

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(product.price);
  }, [product]);

  return {
    product,
    loading,
    error,
    formattedPrice,
    handleGoBack,
    handleRetry,
  };
};
