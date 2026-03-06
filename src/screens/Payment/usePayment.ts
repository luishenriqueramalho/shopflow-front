import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  PAYMENT_ADDRESS,
  PAYMENT_CONTACT,
  PAYMENT_SHIPPING_OPTIONS,
  PAYMENT_VOUCHERS,
} from './mock';
import { PaymentMethodId, ShippingOptionId, Voucher } from './types';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectCartItems } from '@/features/cart/store/cart.selectors';
import { clearCart } from '@/features/cart/store/cart.slice';

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);

export const usePayment = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);

  const paymentTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [selectedShippingOption, setSelectedShippingOption] =
    useState<ShippingOptionId>('standard');
  const [selectedPaymentMethod] = useState<PaymentMethodId>('card');
  const [isVoucherModalVisible, setIsVoucherModalVisible] = useState(false);
  const [appliedVoucher, setAppliedVoucher] = useState<Voucher | null>(null);
  const [isPaymentStatusModalVisible, setIsPaymentStatusModalVisible] =
    useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'processing' | 'success'>(
    'processing',
  );

  const address = PAYMENT_ADDRESS;
  const contact = PAYMENT_CONTACT;
  const shippingOptions = PAYMENT_SHIPPING_OPTIONS;
  const vouchers = PAYMENT_VOUCHERS;

  const subtotal = useMemo(() => {
    return items.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
  }, [items]);

  const shippingPrice = useMemo(() => {
    return (
      shippingOptions.find(option => option.id === selectedShippingOption)
        ?.price ?? 0
    );
  }, [selectedShippingOption, shippingOptions]);

  const discountValue = useMemo(() => {
    if (!appliedVoucher) {
      return 0;
    }

    return subtotal * (appliedVoucher.discountPercentage / 100);
  }, [appliedVoucher, subtotal]);

  const total = useMemo(() => {
    return Math.max(subtotal + shippingPrice - discountValue, 0);
  }, [discountValue, shippingPrice, subtotal]);

  const subtotalFormatted = useMemo(() => formatCurrency(subtotal), [subtotal]);

  const shippingPriceFormatted = useMemo(
    () => (shippingPrice === 0 ? 'FREE' : formatCurrency(shippingPrice)),
    [shippingPrice],
  );

  const totalFormatted = useMemo(() => formatCurrency(total), [total]);

  const discountFormatted = useMemo(
    () => formatCurrency(discountValue),
    [discountValue],
  );

  const isPayButtonDisabled = useMemo(() => {
    return items.length === 0 || isPaymentStatusModalVisible;
  }, [items.length, isPaymentStatusModalVisible]);

  const handleSelectShippingOption = useCallback(
    (optionId: ShippingOptionId) => {
      setSelectedShippingOption(optionId);
    },
    [],
  );

  const handleOpenVoucherModal = useCallback(() => {
    setIsVoucherModalVisible(true);
  }, []);

  const handleCloseVoucherModal = useCallback(() => {
    setIsVoucherModalVisible(false);
  }, []);

  const handleApplyVoucher = useCallback((voucher: Voucher) => {
    setAppliedVoucher(voucher);
    setIsVoucherModalVisible(false);
  }, []);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const formatItemPrice = useCallback((value: number) => {
    return formatCurrency(value);
  }, []);

  const handlePay = useCallback(() => {
    if (items.length === 0 || isPaymentStatusModalVisible) {
      return;
    }

    setPaymentStatus('processing');
    setIsPaymentStatusModalVisible(true);

    paymentTimeoutRef.current = setTimeout(() => {
      setPaymentStatus('success');
    }, 7000);
  }, [items.length, isPaymentStatusModalVisible]);

  const handleTrackOrder = useCallback(() => {
    setIsPaymentStatusModalVisible(false);
  }, []);

  useEffect(() => {
    return () => {
      if (paymentTimeoutRef.current) {
        clearTimeout(paymentTimeoutRef.current);
      }
    };
  }, []);

  const handleFinishPayment = useCallback(() => {
    dispatch(clearCart());
    setIsPaymentStatusModalVisible(false);
    navigation.navigate('Home');
  }, [dispatch, navigation]);

  return {
    address,
    contact,
    items,
    vouchers,
    shippingOptions,
    selectedShippingOption,
    selectedPaymentMethod,
    appliedVoucher,
    isVoucherModalVisible,
    isPaymentStatusModalVisible,
    paymentStatus,
    subtotalFormatted,
    shippingPriceFormatted,
    totalFormatted,
    discountFormatted,
    isPayButtonDisabled,
    formatItemPrice,
    handleSelectShippingOption,
    handleOpenVoucherModal,
    handleCloseVoucherModal,
    handleApplyVoucher,
    handleGoBack,
    handlePay,
    handleTrackOrder,
    handleFinishPayment,
  };
};
