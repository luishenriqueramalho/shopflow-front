import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(17, 17, 17, 0.18);
  justify-content: center;
  align-items: center;
  padding-horizontal: 16px;
`;

export const Card = styled.View`
  width: 100%;
  background-color: #ffffff;
  border-radius: 24px;
  align-items: center;
  padding: 56px 24px 24px;
  shadow-color: #000000;
  shadow-opacity: 0.12;
  shadow-radius: 14px;
  shadow-offset: 0px 6px;
  elevation: 8;
`;

export const FloatingIconCircle = styled.View`
  position: absolute;
  top: -34px;
  width: 68px;
  height: 68px;
  border-radius: 34px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  shadow-color: #000000;
  shadow-opacity: 0.12;
  shadow-radius: 12px;
  shadow-offset: 0px 4px;
  elevation: 6;
`;

export const SuccessCheck = styled.Text`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  overflow: hidden;
  text-align: center;
  line-height: 42px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  background-color: #3f6df6;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #151515;
  text-align: center;
`;

export const Description = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  color: #2f2f2f;
  text-align: center;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-top: 28px;
  min-width: 170px;
  height: 42px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  background-color: #e9e9ee;
  padding-horizontal: 18px;
`;

export const ActionButtonText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #232323;
`;
