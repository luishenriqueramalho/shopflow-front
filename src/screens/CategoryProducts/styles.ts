import styled from 'styled-components/native';
import { Colors } from '@/theme/colors';
import { scale } from '@/theme/scale';

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
