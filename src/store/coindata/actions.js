import axios from "axios";

import {
  GET_COIN_DATA_SUCCESS,
  GET_COIN_DATA_PENDING,
  GET_COIN_DATA_ERROR,
} from "./coindataReducer";

export const getCoinData = (coin) => async (dispatch, getState) => {
  const state = getState();
  const currency = state.currency.currency;
  try {
    dispatch({
      type: GET_COIN_DATA_PENDING,
    });

    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&market_data=true`
    );
    dispatch({
      type: GET_COIN_DATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_COIN_DATA_ERROR,
      payload: err,
    });
  }
};
