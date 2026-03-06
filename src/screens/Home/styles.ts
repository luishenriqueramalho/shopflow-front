import { Colors } from '@/theme/colors';
import { scale } from '@/theme/scale';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Product } from '@/features/products/domain/product.types';

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: ${scale(10)}px;
  justify-content: center;
`;

export const NameApp = styled.View`
  width: 30%;
  align-items: center;
`;

export const NameAppTxt = styled.Text`
  font-size: ${scale(28)}px;
  font-weight: bold;
  line-height: ${scale(36)}px;
`;

export const Search = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${Colors.bgsearch};
  border-radius: ${scale(18)}px;
`;

export const SearchInput = styled.TextInput`
  width: 85%;
  font-size: ${scale(16)}px;
  padding-vertical: ${scale(9)}px;
  padding-horizontal: ${scale(16)}px;
`;

export const CameraVw = styled.View`
  width: 15%;
  align-items: center;
  justify-content: center;
`;

const ProductsListBase = FlatList<Product>;

export const ProductsList = styled(ProductsListBase)`
  flex: 1;
`;

export const contentContainerStyle = {
  paddingBottom: 120,
};

export const ProductCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 12px;
  margin-bottom: 12px;
`;

export const ProductImage = styled.Image`
  width: 84px;
  height: 84px;
  border-radius: 12px;
  margin-right: 12px;
`;

export const ProductInfo = styled.View`
  flex: 1;
`;

export const ProductName = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: #1f1f1f;
  margin-bottom: 8px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #111111;
`;

export const RetryText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #1f5cff;
  margin-top: 8px;
`;
