import { SafeArea } from '@/components/SafeArea/SafeArea';
import { Wrapper } from '@/theme/global';
import React from 'react';
import {
  CameraVw,
  Header,
  NameApp,
  NameAppTxt,
  Search,
  SearchInput,
  ProductsList,
  contentContainerStyle,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  RetryText,
} from './styles';
import { Camera } from '@/assets/svg';
import Carousel from '@/components/Carousel';
import Categories from '@/components/Categories';
import Menu from '@/components/Menu';
import { useHome } from './useHome';
import { ListRenderItem, Text } from 'react-native';
import { Product } from '@/features/products/domain/product.types';

const Home = () => {
  const controller = useHome();

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard
      activeOpacity={0.9}
      onPress={() => controller.handleOpenProductDetails(item.id)}>
      <ProductImage source={{ uri: item.image }} resizeMode="cover" />

      <ProductInfo>
        <ProductName numberOfLines={2}>{item.name}</ProductName>
        <ProductPrice>{controller.formatPrice(item.price)}</ProductPrice>
      </ProductInfo>
    </ProductCard>
  );

  return (
    <SafeArea edges={['top', 'bottom']}>
      <Wrapper>
        {controller.loadingProducts ? (
          <Text>Carregando produtos...</Text>
        ) : controller.errorProducts ? (
          <>
            <Text>{controller.errorProducts}</Text>
            <RetryText onPress={controller.handleRetryFetchProducts}>
              Tentar novamente
            </RetryText>
          </>
        ) : (
          <ProductsList
            data={controller.products}
            keyExtractor={controller.keyExtractor}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={contentContainerStyle}
            ListHeaderComponent={
              <>
                <Header>
                  <NameApp>
                    <NameAppTxt>SHOP</NameAppTxt>
                  </NameApp>

                  <Search>
                    <SearchInput placeholder="Buscar" />
                    <CameraVw>
                      <Camera />
                    </CameraVw>
                  </Search>
                </Header>

                <Carousel items={controller.carouselItems} />
                <Categories items={controller.categories} />
              </>
            }
            renderItem={renderItem}
          />
        )}

        <Menu />
      </Wrapper>
    </SafeArea>
  );
};

export default Home;
