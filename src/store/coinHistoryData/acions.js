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
        `https://pro-api.coingecko.com/api/v3/coins/${coin}/history?date=${purchaseDate}&x_cg_pro_api_key=CG-3yjcmqqZJ3KvtjTrAKb8ptkD`
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
