import styled from 'styled-components/native';
import { Image } from 'react-native';
import { Colors } from '@/theme/colors';
import { scale } from '@/theme/scale';

type Props = {
  disabled?: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white || '#ffffff'};
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const BackButton = styled.View`
  padding: ${scale(16)}px;
`;

export const MainImage = styled(Image)`
  width: 100%;
  height: ${scale(360)}px;
  background-color: #f2f2f2;
`;

export const Content = styled.View`
  padding: ${scale(20)}px ${scale(16)}px ${scale(24)}px;
`;

export const Price = styled.Text`
  font-size: ${scale(24)}px;
  line-height: ${scale(30)}px;
  font-weight: 700;
  color: ${Colors.black || '#111111'};
`;

export const Title = styled.Text`
  margin-top: ${scale(12)}px;
  font-size: ${scale(20)}px;
  line-height: ${scale(28)}px;
  font-weight: 600;
  color: ${Colors.black || '#111111'};
`;

export const Description = styled.Text`
  margin-top: ${scale(16)}px;
  font-size: ${scale(16)}px;
  line-height: ${scale(24)}px;
  color: ${Colors.gray600 || '#5f6368'};
`;

export const BottomActions = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${scale(28)}px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  width: ${scale(60)}px;
  height: ${scale(60)}px;
  border-radius: ${scale(18)}px;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
`;

export const AddToCartButton = styled.TouchableOpacity<Props>`
  flex: 1;
  height: 56px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ disabled }) => (disabled ? '#A0A0A0' : '#111111')};
`;

export const AddToCartText = styled.Text`
  font-size: ${scale(16)}px;
  font-weight: 600;
  color: ${Colors.white};
`;

export const LoadingText = styled.Text`
  font-size: ${scale(16)}px;
  color: ${Colors.black || '#111111'};
`;

export const ErrorText = styled.Text`
  font-size: ${scale(16)}px;
  line-height: ${scale(24)}px;
  color: #dc2626;
`;

export const ErrorButton = styled.TouchableOpacity`
  margin-top: ${scale(16)}px;
  height: ${scale(44)}px;
  border-radius: ${scale(12)}px;
  background-color: ${Colors.black || '#111111'};
  align-items: center;
  justify-content: center;
`;

export const ErrorButtonText = styled.Text`
  font-size: ${scale(14)}px;
  font-weight: 600;
  color: #ffffff;
`;
