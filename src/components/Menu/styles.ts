import styled from 'styled-components/native';
import { Colors } from '@/theme/colors';
import { scale } from '@/theme/scale';

type ActiveProps = {
  isActive: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${scale(12)}px;
  padding-horizontal: ${scale(10)}px;
  background-color: ${Colors.white || '#ffffff'};
  border-top-left-radius: ${scale(20)}px;
  border-top-right-radius: ${scale(20)}px;
`;

export const MenuButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const MenuContent = styled.View`
  align-items: center;
  justify-content: center;
  min-height: ${scale(52)}px;
`;

export const MenuLabel = styled.Text<ActiveProps>`
  margin-top: ${scale(4)}px;
  font-size: ${scale(11)}px;
  font-weight: ${({ isActive }) => (isActive ? '700' : '500')};
  color: ${({ isActive }) =>
    isActive ? Colors.black || '#1f1f1f' : Colors.primary || '#1d4ed8'};
`;

export const MenuIndicator = styled.View<ActiveProps>`
  margin-top: ${scale(6)}px;
  width: ${scale(18)}px;
  height: ${scale(3)}px;
  border-radius: ${scale(999)}px;
  background-color: ${({ isActive }) =>
    isActive ? Colors.black || '#1f1f1f' : 'transparent'};
`;
