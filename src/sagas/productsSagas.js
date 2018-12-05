import { takeLatest, put, call } from "redux-saga/effects";
import { getProductsList } from "../reducers/ProductsReducer";
import { getProducts } from "../settings/api";

function* tryProductsSaga() {
  try {
    const response = yield call(getProducts);
    const { data } = response;
    yield put(getProductsList.success(data));
  } catch (error) {
    yield put(getProductsList.failure(error));
  }
}

export default function* runProductSaga() {
  yield takeLatest(getProductsList.TYPE, tryProductsSaga);
}
