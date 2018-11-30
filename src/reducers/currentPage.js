import { makeActionCreator } from "redux-toolbelt";
//import { fromJS } from "immutable";
//import _ from 'lodash';

export const setCurrentPage = makeActionCreator("SET_CURRENT_PAGE");

const initialState = {
  currentPage: "Home"
};

const currentPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case setCurrentPage.TYPE: {
      if (action.payload !== state.currentPage)
        return Object.assign({}, state, { currentPage: action.payload });
      else return state;
    }
    default:
      return state;
  }
};

export default currentPageReducer;
