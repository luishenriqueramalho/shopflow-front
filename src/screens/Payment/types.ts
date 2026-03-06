export type ShippingOptionId = 'standard' | 'express';
export type PaymentMethodId = 'card';

export type CartPaymentItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export type Voucher = {
  id: string;
  title: string;
  description: string;
  discountPercentage: number;
  validUntil: string;
};

export type ShippingOption = {
  id: ShippingOptionId;
  title: string;
  etaLabel: string;
  price: number;
};

export type AddressInfo = {
  title: string;
  description: string;
};

export type ContactInfo = {
  phone: string;
  email: string;
};
