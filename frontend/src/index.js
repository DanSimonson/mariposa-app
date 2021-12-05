import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { listCards } from "./Reducers/cardReducer";
import { Provider } from "react-redux";
import store from "./Store";
import thunk from "redux-thunk";

//const store = createStore(listCards, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
