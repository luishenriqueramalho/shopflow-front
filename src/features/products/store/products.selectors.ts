import { RootState } from '@/app/store';

export const selectProductsList = (state: RootState) => state.products.list;
export const selectSelectedProduct = (state: RootState) =>
  state.products.selected;

export const selectProductsLoadingList = (state: RootState) =>
  state.products.loadingList;

export const selectProductsLoadingDetails = (state: RootState) =>
  state.products.loadingDetails;

export const selectProductsErrorList = (state: RootState) =>
  state.products.errorList;

export const selectProductsErrorDetails = (state: RootState) =>
  state.products.errorDetails;
