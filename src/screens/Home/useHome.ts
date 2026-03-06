import { useCallback, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchProductsRequest } from '@/features/products/store/products.slice';
import {
  selectProductsErrorList,
  selectProductsList,
  selectProductsLoadingList,
} from '@/features/products/store/products.selectors';
import { Product } from '@/features/products/domain/product.types';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

type CategoryCardItem = {
  id: string;
  name: string;
  count: number;
  images: string[];
};

type CarouselItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: { uri: string } | number;
};

const CATEGORY_LABELS: Record<Product['category'], string> = {
  clothing: 'Roupas',
  shoes: 'Calçados',
  bags: 'Bolsas',
  lingerie: 'Lingerie',
  watch: 'Relógios',
  hoodies: 'Moletons',
};

export const useHome = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectProductsList);
  const loadingProducts = useAppSelector(selectProductsLoadingList);
  const errorProducts = useAppSelector(selectProductsErrorList);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const handleRetryFetchProducts = useCallback(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const handleOpenProductDetails = useCallback(
    (productId: string) => {
      navigation.navigate('ProductDetails', { productId });
    },
    [navigation],
  );

  const formatPrice = useCallback((value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }, []);

  const keyExtractor = useCallback((item: Product) => item.id, []);

  const carouselItems = useMemo<CarouselItem[]>(() => {
    if (!products.length) {
      return [];
    }

    return products.slice(0, 4).map((product, index) => ({
      id: product.id,
      title:
        index === 0
          ? 'Grande Oferta'
          : index === 1
            ? 'Nova Coleção'
            : index === 2
              ? 'Ofertas Exclusivas'
              : 'Melhores Preços',
      subtitle:
        index === 0
          ? 'Até 50% off'
          : index === 1
            ? 'Novidades da estação'
            : index === 2
              ? 'Por tempo limitado'
              : 'Economize mais',
      description:
        index === 0
          ? 'Compre\nAgora'
          : index === 1
            ? 'Veja\nMais'
            : index === 2
              ? 'Só\nHoje'
              : 'Aproveite\nJá',
      image: { uri: product.image },
    }));
  }, [products]);

  const categories = useMemo<CategoryCardItem[]>(() => {
    if (!products.length) {
      return [];
    }

    const grouped = products.reduce<Record<string, CategoryCardItem>>(
      (accumulator, product) => {
        const categoryId = product.category;

        if (!accumulator[categoryId]) {
          accumulator[categoryId] = {
            id: categoryId,
            name: CATEGORY_LABELS[product.category],
            count: 0,
            images: [],
          };
        }

        accumulator[categoryId].count += 1;

        if (accumulator[categoryId].images.length < 4) {
          accumulator[categoryId].images.push(product.image);
        }

        return accumulator;
      },
      {},
    );

    return Object.values(grouped);
  }, [products]);

  return {
    products,
    categories,
    carouselItems,
    loadingProducts,
    errorProducts,
    keyExtractor,
    formatPrice,
    handleRetryFetchProducts,
    handleOpenProductDetails,
  };
};
