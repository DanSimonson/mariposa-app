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
    console.log("response.data", response.data);
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

//   dispatch({
//     type: LIST_CARDS,
//     payload: data.cards,
//   });
// try {
//   const { data } = await axios.get("/api/products");
//   dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
// } catch (error) {
//   dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
// }
