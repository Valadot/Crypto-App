import { createContext, useState } from "react";

export const CurrencyColorContext = createContext();

export const CurrencyColorProvider = ({children}) => {
    const [currency, setCurrency] = useState("EUR")
    const [colorMode, setColorMode] = useState("dark")
    // const [chartData, setChartData] = useState({})
    // const [optionsData, setOptionsData] = useState({})



    return(
        <CurrencyColorContext.Provider value={{currency, setCurrency,colorMode,setColorMode,}}>
             {children}
        </CurrencyColorContext.Provider>
    )
}