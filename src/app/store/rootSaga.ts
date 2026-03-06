import { all, fork } from 'redux-saga/effects';
import { productsSaga } from '@/features/products/store/products.saga';

export function* rootSaga() {
  yield all([fork(productsSaga)]);
}
