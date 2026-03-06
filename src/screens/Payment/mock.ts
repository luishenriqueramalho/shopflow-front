import {
  AddressInfo,
  CartPaymentItem,
  ContactInfo,
  ShippingOption,
  Voucher,
} from './types';

export const PAYMENT_ADDRESS: AddressInfo = {
  title: 'Shipping Address',
  description:
    '26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city',
};

export const PAYMENT_CONTACT: ContactInfo = {
  phone: '+84932000000',
  email: 'amandamorgan@example.com',
};

export const PAYMENT_ITEMS: CartPaymentItem[] = [
  {
    id: '1',
    name: 'Lorem ipsum dolor sit amet consectetur.',
    image: 'https://picsum.photos/id/64/200/200',
    price: 17,
    quantity: 1,
  },
  {
    id: '2',
    name: 'Lorem ipsum dolor sit amet consectetur.',
    image: 'https://picsum.photos/id/65/200/200',
    price: 17,
    quantity: 1,
  },
];

export const PAYMENT_SHIPPING_OPTIONS: ShippingOption[] = [
  {
    id: 'standard',
    title: 'Standard',
    etaLabel: '5-7 days',
    price: 0,
  },
  {
    id: 'express',
    title: 'Express',
    etaLabel: '1-2 days',
    price: 12,
  },
];

export const PAYMENT_VOUCHERS: Voucher[] = [
  {
    id: 'voucher-first-purchase',
    title: 'First Purchase',
    description: '5% off for your next order',
    discountPercentage: 5,
    validUntil: '5.16.20',
  },
  {
    id: 'voucher-customer-care',
    title: 'Gift From Customer Care',
    description: '15% off your next purchase',
    discountPercentage: 15,
    validUntil: '6.20.20',
  },
];
