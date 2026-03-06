import { scale } from '@/theme/scale';
import styled from 'styled-components/native';

type ShippingOptionCardProps = {
  selected: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: #f7f7f7;
`;

export const BackButton = styled.View`
  padding: ${scale(16)}px;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  padding: 20px 18px 28px;
`;

export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #222222;
  margin-bottom: 16px;
`;

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const SectionTitleRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #222222;
`;

export const Badge = styled.View`
  min-width: 28px;
  height: 28px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  padding-horizontal: 8px;
  background-color: #dfe5f5;
  margin-left: 10px;
`;

export const BadgeText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #222222;
`;

export const VoucherButton = styled.TouchableOpacity`
  min-width: 128px;
  height: 40px;
  border-width: 1.5px;
  border-color: #1f5cff;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;
  background-color: #ffffff;
`;

export const VoucherButtonText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #1f5cff;
`;

export const InfoCard = styled.View`
  min-height: 64px;
  border-radius: 14px;
  background-color: #f1f1f1;
  padding: 12px 14px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
`;

export const InfoCardContent = styled.View`
  flex: 1;
  margin-right: 12px;
`;

export const InfoCardTitle = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #222222;
  margin-bottom: 4px;
`;

export const InfoCardDescription = styled.Text`
  font-size: 12px;
  line-height: 18px;
  color: #4b4b4b;
`;

export const EditButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: #1f5cff;
  align-items: center;
  justify-content: center;
`;

export const EditButtonText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: 700;
`;

export const ItemRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const ItemImageWrapper = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-right: 12px;
  position: relative;
  overflow: visible;
`;

export const ItemImage = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const QuantityBadge = styled.View`
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  padding-horizontal: 4px;
  background-color: #dfe5f5;
  align-items: center;
  justify-content: center;
`;

export const QuantityBadgeText = styled.Text`
  font-size: 11px;
  font-weight: 700;
  color: #222222;
`;

export const ItemInfo = styled.View`
  flex: 1;
  margin-right: 12px;
`;

export const ItemName = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #2c2c2c;
`;

export const ItemPrice = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #222222;
`;

export const ShippingOptionCard = styled.TouchableOpacity<ShippingOptionCardProps>`
  min-height: 54px;
  border-radius: 14px;
  padding: 14px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ selected }) => (selected ? '#dfe7ff' : '#ffffff')};
`;

export const RadioOuter = styled.View<ShippingOptionCardProps>`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  border-width: ${({ selected }) => (selected ? '0px' : '1.5px')};
  border-color: #d9d9d9;
  background-color: ${({ selected }) => (selected ? '#1f5cff' : '#ffffff')};
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const RadioInner = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #ffffff;
`;

export const ShippingInfo = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ShippingTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #222222;
  margin-right: 10px;
`;

export const ShippingEta = styled.Text`
  font-size: 13px;
  color: #1f5cff;
`;

export const ShippingPrice = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #222222;
`;

export const DeliveryEstimate = styled.Text`
  font-size: 13px;
  color: #3f3f3f;
  margin-top: 8px;
`;

export const PaymentPill = styled.View`
  align-self: flex-start;
  min-width: 74px;
  height: 34px;
  border-radius: 17px;
  padding-horizontal: 16px;
  background-color: #dfe7ff;
  align-items: center;
  justify-content: center;
`;

export const PaymentPillText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #1f5cff;
`;

export const AppliedVoucherBox = styled.View`
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 12px;
  background-color: #edf3ff;
`;

export const AppliedVoucherTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #1f5cff;
`;

export const AppliedVoucherDescription = styled.Text`
  font-size: 13px;
  color: #333333;
  margin-top: 4px;
`;

export const Footer = styled.View`
  padding: 14px 18px 18px;
  background-color: #ffffff;
  border-top-width: 1px;
  border-top-color: #ececec;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalBox = styled.View``;

export const TotalLabel = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #222222;
`;

export const TotalValue = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #222222;
  margin-top: 4px;
`;

export const DiscountText = styled.Text`
  font-size: 12px;
  color: #1f5cff;
  margin-top: 4px;
`;

export const PayButton = styled.TouchableOpacity`
  width: 146px;
  height: 48px;
  border-radius: 14px;
  background-color: #1f1f1f;
  align-items: center;
  justify-content: center;
`;

export const PayButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`;
