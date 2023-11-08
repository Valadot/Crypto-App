import axios from "axios";

import {
  GET_BTC_DATA_SUCCESS,
  GET_BTC_DATA_PENDING,
  GET_BTC_DATA_ERROR,
} from "./bitcoinChartDataReducer";

export const getBitcoinData = () => async (dispatch, getState) => {
  const state = getState();
  const currency = state.currency.currency;
  try {
    dispatch({
      type: GET_BTC_DATA_PENDING,
    });

    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=30&interval=daily`
    );

    const priceData = data.prices.map((price) => price[1]);
    const volumeData = data.total_volumes.map((volume) => volume[1]);
    dispatch({
      type: GET_BTC_DATA_SUCCESS,
      payload: { prices: priceData, volumes: volumeData },
    });
  } catch (err) {
    dispatch({
      type: GET_BTC_DATA_ERROR,
      payload: err,
    });
  }
};
