export const GET_ALL_COINS_SUCCESS = "GET_ALL_COINS_SUCCESS";
export const GET_ALL_COINS_PENDING = "GET_ALL_COINS_PENDING";
export const GET_ALL_COINS_ERROR = "GET_ALL_COINS_ERROR";

const initialState = {
  coins: [],
  error: false,
  isLoading: false,
};

function allCoinsListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COINS_PENDING:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case GET_ALL_COINS_SUCCESS:
      return {
        coins: action.payload,
        isLoading: false,
      };
    case GET_ALL_COINS_ERROR:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    default:
      return state;
  }
}

export default allCoinsListReducer;
