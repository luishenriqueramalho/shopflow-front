import styled from 'styled-components/native';
import { Image, ViewStyle } from 'react-native';
import { Colors } from '@/theme/colors';
import { scale } from '@/theme/scale';

export const Container = styled.View`
  width: 100%;
  margin-top: ${scale(24)}px;
  margin-bottom: ${scale(24)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${scale(16)}px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${scale(22)}px;
  font-weight: 700;
  color: ${Colors.black1 || '#1f1f1f'};
`;

export const HeaderActionButton = styled.TouchableOpacity`
  width: ${scale(32)}px;
  height: ${scale(32)}px;
  align-items: center;
  justify-content: center;
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
  color: ${Colors.black1 || '#1f1f1f'};
`;

export const ItemPrice = styled.Text`
  margin-top: ${scale(6)}px;
  font-size: ${scale(18)}px;
  line-height: ${scale(24)}px;
  font-weight: 700;
  color: ${Colors.black1 || '#1f1f1f'};
`;

export const LoadMoreFooter = styled.View`
  padding-top: ${scale(8)}px;
  padding-bottom: ${scale(12)}px;
`;

export const LoadMoreText = styled.Text`
  text-align: center;
  font-size: ${scale(14)}px;
  color: ${Colors.gray600 || '#6b7280'};
`;
