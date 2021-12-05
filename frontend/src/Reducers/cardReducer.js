import {
  LIST_CARDS,
  LIST_CARDS_REQUEST,
  LIST_CARDS_SUCCESS,
  LIST_CARDS_FAILURE,
} from "../Constants/CardConstants";

export const listCardsReducer = (state = { cards: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_CARDS:
      return {
        ...state,
        listCards: payload,
      };

    default:
      return state;
  }
};
