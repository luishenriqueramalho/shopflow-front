import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product, ProductsState } from '../domain/product.types';

const initialState: ProductsState = {
  list: [],
  selected: null,
  loadingList: false,
  loadingDetails: false,
  errorList: null,
  errorDetails: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsRequest(state) {
      state.loadingList = true;
      state.errorList = null;
    },

    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.loadingList = false;
      state.list = action.payload;
    },

    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.loadingList = false;
      state.errorList = action.payload;
    },

    fetchProductByIdRequest(state, _action: PayloadAction<string>) {
      state.loadingDetails = true;
      state.errorDetails = null;
    },

    fetchProductByIdSuccess(state, action: PayloadAction<Product>) {
      state.loadingDetails = false;
      state.selected = action.payload;
    },

    fetchProductByIdFailure(state, action: PayloadAction<string>) {
      state.loadingDetails = false;
      state.errorDetails = action.payload;
    },

    clearSelectedProduct(state) {
      state.selected = null;
      state.errorDetails = null;
      state.loadingDetails = false;
    },
  },
});

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductByIdRequest,
  fetchProductByIdSuccess,
  fetchProductByIdFailure,
  clearSelectedProduct,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
