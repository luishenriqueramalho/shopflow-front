import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Filter } from '@/assets/svg';
import { Product } from '@/features/products/domain/product.types';
import {
  Container,
  Header,
  HeaderActionButton,
  HeaderTitle,
  ItemCard,
  ItemDescription,
  ItemImage,
  ItemPrice,
  LoadMoreFooter,
  LoadMoreText,
  Row,
} from './styles';
import { AllItemsProps } from './types';
import { useAllItems } from './useuseAllItems';

const AllItems = ({ products }: AllItemsProps) => {
  const controller = useAllItems(products);

  const renderItem: ListRenderItem<Product> = useCallback(
    ({ item }) => (
      <ItemCard
        activeOpacity={0.9}
        onPress={() => controller.handleOpenProduct(item.id)}>
        <ItemImage source={{ uri: item.image }} resizeMode="cover" />
        <ItemDescription numberOfLines={2}>{item.name}</ItemDescription>
        <ItemPrice>{controller.formatPrice(item.price)}</ItemPrice>
      </ItemCard>
    ),
    [controller.formatPrice, controller.handleOpenProduct],
  );

  const renderFooter = useCallback(() => {
    if (!controller.hasMoreItems) {
      return null;
    }

    return (
      <LoadMoreFooter>
        <LoadMoreText>Carregando mais produtos...</LoadMoreText>
      </LoadMoreFooter>
    );
  }, [controller.hasMoreItems]);

  if (!products.length) {
    return null;
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Todos os itens</HeaderTitle>

        <HeaderActionButton activeOpacity={0.7}>
          <Filter />
        </HeaderActionButton>
      </Header>

      <FlatList
        data={controller.visibleProducts}
        keyExtractor={controller.keyExtractor}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={Row}
        showsVerticalScrollIndicator={false}
        onEndReached={controller.handleLoadMore}
        onEndReachedThreshold={0.2}
        onMomentumScrollBegin={controller.handleMomentumScrollBegin}
        ListFooterComponent={renderFooter}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        removeClippedSubviews
      />
    </Container>
  );
};

export default AllItems;
