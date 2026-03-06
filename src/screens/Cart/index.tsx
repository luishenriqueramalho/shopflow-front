import React from 'react';
import { SafeArea } from '@/components/SafeArea/SafeArea';
import { useCart } from './useCart';
import {
  BackButton,
  Badge,
  BadgeText,
  CartItemCard,
  CartItemContent,
  CartItemImage,
  Container,
  DecreaseButton,
  DecreaseButtonText,
  Footer,
  FooterButton,
  FooterButtonText,
  FooterContent,
  FooterTotal,
  FooterTotalLabel,
  Header,
  HeaderLeft,
  HeaderTitle,
  IncreaseButton,
  IncreaseButtonText,
  ItemPrice,
  ItemQuantity,
  ItemSubtitle,
  ItemTitle,
  MainContent,
  QuantityControl,
  QuantityValue,
  RemoveButton,
  RemoveButtonText,
  ShippingCard,
  ShippingContent,
  ShippingEditButton,
  ShippingEditButtonText,
  ShippingSubtitle,
  ShippingTitle,
} from './styles';
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from '@/assets/svg';

const Cart = () => {
  const controller = useCart();

  return (
    <SafeArea edges={['top', 'bottom']}>
      <Container>
        <BackButton>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={controller.handleGoBack}>
            <ArrowLeftIcon />
          </TouchableOpacity>
        </BackButton>

        <MainContent
          data={controller.items}
          keyExtractor={controller.keyExtractor}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <Header>
                <HeaderLeft>
                  <HeaderTitle>Carrinho</HeaderTitle>
                  <Badge>
                    <BadgeText>{controller.itemsCount}</BadgeText>
                  </Badge>
                </HeaderLeft>
              </Header>

              <ShippingCard>
                <ShippingContent>
                  <ShippingTitle>Endereço de entrega</ShippingTitle>
                  <ShippingSubtitle>
                    26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi
                    Minh city
                  </ShippingSubtitle>
                </ShippingContent>

                <ShippingEditButton activeOpacity={0.85}>
                  <ShippingEditButtonText>✎</ShippingEditButtonText>
                </ShippingEditButton>
              </ShippingCard>
            </>
          }
          renderItem={({ item }) => (
            <CartItemCard>
              <CartItemImage source={{ uri: item.image }} resizeMode="cover" />

              <RemoveButton
                activeOpacity={0.85}
                onPress={() => controller.handleRemoveItem(item.id)}>
                <RemoveButtonText>🗑</RemoveButtonText>
              </RemoveButton>

              <CartItemContent>
                <ItemTitle numberOfLines={2}>{item.name}</ItemTitle>
                <ItemSubtitle>Quantidade selecionada</ItemSubtitle>
                <ItemPrice>{controller.formatPrice(item.price)}</ItemPrice>
              </CartItemContent>

              <QuantityControl>
                <DecreaseButton
                  activeOpacity={0.85}
                  onPress={() => controller.handleDecreaseQuantity(item.id)}>
                  <DecreaseButtonText>−</DecreaseButtonText>
                </DecreaseButton>

                <QuantityValue>
                  <ItemQuantity>{item.quantity}</ItemQuantity>
                </QuantityValue>

                <IncreaseButton
                  activeOpacity={0.85}
                  onPress={() => controller.handleIncreaseQuantity(item.id)}>
                  <IncreaseButtonText>+</IncreaseButtonText>
                </IncreaseButton>
              </QuantityControl>
            </CartItemCard>
          )}
        />

        <Footer>
          <FooterContent>
            <FooterTotalLabel>Total</FooterTotalLabel>
            <FooterTotal>{controller.totalFormatted}</FooterTotal>
          </FooterContent>

          <FooterButton
            activeOpacity={controller.items.length ? 0.9 : 1}
            onPress={controller.handleCheckout}
            disabled={!controller.items.length}>
            <FooterButtonText>Checkout</FooterButtonText>
          </FooterButton>
        </Footer>
      </Container>
    </SafeArea>
  );
};

export default Cart;
