import { LIST_CARDS } from "../Constants/CardConstants";

export const listCardsReducer = (state = { cards: [] }, action) => {
  const { type } = action;
  switch (type) {
    case LIST_CARDS:
      return {
        ...state,
        listCards: action.payload,
      };

    default:
      return state;
  }
};
