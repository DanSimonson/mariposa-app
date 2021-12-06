import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { listCardsReducer } from "./Reducers/cardReducer";
//listCards
const reducer = combineReducers({
  cardPosts: listCardsReducer,
});
const initialState = {};
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//composeEnhancer(applyMiddleware(thunk))
const middleWare = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
