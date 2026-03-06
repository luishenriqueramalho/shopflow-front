import styled from 'styled-components/native';

export const Overlay = styled.Pressable`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.18);
  justify-content: flex-end;
`;

export const BottomSheet = styled.View`
  background-color: #ffffff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 24px 16px 24px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #1f1f1f;
  margin-bottom: 20px;
`;

export const VoucherList = styled.View`
  gap: 12px;
`;

export const VoucherCard = styled.View`
  border-width: 1.5px;
  border-color: #1f5cff;
  border-radius: 14px;
  overflow: hidden;
  background-color: #ffffff;
`;

export const VoucherHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px 8px;
  border-bottom-width: 1px;
  border-bottom-color: #b9c9ff;
  border-style: dashed;
`;

export const VoucherLabel = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #1f5cff;
`;

export const ValidUntilBadge = styled.View`
  background-color: #ffe5d6;
  border-radius: 10px;
  padding: 4px 8px;
`;

export const ValidUntilText = styled.Text`
  font-size: 11px;
  font-weight: 500;
  color: #4a4a4a;
`;

export const VoucherContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
`;

export const VoucherInfo = styled.View`
  flex: 1;
  margin-right: 12px;
`;

export const VoucherName = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #1f1f1f;
  margin-bottom: 4px;
`;

export const VoucherDescription = styled.Text`
  font-size: 13px;
  color: #3f3f3f;
`;

export const ApplyButton = styled.TouchableOpacity`
  min-width: 84px;
  height: 36px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: #1f5cff;
`;

export const ApplyButtonText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
`;
