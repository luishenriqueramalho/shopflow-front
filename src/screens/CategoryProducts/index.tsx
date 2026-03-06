import React, { useCallback } from 'react';
import { SafeArea } from '@/components/SafeArea/SafeArea';
import { Scroll, Wrapper } from '@/theme/global';
import {
  BackButtonRow,
  Container,
  EmptyText,
  HeaderSubtitle,
  HeaderTitle,
  ItemCard,
  ItemDescription,
  ItemImage,
  ItemPrice,
  Row,
} from './styles';
import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from '@/assets/svg';
import { useCategoryProducts } from './useCategoryProducts';
import { Product } from '@/features/products/domain/product.types';

const formatPrice = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

const CategoryProducts = () => {
  const controller = useCategoryProducts();

  const renderItem: ListRenderItem<Product> = useCallback(
    ({ item }) => (
      <ItemCard
        activeOpacity={0.9}
        onPress={() => controller.handleOpenProductDetails(item.id)}>
        <ItemImage source={{ uri: item.image }} resizeMode="cover" />
        <ItemDescription numberOfLines={2}>{item.name}</ItemDescription>
        <ItemPrice>{formatPrice(item.price)}</ItemPrice>
      </ItemCard>
    ),
    [controller],
  );

  return (
    <SafeArea edges={['top', 'bottom']}>
      <Scroll>
        <Wrapper>
          <Container>
            <BackButtonRow>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={controller.handleGoBack}>
                <ArrowLeftIcon />
              </TouchableOpacity>
            </BackButtonRow>

            <HeaderTitle>{controller.categoryName}</HeaderTitle>
            <HeaderSubtitle>
              {controller.filteredProducts.length} item(ns)
            </HeaderSubtitle>

            {controller.filteredProducts.length === 0 ? (
              <EmptyText>Nenhum produto encontrado nesta categoria.</EmptyText>
            ) : (
              <FlatList
                data={controller.filteredProducts}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={2}
                columnWrapperStyle={Row}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews
              />
            )}
          </Container>
        </Wrapper>
      </Scroll>
    </SafeArea>
  );
};

export default CategoryProducts;
