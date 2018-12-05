import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import config from "./settings/firebase";

//import reducer here
import * as reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";

//Redux sagas
import createSagaMiddleware from "redux-saga";

//Import the sagas created
import * as sagas from "./sagas/index";

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
for (let item in sagas) {
  sagaMiddleware.run(sagas[item]);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

window.firebase.initializeApp(config);

serviceWorker.unregister();
