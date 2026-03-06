import { combineReducers } from '@reduxjs/toolkit';
import { productsReducer } from '@/features/products/store/products.slice';

export const rootReducer = combineReducers({
  products: productsReducer,
});
