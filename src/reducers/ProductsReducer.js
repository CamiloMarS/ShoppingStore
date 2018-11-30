import { makeAsyncActionCreator } from "redux-toolbelt";
import { fromJS } from "immutable";

const initialState = fromJS({
  products: [],
  fetching: false,
  message: ""
});

export const getProductsList = makeAsyncActionCreator("GET_PRODUCT"); //Async Action

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case getProductsList.TYPE: {
      return state.merge({ fetching: true, message: "Loading products list" });
    }
    case getProductsList.success.TYPE: {
      return state.merge({
        products: action.payload,
        fetching: false,
        message: "Get products list successful"
      });
    }
    case getProductsList.failure.TYPE: {
      return state.merge({ fetching: false, message: action.payload });
    }
    default:
      return initialState;
  }
};

export default productReducer;
