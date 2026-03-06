import { RootState } from '@/app/store';

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0,
  );

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0,
  );
