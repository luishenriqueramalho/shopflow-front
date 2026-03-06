import styled from 'styled-components/native';
import { scale } from './scale';
import { Platform } from 'react-native';

export const Wrapper = styled.View`
  flex: 1;
  padding-horizontal: ${scale(16)}px;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  keyboardShouldPersistTaps: 'handled',
})`
  flex: 1;
`;

export const KBoard = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'padding',
  keyboardVerticalOffset: Platform.OS === 'ios' ? 40 : 0,
})`
  flex: 1;
`;
