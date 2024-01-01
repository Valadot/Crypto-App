import axios from "axios";

import {
  GET_GLOBAL_MARKET_DATA_SUCCESS,
  GET_GLOBAL_MARKET_DATA_PENDING,
  GET_GLOBAL_MARKET_DATA_ERROR,
} from "./globalMarketDataReducer";

export const getGlobalMarketData = () => async (dispatch, getState) => {
  const state = getState();
  const currency = state.currency.currency;
  try {
    dispatch({
      type: GET_GLOBAL_MARKET_DATA_PENDING,
    });

    const { data } = await axios(
      `https://pro-api.coingecko.com/api/v3/global?&x_cg_pro_api_key=CG-3yjcmqqZJ3KvtjTrAKb8ptkD`
    );
    dispatch({
      type: GET_GLOBAL_MARKET_DATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_GLOBAL_MARKET_DATA_ERROR,
      payload: err,
    });
  }
};
