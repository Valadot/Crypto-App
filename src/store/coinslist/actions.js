import axios from "axios";

import {
  GET_COINS_SUCCESS,
  GET_COINS_PENDING,
  GET_COINS_ERROR,
  INCREMENT_PAGE,
} from "./coinslistReducer";

export const getCoins = () => async (dispatch, getState) => {
  const state = getState();
  const currency = state.currency.currency;

  try {
    dispatch({
      type: GET_COINS_PENDING,
    });

    const { data } = await axios(
      `https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=30&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en&x_cg_pro_api_key=CG-3yjcmqqZJ3KvtjTrAKb8ptkD`
    );
    dispatch({
      type: GET_COINS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_COINS_ERROR,
      payload: err,
    });
  }
};

export const incrementPage = () => async (dispatch, getState) => {
  const state = getState();
  const page = state.coinlist.page;
  const currency = state.currency.currency;
  try {
    dispatch({
      type: GET_COINS_PENDING,
    });

    const { data } = await axios(
      `https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=30&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en&x_cg_pro_api_key=CG-3yjcmqqZJ3KvtjTrAKb8ptkD`
    );
    dispatch({
      type: INCREMENT_PAGE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_COINS_ERROR,
      payload: err,
    });
  }
};
