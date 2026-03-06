import React, { useMemo, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeArea } from '@/components/SafeArea/SafeArea';
import { ArrowLeftIcon, FavoriteIcon, ArrowRightIcon } from '@/assets/svg';
import { ProductItem } from '@/components/AllItems';
import {
  ActionButtonsRow,
  BottomActions,
  BottomContainer,
  BuyNowButton,
  BuyNowText,
  Container,
  Description,
  DetailsContainer,
  FavoriteButton,
  MainImage,
  Price,
  ScrollContainer,
  Thumbnail,
  ThumbnailsRow,
  Title,
  TopActions,
  TopButton,
  VariationBadge,
  VariationLabel,
  VariationsContainer,
  VariationsRow,
} from './styles';

type RouteParams = {
  product: ProductItem;
};

const ProductDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params as RouteParams;

  const [selectedImage, setSelectedImage] = useState(product.image);

  const formattedPrice = useMemo(
    () =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(product.price),
    [product.price],
  );

  return (
    <SafeArea edges={['top', 'bottom']}>
      <Container>
        <ScrollContainer showsVerticalScrollIndicator={false}>
          <TopActions>
            <TopButton activeOpacity={0.8} onPress={() => navigation.goBack()}>
              <ArrowLeftIcon />
            </TopButton>

            <TopButton activeOpacity={0.8}>
              <FavoriteIcon />
            </TopButton>
          </TopActions>

          <MainImage source={{ uri: selectedImage }} resizeMode="cover" />

          <ThumbnailsRow>
            {product.gallery.map((image, index) => (
              <Thumbnail
                key={`${product.id}-${index}`}
                source={{ uri: image }}
                resizeMode="cover"
                isActive={selectedImage === image}
                onPress={() => setSelectedImage(image)}
                activeOpacity={0.85}
              />
            ))}
          </ThumbnailsRow>

          <DetailsContainer>
            <Price>{formattedPrice}</Price>
            <Title>{product.name}</Title>
            <Description>{product.description}</Description>

            <VariationsContainer>
              <VariationLabel>Variações</VariationLabel>

              <VariationsRow>
                {product.variations.map(variation => (
                  <VariationBadge key={variation}>{variation}</VariationBadge>
                ))}
              </VariationsRow>
            </VariationsContainer>

            <ActionButtonsRow>
              <TopButton activeOpacity={0.8}>
                <ArrowRightIcon />
              </TopButton>
            </ActionButtonsRow>
          </DetailsContainer>
        </ScrollContainer>

        <BottomContainer>
          <BottomActions>
            <FavoriteButton activeOpacity={0.85}>
              <FavoriteIcon />
            </FavoriteButton>

            <BuyNowButton activeOpacity={0.9} variant="secondary">
              <BuyNowText variant="secondary">Adicionar ao carrinho</BuyNowText>
            </BuyNowButton>

            <BuyNowButton activeOpacity={0.9} variant="primary">
              <BuyNowText variant="primary">Comprar agora</BuyNowText>
            </BuyNowButton>
          </BottomActions>
        </BottomContainer>
      </Container>
    </SafeArea>
  );
};

export default ProductDetails;
