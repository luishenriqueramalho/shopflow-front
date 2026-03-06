import styled from 'styled-components/native';
import { Colors } from '@/theme/colors';
import { scale } from '@/theme/scale';
import { Image, ViewStyle } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding-top: ${scale(12)}px;
`;

export const BackButtonRow = styled.View`
  margin-bottom: ${scale(16)}px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${scale(24)}px;
  font-weight: 700;
  color: ${Colors.black || '#1f1f1f'};
`;

export const HeaderSubtitle = styled.Text`
  margin-top: ${scale(6)}px;
  font-size: ${scale(14)}px;
  color: ${Colors.gray600 || '#6b7280'};
`;

export const EmptyText = styled.Text`
  margin-top: ${scale(24)}px;
  font-size: ${scale(16)}px;
  line-height: ${scale(24)}px;
  color: ${Colors.black || '#1f1f1f'};
`;

export const Row: ViewStyle = {
  justifyContent: 'space-between',
  marginBottom: scale(16),
};

export const ItemCard = styled.TouchableOpacity`
  width: 48.2%;
`;

export const ItemImage = styled(Image)`
  width: 100%;
  height: ${scale(190)}px;
  border-radius: ${scale(10)}px;
  background-color: #ececec;
`;

export const ItemDescription = styled.Text`
  margin-top: ${scale(8)}px;
  font-size: ${scale(16)}px;
  line-height: ${scale(22)}px;
  font-weight: 400;
  color: ${Colors.black || '#1f1f1f'};
`;

export const ItemPrice = styled.Text`
  margin-top: ${scale(6)}px;
  font-size: ${scale(18)}px;
  line-height: ${scale(24)}px;
  font-weight: 700;
  color: ${Colors.black || '#1f1f1f'};
`;
