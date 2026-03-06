import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
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
import { CategoryItem } from './types';
import { useCategories } from './useCategories';

type CategoriesProps = {
  items: CategoryItem[];
};

const Categories = ({ items }: CategoriesProps) => {
  const controller = useCategories();

  const renderItem: ListRenderItem<CategoryItem> = useCallback(
    ({ item }) => (
      <CategoryCard
        activeOpacity={0.92}
        onPress={() => controller.handleOpenCategory(item)}>
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
    [controller.handleOpenCategory],
  );

  if (!items.length) {
    return null;
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Categorias</HeaderTitle>
        <HeaderAction>Ver tudo</HeaderAction>
      </Header>

      <FlatList
        data={items}
        keyExtractor={controller.keyExtractor}
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
