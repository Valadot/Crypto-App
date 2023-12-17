export const GET_BTC_DATA_SUCCESS = "GET_BTC_DATA_SUCCESS";
export const GET_BTC_DATA_PENDING = "GET_BTC_DATA_PENDING";
export const GET_BTC_DATA_ERROR = "GET_BTC_DATA_ERROR";

const initialState = {
  priceData: [],
  volumeData: [],
  error: false,
  isLoading: false,
  timeframe: "30",
};

function bitcoinChartDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BTC_DATA_PENDING:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case GET_BTC_DATA_SUCCESS:
      return {
        ...state,
        priceData: action.payload.prices,
        volumeData: action.payload.volumes,
        timeframe: action.payload.timeframedata,
        isLoading: false,
      };
    case GET_BTC_DATA_ERROR:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    default:
      return state;
  }
}

export default bitcoinChartDataReducer;
