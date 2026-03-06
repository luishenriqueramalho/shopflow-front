import React from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import {
  ActionButton,
  ActionButtonText,
  Card,
  Description,
  FloatingIconCircle,
  Overlay,
  SuccessCheck,
  Title,
} from './styles';

type PaymentStatusModalProps = {
  visible: boolean;
  status: 'processing' | 'success';
  onFinish: () => void;
};

export const PaymentStatusModal = ({
  visible,
  status,
  onFinish,
}: PaymentStatusModalProps) => {
  const isProcessing = status === 'processing';

  console.log('teste');

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent>
      <Overlay>
        <Card>
          <FloatingIconCircle>
            {isProcessing ? (
              <ActivityIndicator size="large" color="#1f5cff" />
            ) : (
              <SuccessCheck>✓</SuccessCheck>
            )}
          </FloatingIconCircle>

          <Title>
            {isProcessing ? 'Pagamento em andamento' : 'Concluído!'}
          </Title>

          <Description>
            {isProcessing
              ? 'Aguarde alguns instantes'
              : 'Seu cartão foi cobrado com sucesso'}
          </Description>

          {!isProcessing ? (
            <ActionButton activeOpacity={0.85} onPress={onFinish}>
              <ActionButtonText>Voltar para Home</ActionButtonText>
            </ActionButton>
          ) : null}
        </Card>
      </Overlay>
    </Modal>
  );
};
