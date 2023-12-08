export const DECREMENT = "DECREMENT";
export const GET_COINS_SUCCESS = "GET_COINS_SUCCESS";
export const GET_COINS_PENDING = "GET_COINS_PENDING";
export const GET_COINS_ERROR = "GET_COINS_ERROR";
export const INCREMENT_PAGE = "INCREMENT_PAGE";

const initialState = {
  data: [],
  isLoading: false,
  error: false,
  page: 2,
};

function coinlistReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_PAGE:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        page: state.page + 1,
        isLoading: false,
      };
    case GET_COINS_PENDING:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case GET_COINS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        page: 2,
      };
    case GET_COINS_ERROR:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    default:
      return state;
  }
}

export default coinlistReducer;
