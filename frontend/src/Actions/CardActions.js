import axios from "axios";
import {
  LIST_CARDS,
  LIST_CARDS_REQUEST,
  LIST_CARDS_SUCCESS,
  LIST_CARDS_FAILURE,
} from "../Constants/CardConstants";

export const listCards = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LIST_CARDS_REQUEST });
    const response = await axios.get("/api/cards/");
    let data = response.data;
    dispatch({
      type: LIST_CARDS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LIST_CARDS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
