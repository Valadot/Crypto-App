import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { CurrencyColorContext } from "../CurrencyColorProvider/CurrencyColorProvider";

export const CoinDataContext = createContext();

export const CoinDataProvider = ({children}) => {
    const [coinIcon, setCoinIcon] = useState("")
    const {currency} = useContext(CurrencyColorContext)
    
    const formattedCurrency = currency.toLowerCase()
    const [coinList, setCoinList] = useState([])

   

    const getCoinlist = async( ) => {
        try {
            const {data} = await axios (`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${formattedCurrency}&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`)

            setCoinList(data)
            
        } catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
        getCoinlist(formattedCurrency)
        console.log(coinList)
        switch(formattedCurrency){
            case "usd":
                setCoinIcon("$")
                break;
            case "gbp":
                setCoinIcon("£")
                break;
            case "btc":
                setCoinIcon("₿")
                break;
            case "eth":
                setCoinIcon("Ξ")
                break;
            default:
                setCoinIcon("€")
                break;
        }
    }, [currency])


    return(
        <CoinDataContext.Provider value={{coinList, setCoinList,coinIcon}}>
             {children}
        </CoinDataContext.Provider>
    )
}