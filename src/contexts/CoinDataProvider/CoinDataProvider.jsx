import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import debounce from 'lodash/debounce';
import { CurrencyColorContext } from "../CurrencyColorProvider/CurrencyColorProvider";

export const CoinDataContext = createContext();

export const CoinDataProvider = ({children}) => {
    const [coinIcon, setCoinIcon] = useState("")
    const {currency} = useContext(CurrencyColorContext)
    const [btcPrice, setBtcPrice] = useState("")
    const [loading, setLoading] = useState(false)
    
    const formattedCurrency = currency.toLowerCase()
    const [coinList, setCoinList] = useState([])
    const [page, setPage] = useState(1)
    const [globalData, setGlobalData] = useState("")

   

    const getCoinlist = ( ) => {

        setTimeout(async ()=> {
            try {
                setLoading(true)
                const {data} = await axios (`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${formattedCurrency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`)
    
                setCoinList([...coinList, ...data])
                setPage(page + 1)
                setLoading(false)
                console.log(coinList)
            } catch (error){
                console.log(error)
            }
        }, 2000)

    }

    const getBtcPrice = async() => {
        try{
            const {data} = await axios(`https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&market_data=true`)

            setBtcPrice(data)
        } catch(error){
            console.log(error)
        }
    }

    const getGlobalMarketData = async() => {
        try {
            const {data} = await axios("https://api.coingecko.com/api/v3/global")
            setGlobalData(data)
        } catch(error){
            console.log(error)
        }
        

        
    }

    const debouncedFetchCoins = debounce(getCoinlist, 1000)

    useEffect(() => {
        debouncedFetchCoins(formattedCurrency);
        getBtcPrice()
        getGlobalMarketData()
        
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

        return () => {
            debouncedFetchCoins.cancel(); // Cancel the debounced function on unmount
          };
    }, [currency])


    return(
        <CoinDataContext.Provider value={{coinList, setCoinList,coinIcon,btcPrice, globalData, getCoinlist,loading}}>
             {children}
        </CoinDataContext.Provider>
    )
}