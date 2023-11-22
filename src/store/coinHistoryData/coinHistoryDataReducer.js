export const GET_HISTORY_DATA_SUCCESS = "GET_COINS_SUCCESS";
export const GET_HISTORY_DATA_PENDING = "GET_COINS_PENDING";
export const GET_HISTORY_DATA_ERROR = "GET_COINS_ERROR";

const initialState = {
  data: [],
  isLoading: false,
  error: false,
};

function coinHistoryDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HISTORY_DATA_PENDING:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case GET_HISTORY_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_HISTORY_DATA_ERROR:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    default:
      return state;
  }
}

export default coinHistoryDataReducer;
