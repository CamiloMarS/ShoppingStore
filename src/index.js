import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//import reducer here
import * as reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

//Create store here!
const store = createStore(
  combineReducers({ ...reducers }),
  composeWithDevTools()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
