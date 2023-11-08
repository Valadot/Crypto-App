export const GET_CURRENCY_SUCCESS = "GET_CURRENCY_SUCCESS";
export const GET_CURRENCY_ERROR = "GET_CURRENCY_ERROR";

const initialState = {
  currency: "USD",
  currencyIcon: "$",
};

const changeCoinIcon = (currency) => {
  switch (currency) {
    case "USD":
      return "$";
    case "GBP":
      return "£";
    case "BTC":
      return "₿";
    case "ETH":
      return "Ξ";
    default:
      return "€";
  }
};

function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENCY_SUCCESS:
      return {
        currency: action.payload,
        currencyIcon: changeCoinIcon(action.payload),
      };
    case GET_CURRENCY_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default currencyReducer;
