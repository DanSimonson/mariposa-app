import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { listCardsReducer } from "./Reducers/cardReducer";

const reducer = combineReducers({
  listCardsReducer: listCardsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
