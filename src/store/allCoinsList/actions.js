import axios from "axios";

import {
  GET_ALL_COINS_SUCCESS,
  GET_ALL_COINS_PENDING,
  GET_ALL_COINS_ERROR,
} from "./allCoinsListReducer";

export const getAllCoins = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ALL_COINS_PENDING,
    });

    const { data } = await axios(`https://api.coingecko.com/api/v3/coins/list`);
    dispatch({
      type: GET_ALL_COINS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_COINS_ERROR,
      payload: err,
    });
  }
};
