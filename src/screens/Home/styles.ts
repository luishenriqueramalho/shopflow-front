import { Colors } from '@/theme/colors';
import { scale } from '@/theme/scale';
import styled from 'styled-components/native';

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
