import { takeLatest, put, call } from "redux-saga/effects";
import { getCategorysList } from "../reducers/ProductsReducer";
import { getApiCategoryProducts } from "../settings/api";

function* tryCategoriesSaga() {
  try {
    const response = yield call(getApiCategoryProducts);
    const { data } = response;
    yield put({ type: getCategorysList.success.TYPE, payload: data });
  } catch (error) {
    //Send Error
    yield put({ type: getCategorysList.failure.TYPE, payload: error });
  }
}

export default function* runCategorySaga() {
  yield takeLatest(getCategorysList.TYPE, tryCategoriesSaga);
}
