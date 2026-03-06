import React from 'react';
import { SafeArea } from '@/components/SafeArea/SafeArea';
import { VoucherModal } from '@/components/VoucherModal';
import { usePayment } from './usePayment';
import {
  AppliedVoucherBox,
  AppliedVoucherDescription,
  AppliedVoucherTitle,
  BackButton,
  Badge,
  BadgeText,
  Container,
  Content,
  DeliveryEstimate,
  DiscountText,
  EditButton,
  EditButtonText,
  Footer,
  HeaderTitle,
  InfoCard,
  InfoCardContent,
  InfoCardDescription,
  InfoCardTitle,
  ItemImage,
  ItemImageWrapper,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemRow,
  PayButton,
  PayButtonText,
  PaymentPill,
  PaymentPillText,
  QuantityBadge,
  QuantityBadgeText,
  RadioInner,
  RadioOuter,
  ScrollContainer,
  Section,
  SectionHeader,
  SectionTitle,
  SectionTitleRow,
  ShippingEta,
  ShippingInfo,
  ShippingOptionCard,
  ShippingPrice,
  ShippingTitle,
  TotalBox,
  TotalLabel,
  TotalValue,
  VoucherButton,
  VoucherButtonText,
} from './styles';
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from '@/assets/svg';

const Payment = () => {
  const controller = usePayment();

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

        <ScrollContainer showsVerticalScrollIndicator={false}>
          <Content>
            <HeaderTitle>Payment</HeaderTitle>

            <Section>
              <InfoCard>
                <InfoCardContent>
                  <InfoCardTitle>{controller.address.title}</InfoCardTitle>
                  <InfoCardDescription>
                    {controller.address.description}
                  </InfoCardDescription>
                </InfoCardContent>

                <EditButton activeOpacity={0.85}>
                  <EditButtonText>✎</EditButtonText>
                </EditButton>
              </InfoCard>

              <InfoCard>
                <InfoCardContent>
                  <InfoCardTitle>Contact Information</InfoCardTitle>
                  <InfoCardDescription>
                    {controller.contact.phone}
                    {'\n'}
                    {controller.contact.email}
                  </InfoCardDescription>
                </InfoCardContent>

                <EditButton activeOpacity={0.85}>
                  <EditButtonText>✎</EditButtonText>
                </EditButton>
              </InfoCard>
            </Section>

            <Section>
              <SectionHeader>
                <SectionTitleRow>
                  <SectionTitle>Items</SectionTitle>
                  <Badge>
                    <BadgeText>{controller.items.length}</BadgeText>
                  </Badge>
                </SectionTitleRow>

                <VoucherButton
                  activeOpacity={0.85}
                  onPress={controller.handleOpenVoucherModal}>
                  <VoucherButtonText>Add Voucher</VoucherButtonText>
                </VoucherButton>
              </SectionHeader>

              {controller.items.map(item => (
                <ItemRow key={item.id}>
                  <ItemImageWrapper>
                    <ItemImage
                      source={{ uri: item.image }}
                      resizeMode="cover"
                    />
                    <QuantityBadge>
                      <QuantityBadgeText>{item.quantity}</QuantityBadgeText>
                    </QuantityBadge>
                  </ItemImageWrapper>

                  <ItemInfo>
                    <ItemName numberOfLines={2}>{item.name}</ItemName>
                  </ItemInfo>

                  <ItemPrice>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(item.price)}
                  </ItemPrice>
                </ItemRow>
              ))}

              {controller.appliedVoucher ? (
                <AppliedVoucherBox>
                  <AppliedVoucherTitle>
                    Voucher aplicado: {controller.appliedVoucher.title}
                  </AppliedVoucherTitle>
                  <AppliedVoucherDescription>
                    {controller.appliedVoucher.discountPercentage}% de desconto
                  </AppliedVoucherDescription>
                </AppliedVoucherBox>
              ) : null}
            </Section>

            <Section>
              <SectionHeader>
                <SectionTitle>Shipping Options</SectionTitle>
              </SectionHeader>

              {controller.shippingOptions.map(option => {
                const selected =
                  controller.selectedShippingOption === option.id;

                return (
                  <ShippingOptionCard
                    key={option.id}
                    activeOpacity={0.9}
                    selected={selected}
                    onPress={() =>
                      controller.handleSelectShippingOption(option.id)
                    }>
                    <RadioOuter selected={selected}>
                      {selected ? <RadioInner /> : null}
                    </RadioOuter>

                    <ShippingInfo>
                      <ShippingTitle>{option.title}</ShippingTitle>
                      <ShippingEta>{option.etaLabel}</ShippingEta>
                    </ShippingInfo>

                    <ShippingPrice>
                      {option.price === 0
                        ? 'FREE'
                        : new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(option.price)}
                    </ShippingPrice>
                  </ShippingOptionCard>
                );
              })}

              <DeliveryEstimate>
                Delivered on or before Thursday, 23 April 2020
              </DeliveryEstimate>
            </Section>

            <Section>
              <SectionHeader>
                <SectionTitle>Payment Method</SectionTitle>

                <EditButton activeOpacity={0.85}>
                  <EditButtonText>✎</EditButtonText>
                </EditButton>
              </SectionHeader>

              <PaymentPill>
                <PaymentPillText>Card</PaymentPillText>
              </PaymentPill>
            </Section>
          </Content>
        </ScrollContainer>

        <Footer>
          <TotalBox>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>{controller.totalFormatted}</TotalValue>

            {controller.appliedVoucher ? (
              <DiscountText>
                Desconto aplicado: {controller.discountFormatted}
              </DiscountText>
            ) : null}
          </TotalBox>

          <PayButton activeOpacity={0.9}>
            <PayButtonText>Pay</PayButtonText>
          </PayButton>
        </Footer>

        <VoucherModal
          visible={controller.isVoucherModalVisible}
          vouchers={controller.vouchers}
          onClose={controller.handleCloseVoucherModal}
          onApply={controller.handleApplyVoucher}
        />
      </Container>
    </SafeArea>
  );
};

export default Payment;
