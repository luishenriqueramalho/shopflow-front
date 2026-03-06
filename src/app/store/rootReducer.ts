import { combineReducers } from '@reduxjs/toolkit';
import { productsReducer } from '@/features/products/store/products.slice';
import { cartReducer } from '@/features/cart/store/cart.slice';

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
