import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useState } from 'react';
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
import { addToCart } from '@/features/cart/store/cart.slice';
import { selectIsProductInCart } from '@/features/cart/store/cart.selectors';

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
  const isProductInCart = useAppSelector(selectIsProductInCart(productId));

  const [isFavorite, setIsFavorite] = useState(false);

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

  const handleToggleFavorite = useCallback(() => {
    setIsFavorite(previous => !previous);
  }, []);

  const handleAddToCart = useCallback(() => {
    if (!product || isProductInCart) {
      return;
    }

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      }),
    );
  }, [dispatch, product, isProductInCart]);

  const formattedPrice = useMemo(() => {
    if (!product) {
      return '';
    }

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(product.price);
  }, [product]);

  const addToCartButtonLabel = useMemo(() => {
    return isProductInCart ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho';
  }, [isProductInCart]);

  return {
    product,
    loading,
    error,
    isFavorite,
    isProductInCart,
    formattedPrice,
    addToCartButtonLabel,
    handleGoBack,
    handleRetry,
    handleToggleFavorite,
    handleAddToCart,
  };
};
