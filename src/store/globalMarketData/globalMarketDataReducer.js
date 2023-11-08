export const GET_GLOBAL_MARKET_DATA_SUCCESS = "GET_GLOBAL_MARKET_DATA_SUCCESS";
export const GET_GLOBAL_MARKET_DATA_PENDING = "GET_GLOBAL_MARKET_DATA_PENDING";
export const GET_GLOBAL_MARKET_DATA_ERROR = "GET_GLOBAL_MARKET_DATA_ERROR";

const initialState = {
  marketData: "",
  isLoading: false,
  error: false,
};

function globalMarketDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GLOBAL_MARKET_DATA_PENDING:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case GET_GLOBAL_MARKET_DATA_SUCCESS:
      return {
        ...state,
        marketData: action.payload,
        isLoading: false,
      };
    case GET_GLOBAL_MARKET_DATA_ERROR:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    default:
      return state;
  }
}

export default globalMarketDataReducer;
