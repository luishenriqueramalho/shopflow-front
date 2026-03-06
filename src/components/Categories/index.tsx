import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  CategoryCard,
  CategoryFooter,
  CategoryName,
  CategoryCount,
  Container,
  Header,
  HeaderAction,
  HeaderTitle,
  ImageItem,
  ImagesGrid,
  Row,
} from './styles';

export type CategoryItem = {
  id: string;
  name: string;
  count: number;
  images: string[];
};

const CATEGORIES_MOCK: CategoryItem[] = [
  {
    id: 'clothing',
    name: 'Roupas',
    count: 109,
    images: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'shoes',
    name: 'Calçados',
    count: 530,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'bags',
    name: 'Bolsas',
    count: 87,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'lingerie',
    name: 'Lingerie',
    count: 218,
    images: [
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'watch',
    name: 'Relógios',
    count: 218,
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'hoodies',
    name: 'Moletons',
    count: 218,
    images: [
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    ],
  },
];

const Categories = () => {
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

  const renderItem: ListRenderItem<CategoryItem> = useCallback(
    ({ item }) => (
      <CategoryCard
        activeOpacity={0.92}
        onPress={() => handleOpenCategory(item)}>
        <ImagesGrid>
          {item.images.slice(0, 4).map((image, index) => (
            <ImageItem
              key={`${item.id}-${index}`}
              source={{ uri: image }}
              resizeMode="cover"
            />
          ))}
        </ImagesGrid>

        <CategoryFooter>
          <CategoryName numberOfLines={1}>{item.name}</CategoryName>
          <CategoryCount>{item.count}</CategoryCount>
        </CategoryFooter>
      </CategoryCard>
    ),
    [handleOpenCategory],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>Categorias</HeaderTitle>
        <HeaderAction>Ver tudo</HeaderAction>
      </Header>

      <FlatList
        data={CATEGORIES_MOCK}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={Row}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
      />
    </Container>
  );
};

export default Categories;
