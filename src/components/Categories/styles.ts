import { Image } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '@/theme/colors';
import { scale } from '@/theme/scale';

export const Container = styled.View`
  width: 100%;
  margin-top: ${scale(24)}px;
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
  color: ${Colors.black || '#1f1f1f'};
`;

export const HeaderAction = styled.Text`
  font-size: ${scale(16)}px;
  font-weight: 600;
  color: ${Colors.black || '#1f1f1f'};
`;

export const Row = {
  justifyContent: 'space-between',
  marginBottom: scale(16),
};

export const CategoryCard = styled.TouchableOpacity`
  width: 48.2%;
  background-color: ${Colors.white || '#ffffff'};
  border-radius: ${scale(16)}px;
  padding: ${scale(8)}px;
  shadow-color: #000;
  shadow-opacity: 0.08;
  shadow-radius: 10px;
  shadow-offset: 0px 3px;
  elevation: 3;
`;

export const ImagesGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ImageItem = styled(Image)`
  width: 48.5%;
  height: ${scale(86)}px;
  border-radius: ${scale(10)}px;
  margin-bottom: ${scale(6)}px;
  background-color: #ececec;
`;

export const CategoryFooter = styled.View`
  margin-top: ${scale(2)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryName = styled.Text`
  flex: 1;
  font-size: ${scale(16)}px;
  font-weight: 700;
  color: ${Colors.black || '#1f1f1f'};
  margin-right: ${scale(8)}px;
`;

export const CategoryCount = styled.Text`
  min-width: ${scale(42)}px;
  text-align: center;
  padding-vertical: ${scale(4)}px;
  padding-horizontal: ${scale(8)}px;
  border-radius: ${scale(10)}px;
  font-size: ${scale(12)}px;
  font-weight: 700;
  color: ${Colors.black || '#1f1f1f'};
  background-color: #e8eefc;
`;
