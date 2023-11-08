import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { CurrencyColorProvider } from "./contexts/CurrencyColorProvider/CurrencyColorProvider";
import { CoinDataProvider } from "./contexts/CoinDataProvider/CoinDataProvider";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CurrencyColorProvider>
        <CoinDataProvider>
          <App />
        </CoinDataProvider>
      </CurrencyColorProvider>
    </Provider>
  </React.StrictMode>
);
