import React from 'react';
import { Modal } from 'react-native';
import {
  ApplyButton,
  ApplyButtonText,
  BottomSheet,
  Overlay,
  Title,
  ValidUntilBadge,
  ValidUntilText,
  VoucherCard,
  VoucherContent,
  VoucherDescription,
  VoucherHeader,
  VoucherInfo,
  VoucherLabel,
  VoucherList,
  VoucherName,
} from './styles';
import { Voucher } from '@/screens/Payment/types';

type VoucherModalProps = {
  visible: boolean;
  vouchers: Voucher[];
  onClose: () => void;
  onApply: (voucher: Voucher) => void;
};

export const VoucherModal = ({
  visible,
  vouchers,
  onClose,
  onApply,
}: VoucherModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={onClose}>
      <Overlay onPress={onClose}>
        <BottomSheet>
          <Title>Active Vouchers</Title>

          <VoucherList>
            {vouchers.map(voucher => (
              <VoucherCard key={voucher.id}>
                <VoucherHeader>
                  <VoucherLabel>Voucher</VoucherLabel>

                  <ValidUntilBadge>
                    <ValidUntilText>
                      Valid Until {voucher.validUntil}
                    </ValidUntilText>
                  </ValidUntilBadge>
                </VoucherHeader>

                <VoucherContent>
                  <VoucherInfo>
                    <VoucherName>{voucher.title}</VoucherName>
                    <VoucherDescription>
                      {voucher.description}
                    </VoucherDescription>
                  </VoucherInfo>

                  <ApplyButton
                    activeOpacity={0.85}
                    onPress={() => onApply(voucher)}>
                    <ApplyButtonText>Apply</ApplyButtonText>
                  </ApplyButton>
                </VoucherContent>
              </VoucherCard>
            ))}
          </VoucherList>
        </BottomSheet>
      </Overlay>
    </Modal>
  );
};
