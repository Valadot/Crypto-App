import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import coinlistReducer from "./coinslist/coinslistReducer";
import currencyReducer from "./currency/currencyReducer";
import bitcoinChartDataReducer from "./bitcoinChartData/bitcoinChartDataReducer";
import colormodeReducer from "./colormode/colormodeReducer";
import coindataReducer from "./coindata/coindataReducer";
import coinChartDataReducer from "./coinChartData/coinChartDataReducer";
import globalMarketDataReducer from "./globalMarketData/globalMarketDataReducer";

const reducers = combineReducers({
  coinlist: coinlistReducer,
  currency: currencyReducer,
  bitcoinChartData: bitcoinChartDataReducer,
  colormode: colormodeReducer,
  coindata: coindataReducer,
  coinchartdata: coinChartDataReducer,
  globalmarketdata: globalMarketDataReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
