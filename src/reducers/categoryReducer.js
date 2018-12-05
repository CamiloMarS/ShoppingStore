import { makeAsyncActionCreator } from "redux-toolbelt";

export const getProductsCategory = makeAsyncActionCreator(
  "GET_PRODUCTS_CATEGORY"
);

const initialState = {
  fetching: false,
  categories: [],
  error: null
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case getProductsCategory.TYPE: {
      return "";
    }

    default: {
      return state;
    }
  }
};
