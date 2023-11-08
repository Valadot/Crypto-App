export const GET_CHART_DATA_PENDING = "GET_CHART_DATA_PENDING";
export const GET_CHART_DATA_SUCCESS = "GET_CHART_DATA_SUCCESS";
export const GET_CHART_DATA_ERROR = "GET_CHART_DATA_ERROR";

const initialState = {
  chartdata: [],
  timeframe: "7",
  isLoading: false,
  error: false,
};

function coinChartDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHART_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CHART_DATA_SUCCESS:
      return {
        timeframe: action.payload.timeframedata,
        chartdata: action.payload.chartdata,
        isLoading: false,
        error: false,
      };
    case GET_CHART_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    default:
      return state;
  }
}

export default coinChartDataReducer;
