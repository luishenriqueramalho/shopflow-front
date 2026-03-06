import { ImageBackground } from 'react-native';
import { Colors } from '@/theme/colors';
import { scale } from '@/theme/scale';
import styled from 'styled-components/native';

type DotProps = {
  isActive: boolean;
};

export const Container = styled.View`
  width: 100%;
  margin-top: ${scale(17)}px;
`;

export const Card = styled.TouchableOpacity`
  align-self: center;
`;

export const ImageBackgroundStyled = styled(ImageBackground)`
  height: ${scale(190)}px;
  border-radius: ${scale(24)}px;
  overflow: hidden;
  justify-content: center;
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.08);
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${scale(24)}px;
`;

export const Title = styled.Text`
  font-size: ${scale(28)}px;
  line-height: ${scale(34)}px;
  font-weight: 700;
  color: ${Colors.white || '#ffffff'};
`;

export const Subtitle = styled.Text`
  margin-top: ${scale(8)}px;
  font-size: ${scale(18)}px;
  line-height: ${scale(24)}px;
  font-weight: 600;
  color: ${Colors.white || '#ffffff'};
`;

export const Description = styled.Text`
  font-size: ${scale(18)}px;
  line-height: ${scale(24)}px;
  font-weight: 700;
  color: ${Colors.white || '#ffffff'};
`;

export const DotsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${scale(16)}px;
`;

export const Dot = styled.View<DotProps>`
  width: ${({ isActive }) => (isActive ? scale(32) : scale(12))}px;
  height: ${scale(12)}px;
  border-radius: ${scale(999)}px;
  margin: 0 ${scale(6)}px;
  background-color: ${({ isActive }) =>
    isActive ? Colors.primary || '#1d4ed8' : '#c7d2fe'};
`;
