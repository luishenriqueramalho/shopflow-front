import { Colors } from '@/theme/colors';
import { scale } from '@/theme/scale';
import styled from 'styled-components/native';

export const Header = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled.Image`
  width: ${scale(120)}px;
  height: ${scale(120)}px;
`;

export const Title = styled.Text`
  font-size: ${scale(48)}px;
  font-weight: bold;
  color: ${Colors.title};
  margin-top: ${scale(24)}px;
  margin-bottom: ${scale(18)}px;
`;

export const SubTitle = styled.Text`
  font-size: ${scale(19)}px;
  font-weight: 300;
  line-height: 33px;
  color: ${Colors.subtitle};
`;

export const Loader = styled.ActivityIndicator`
  margin-top: ${scale(22)}px;
`;
