import { GET_CURRENCY_SUCCESS, GET_CURRENCY_ERROR } from "./currencyReducer";

export const getCurrency = (currency) => (dispatch, getState) => {
  try {
    dispatch({
      type: GET_CURRENCY_SUCCESS,
      payload: currency,
    });
  } catch (err) {
    dispatch({
      type: GET_CURRENCY_ERROR,
      payload: err,
    });
  }
};
