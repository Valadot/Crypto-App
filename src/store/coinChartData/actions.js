import axios from "axios";
import {
  GET_CHART_DATA_ERROR,
  GET_CHART_DATA_SUCCESS,
  GET_CHART_DATA_PENDING,
} from "./coinChartDataReducer";

export const getChartData = (timeframe) => async (dispatch, getState) => {
  const state = getState();
  const currency = state.currency.currency;
  const coin = state.coindata.coin;

  try {
    dispatch({
      type: GET_CHART_DATA_PENDING,
    });

    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency.toLowerCase()}&days=${timeframe}&interval=daily`
    );

    const pricedata = data.prices.map((price) => price[1]);
    dispatch({
      type: GET_CHART_DATA_SUCCESS,
      payload: {
        timeframedata: timeframe,
        chartdata: pricedata,
      },
    });
  } catch (err) {
    dispatch({
      type: GET_CHART_DATA_ERROR,
      payload: err,
    });
  }
};
