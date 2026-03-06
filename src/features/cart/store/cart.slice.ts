import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddToCartPayload, CartItem, CartState } from '../domain/cart.types';

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<AddToCartPayload>) {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      const newItem: CartItem = {
        ...action.payload,
        quantity: 1,
      };

      state.items.push(newItem);
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    increaseCartItemQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(cartItem => cartItem.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseCartItemQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(cartItem => cartItem.id === action.payload);

      if (!item) {
        return;
      }

      if (item.quantity <= 1) {
        state.items = state.items.filter(
          cartItem => cartItem.id !== action.payload,
        );
        return;
      }

      item.quantity -= 1;
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
