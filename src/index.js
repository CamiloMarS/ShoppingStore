import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//import reducer here
import * as reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";

//Redux sagas
import createSagaMiddleware from "redux-saga";

//Import the sagas created
import runProductsSaga from "./sagas/productsSagas";
import { getProductsList } from "./reducers/ProductsReducer";

const sagaMiddleware = createSagaMiddleware();

//Create store here!
const store = createStore(
  combineReducers({ ...reducers }),
  compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools()
  )
);

//initializar saga
sagaMiddleware.run(runProductsSaga);

store.dispatch(getProductsList());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
