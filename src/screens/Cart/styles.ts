import { FlatList, Image } from 'react-native';
import styled from 'styled-components/native';
import { scale } from '@/theme/scale';
import { Colors } from '@/theme/colors';

export const Container = styled.View`
  flex: 1;
  background-color: #f7f7f7;
`;

export const BackButton = styled.View`
  padding: ${scale(16)}px;
`;

export const MainContent = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: scale(16),
    paddingTop: scale(16),
    paddingBottom: scale(120),
  },
})`` as unknown as typeof FlatList;

export const Header = styled.View`
  margin-bottom: ${scale(18)}px;
`;

export const HeaderLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: ${scale(24)}px;
  font-weight: 700;
  color: ${Colors.black || '#1f1f1f'};
`;

export const Badge = styled.View`
  min-width: ${scale(28)}px;
  height: ${scale(28)}px;
  margin-left: ${scale(10)}px;
  border-radius: ${scale(14)}px;
  background-color: #e7ebf7;
  align-items: center;
  justify-content: center;
  padding-horizontal: ${scale(8)}px;
`;

export const BadgeText = styled.Text`
  font-size: ${scale(14)}px;
  font-weight: 700;
  color: ${Colors.black || '#1f1f1f'};
`;

export const ShippingCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${scale(14)}px;
  border-radius: ${scale(16)}px;
  background-color: #ffffff;
  margin-bottom: ${scale(18)}px;
`;

export const ShippingContent = styled.View`
  flex: 1;
  margin-right: ${scale(12)}px;
`;

export const ShippingTitle = styled.Text`
  font-size: ${scale(16)}px;
  font-weight: 700;
  color: ${Colors.black || '#1f1f1f'};
  margin-bottom: ${scale(6)}px;
`;

export const ShippingSubtitle = styled.Text`
  font-size: ${scale(12)}px;
  line-height: ${scale(18)}px;
  color: #525252;
`;

export const ShippingEditButton = styled.TouchableOpacity`
  width: ${scale(38)}px;
  height: ${scale(38)}px;
  border-radius: ${scale(19)}px;
  align-items: center;
  justify-content: center;
  background-color: #1256f2;
`;

export const ShippingEditButtonText = styled.Text`
  font-size: ${scale(16)}px;
  color: #ffffff;
  font-weight: 700;
`;

export const CartItemCard = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${scale(18)}px;
`;

export const CartItemImage = styled(Image)`
  width: ${scale(112)}px;
  height: ${scale(112)}px;
  border-radius: ${scale(14)}px;
  background-color: #ececec;
`;

export const RemoveButton = styled.TouchableOpacity`
  position: absolute;
  left: ${scale(8)}px;
  bottom: ${scale(8)}px;
  width: ${scale(32)}px;
  height: ${scale(32)}px;
  border-radius: ${scale(16)}px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const RemoveButtonText = styled.Text`
  font-size: ${scale(14)}px;
`;

export const CartItemContent = styled.View`
  flex: 1;
  margin-left: ${scale(12)}px;
  margin-right: ${scale(8)}px;
`;

export const ItemTitle = styled.Text`
  font-size: ${scale(16)}px;
  line-height: ${scale(22)}px;
  color: ${Colors.black || '#1f1f1f'};
`;

export const ItemSubtitle = styled.Text`
  margin-top: ${scale(8)}px;
  font-size: ${scale(14)}px;
  line-height: ${scale(20)}px;
  color: ${Colors.black || '#1f1f1f'};
`;

export const ItemPrice = styled.Text`
  margin-top: ${scale(10)}px;
  font-size: ${scale(18)}px;
  font-weight: 700;
  color: ${Colors.black || '#1f1f1f'};
`;

export const QuantityControl = styled.View`
  align-items: center;
  justify-content: center;
`;

export const DecreaseButton = styled.TouchableOpacity`
  width: ${scale(36)}px;
  height: ${scale(36)}px;
  border-radius: ${scale(18)}px;
  border-width: 2px;
  border-color: #1256f2;
  align-items: center;
  justify-content: center;
`;

export const DecreaseButtonText = styled.Text`
  font-size: ${scale(20)}px;
  font-weight: 700;
  color: #1256f2;
`;

export const QuantityValue = styled.View`
  min-width: ${scale(42)}px;
  height: ${scale(36)}px;
  border-radius: ${scale(10)}px;
  background-color: #eef2ff;
  align-items: center;
  justify-content: center;
  margin-vertical: ${scale(8)}px;
`;

export const ItemQuantity = styled.Text`
  font-size: ${scale(15)}px;
  font-weight: 600;
  color: ${Colors.black || '#1f1f1f'};
`;

export const IncreaseButton = styled.TouchableOpacity`
  width: ${scale(36)}px;
  height: ${scale(36)}px;
  border-radius: ${scale(18)}px;
  border-width: 2px;
  border-color: #1256f2;
  align-items: center;
  justify-content: center;
`;

export const IncreaseButtonText = styled.Text`
  font-size: ${scale(20)}px;
  font-weight: 700;
  color: #1256f2;
`;

export const Footer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${scale(16)}px;
  background-color: #ffffff;
  border-top-width: 1px;
  border-top-color: #ececec;
`;

export const FooterContent = styled.View`
  flex: 1;
`;

export const FooterTotalLabel = styled.Text`
  font-size: ${scale(16)}px;
  font-weight: 700;
  color: ${Colors.black || '#1f1f1f'};
`;

export const FooterTotal = styled.Text`
  margin-top: ${scale(4)}px;
  font-size: ${scale(18)}px;
  font-weight: 700;
  color: ${Colors.black || '#1f1f1f'};
`;

export const FooterButton = styled.TouchableOpacity`
  width: ${scale(118)}px;
  height: ${scale(52)}px;
  border-radius: ${scale(14)}px;
  background-color: #1256f2;
  align-items: center;
  justify-content: center;
`;

export const FooterButtonText = styled.Text`
  font-size: ${scale(16)}px;
  font-weight: 500;
  color: #ffffff;
`;
