import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeArea } from '@/components/SafeArea/SafeArea';
import { ArrowLeftIcon, FavoriteProduct } from '@/assets/svg';
import { useProductDetails } from './useProductDetails';
import {
  AddToCartButton,
  AddToCartText,
  BackButton,
  BottomActions,
  Container,
  Content,
  Description,
  ErrorButton,
  ErrorButtonText,
  ErrorText,
  FavoriteButton,
  LoadingText,
  MainImage,
  Price,
  ScrollContainer,
  Title,
} from './styles';

const ProductDetails = () => {
  const controller = useProductDetails();

  return (
    <SafeArea edges={['top', 'bottom']}>
      <Container>
        <ScrollContainer showsVerticalScrollIndicator={false}>
          <BackButton>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={controller.handleGoBack}>
              <ArrowLeftIcon />
            </TouchableOpacity>
          </BackButton>

          {controller.loading ? (
            <Content>
              <LoadingText>Carregando produto...</LoadingText>
            </Content>
          ) : controller.error ? (
            <Content>
              <ErrorText>{controller.error}</ErrorText>

              <ErrorButton
                activeOpacity={0.85}
                onPress={controller.handleRetry}>
                <ErrorButtonText>Tentar novamente</ErrorButtonText>
              </ErrorButton>
            </Content>
          ) : controller.product ? (
            <>
              <MainImage
                source={{ uri: controller.product.image }}
                resizeMode="cover"
              />

              <Content>
                <Price>{controller.formattedPrice}</Price>
                <Title>{controller.product.name}</Title>
                <Description>{controller.product.description}</Description>
              </Content>
            </>
          ) : null}
        </ScrollContainer>
      </Container>

      <Content>
        <BottomActions>
          <FavoriteButton
            activeOpacity={0.85}
            onPress={controller.handleToggleFavorite}>
            <FavoriteProduct favorite={controller.isFavorite} />
          </FavoriteButton>

          <AddToCartButton
            activeOpacity={0.9}
            onPress={controller.handleAddToCart}>
            <AddToCartText>Adicionar ao carrinho</AddToCartText>
          </AddToCartButton>
        </BottomActions>
      </Content>
    </SafeArea>
  );
};

export default ProductDetails;
