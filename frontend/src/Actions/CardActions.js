import axios from "axios";
import { LIST_CARDS } from "../Constants/CardConstants";
import data from "../data";

export const listCards = () => (dispatch, getState) => {
  const response = axios.get("/api/cards/");

  dispatch({
    type: LIST_CARDS,
    payload: "response",
  });
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
