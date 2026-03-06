import { Product } from '@/features/products/domain/product.types';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export type AddToCartPayload = Pick<Product, 'id' | 'name' | 'price' | 'image'>;
