import styled from 'styled-components/native';
import { Image } from 'react-native';
import { Colors } from '@/theme/colors';
import { scale } from '@/theme/scale';

type ThumbnailProps = {
  isActive: boolean;
};

type ButtonVariant = {
  variant: 'primary' | 'secondary';
};

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white || '#ffffff'};
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const TopActions = styled.View`
  position: absolute;
  top: ${scale(12)}px;
  left: ${scale(16)}px;
  right: ${scale(16)}px;
  z-index: 10;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TopButton = styled.TouchableOpacity`
  width: ${scale(40)}px;
  height: ${scale(40)}px;
  border-radius: ${scale(20)}px;
  background-color: rgba(255, 255, 255, 0.9);
  align-items: center;
  justify-content: center;
`;

export const MainImage = styled(Image)`
  width: 100%;
  height: ${scale(365)}px;
  background-color: #f2f2f2;
`;

export const ThumbnailsRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${scale(12)}px ${scale(16)}px ${scale(4)}px;
`;

export const Thumbnail = styled.TouchableOpacity<ThumbnailProps>`
  width: ${scale(12)}px;
  height: ${scale(12)}px;
  border-radius: ${scale(999)}px;
  margin: 0 ${scale(5)}px;
  background-color: ${({ isActive }) =>
    isActive ? Colors.primary || '#1d4ed8' : '#c7d2fe'};
`;

export const DetailsContainer = styled.View`
  padding: ${scale(12)}px ${scale(16)}px ${scale(24)}px;
`;

export const Price = styled.Text`
  font-size: ${scale(22)}px;
  font-weight: 700;
  color: ${Colors.black || '#111111'};
`;

export const Title = styled.Text`
  margin-top: ${scale(12)}px;
  font-size: ${scale(18)}px;
  line-height: ${scale(24)}px;
  font-weight: 500;
  color: ${Colors.black || '#111111'};
`;

export const Description = styled.Text`
  margin-top: ${scale(12)}px;
  font-size: ${scale(15)}px;
  line-height: ${scale(22)}px;
  color: ${Colors.gray600 || '#5f6368'};
`;

export const VariationsContainer = styled.View`
  margin-top: ${scale(24)}px;
`;

export const VariationLabel = styled.Text`
  font-size: ${scale(16)}px;
  font-weight: 700;
  color: ${Colors.black || '#111111'};
`;

export const VariationsRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${scale(10)}px;
`;

export const VariationBadge = styled.Text`
  margin-right: ${scale(10)}px;
  padding: ${scale(10)}px ${scale(14)}px;
  border-radius: ${scale(10)}px;
  background-color: #f3f4f6;
  color: ${Colors.black || '#111111'};
  font-size: ${scale(14)}px;
  font-weight: 500;
`;

export const ActionButtonsRow = styled.View`
  margin-top: ${scale(20)}px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const BottomContainer = styled.View`
  padding: ${scale(12)}px ${scale(16)}px ${scale(20)}px;
  background-color: ${Colors.white || '#ffffff'};
`;

export const BottomActions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FavoriteButton = styled.TouchableOpacity`
  width: ${scale(44)}px;
  height: ${scale(44)}px;
  border-radius: ${scale(14)}px;
  background-color: #f4f4f5;
  align-items: center;
  justify-content: center;
`;

export const BuyNowButton = styled.TouchableOpacity<ButtonVariant>`
  flex: 1;
  height: ${scale(44)}px;
  border-radius: ${scale(14)}px;
  align-items: center;
  justify-content: center;
  margin-left: ${scale(10)}px;
  background-color: ${({ variant }) =>
    variant === 'primary'
      ? Colors.primary || '#1d4ed8'
      : Colors.black || '#1f1f1f'};
`;

export const BuyNowText = styled.Text<ButtonVariant>`
  font-size: ${scale(14)}px;
  font-weight: 600;
  color: #ffffff;
`;
