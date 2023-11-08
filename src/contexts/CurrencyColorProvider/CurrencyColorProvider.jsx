import { createContext, useState } from "react";

export const CurrencyColorContext = createContext();

export const CurrencyColorProvider = ({ children }) => {
  const [currency, setCurrency] = useState("EUR");
  const [colorMode, setColorMode] = useState("dark");

  return (
    <CurrencyColorContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyColorContext.Provider>
  );
};
