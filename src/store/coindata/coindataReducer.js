export const GET_COIN_DATA_SUCCESS = "GET_COIN_DATA_SUCCESS";
export const GET_COIN_DATA_PENDING = "GET_COIN_DATA_PENDING";
export const GET_COIN_DATA_ERROR = "GET_COIN_DATA_ERROR";

const initialState = {
  coin: "",
  coindata: [],
  athDate: "",
  atlDate: "",
  isLoading: false,
  error: false,
};

function coindataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COIN_DATA_PENDING:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case GET_COIN_DATA_SUCCESS:
      return {
        ...state,
        coin: action.payload.id,
        coindata: action.payload,
        athDate: action.payload.market_data.ath_date,
        atlDate: action.payload.market_data.atl_date,
        isLoading: false,
      };
    case GET_COIN_DATA_ERROR:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    default:
      return state;
  }
}

export default coindataReducer;
