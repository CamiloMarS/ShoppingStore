import { makeAsyncActionCreator } from "redux-toolbelt";

const initialState = {
  categories: [],
  products: [],
  fetching: false,
  message: ""
};

export const getProductsList = makeAsyncActionCreator("GET_PRODUCT"); //Async Action
export const getCategorysList = makeAsyncActionCreator("GET_CATEGORIES");

const actionProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getProductsList.TYPE: {
      return {
        ...state,
        fetching: true,
        message: "Loading Products"
      };
    }
    case getProductsList.success.TYPE: {
      return {
        ...state,
        products: action.payload,
        fetching: false,
        message: "Success"
      };
    }
    case getProductsList.failure.TYPE: {
      return {
        ...state,
        message: "Failure to load products"
      };
    }
    //Categories
    case getCategorysList.TYPE: {
      return Object.assign({}, state, {
        categories: [],
        fetching: true,
        message: "Loading"
      });
    }
    case getCategorysList.success.TYPE: {
      return Object.assign({}, state, {
        categories: action.payload,
        fetching: false,
        message: "Completed"
      });
    }
    case getCategorysList.failure.TYPE: {
      return Object.assign({}, state, {
        categories: [],
        fetching: false,
        message: "Failure Request"
      });
    }
    default:
      return initialState;
  }
};

export default actionProductsReducer;
