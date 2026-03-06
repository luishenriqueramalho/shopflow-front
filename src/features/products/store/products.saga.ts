import { call, put, takeLatest } from 'redux-saga/effects';
import { productsApi } from '../api/productsApi';
import {
  fetchProductByIdFailure,
  fetchProductByIdRequest,
  fetchProductByIdSuccess,
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
} from './products.slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../domain/product.types';

function* fetchProductsWorker() {
  try {
    const products: Product[] = yield call(productsApi.getProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Não foi possível carregar os produtos';

    yield put(fetchProductsFailure(message));
  }
}

function* fetchProductByIdWorker(action: PayloadAction<string>) {
  try {
    const product: Product = yield call(
      productsApi.getProductById,
      action.payload,
    );
    yield put(fetchProductByIdSuccess(product));
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Não foi possível carregar os detalhes do produto';

    yield put(fetchProductByIdFailure(message));
  }
}

export function* productsSaga() {
  yield takeLatest(fetchProductsRequest.type, fetchProductsWorker);
  yield takeLatest(fetchProductByIdRequest.type, fetchProductByIdWorker);
}
