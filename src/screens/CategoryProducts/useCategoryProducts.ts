import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import { useAppSelector } from '@/app/store/hooks';
import { selectProductsList } from '@/features/products/store/products.selectors';
import { Product } from '@/features/products/domain/product.types';

type RouteParams = {
  categoryId: Product['category'];
  categoryName: string;
};

export const useCategoryProducts = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const products = useAppSelector(selectProductsList);

  const { categoryId, categoryName } = route.params;

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const filteredProducts = useMemo(
    () => products.filter(product => product.category === categoryId),
    [categoryId, products],
  );

  const formattedCategoryName = useMemo(() => categoryName, [categoryName]);

  return {
    categoryId,
    categoryName: formattedCategoryName,
    filteredProducts,
    handleGoBack,
  };
};
