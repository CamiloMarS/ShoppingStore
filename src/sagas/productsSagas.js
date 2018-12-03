import { takeLatest, put, call } from "redux-saga/effects";
import { getProductsList } from "../reducers/ProductsReducer";
import { getApiCategoryProducts } from "../settings/api";

function* tryCategoriesSaga() {
  try {
    const response = yield call(getApiCategoryProducts);
    const { data } = response;
    yield put({ type: getProductsList.success.TYPE, payload: data });
  } catch (error) {
    //Send Error
    yield put({ type: getProductsList.failure.TYPE, payload: error });
  }
}

export default function* runProductsSaga() {
  yield takeLatest(getProductsList.TYPE, tryCategoriesSaga);
}
