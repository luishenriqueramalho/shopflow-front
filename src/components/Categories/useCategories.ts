import { useCallback } from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { CategoryItem } from './types';

export const useCategories = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleOpenCategory = useCallback(
    (category: CategoryItem) => {
      navigation.navigate('CategoryProducts', {
        categoryId: category.id,
        categoryName: category.name,
      });
    },
    [navigation],
  );

  const keyExtractor = useCallback((item: CategoryItem) => item.id, []);

  return {
    handleOpenCategory,
    keyExtractor,
  };
};
