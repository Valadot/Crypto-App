import axios from "axios";

import {
  GET_HISTORY_DATA_SUCCESS,
  GET_HISTORY_DATA_PENDING,
  GET_HISTORY_DATA_ERROR,
} from "./coinHistoryDataReducer";

export const getCoinHistoryData =
  (coin, purchaseDate) => async (dispatch, getState) => {
    const state = getState();

    try {
      dispatch({
        type: GET_HISTORY_DATA_PENDING,
      });

      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}/history?date=${purchaseDate}`
      );
      dispatch({
        type: GET_HISTORY_DATA_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: GET_HISTORY_DATA_ERROR,
        payload: err,
      });
    }
  };
