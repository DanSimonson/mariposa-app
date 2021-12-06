import {
  LIST_CARDS,
  LIST_CARDS_REQUEST,
  LIST_CARDS_SUCCESS,
  LIST_CARDS_FAILURE,
} from "../Constants/CardConstants";

const initialState = {
  cards: [],
  loading: false,
  error: null,
};
//{ cards: [] }
export const listCardsReducer = (
  state = { loading: true, cards: [] },
  action
) => {
  const { type, payload } = action;
  console.log("payload: ", payload);
  switch (type) {
    case LIST_CARDS_REQUEST:
      return {
        loading: true,
      };
    case LIST_CARDS_SUCCESS:
      return {
        loading: false,
        listCards: payload,
      };
    case LIST_CARDS_FAILURE:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
