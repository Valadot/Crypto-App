import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { CurrencyColorContext } from "../CurrencyColorProvider/CurrencyColorProvider";

export const CoinDataContext = createContext();

export const CoinDataProvider = ({children}) => {
    const [coinIcon, setCoinIcon] = useState("")
    const {currency} = useContext(CurrencyColorContext)
    const [btcPrice, setBtcPrice] = useState("")
    const [loading, setLoading] = useState(false)
    const [coinChart, setCoinChart] = useState([])
    const [timeFrame, setTimeFrame] = useState("7")
    const [coin, setCoin] = useState("")
    
    
    const formattedCurrency = currency.toLowerCase()
    const [coinList, setCoinList] = useState([])
    const [page, setPage] = useState(1)
    const [globalData, setGlobalData] = useState("")
    const [priceData, setPriceData] = useState([]);
    const [volumeData, setVolumeData] = useState([]);

    const resetData = () => {
        setCoinList([]);
        setPriceData([]);
        setVolumeData([]);
        setPage(1);
    };
   
    // NEED TO DO PROMISE.ALL HERE WHEN REFACTORING! Too many API calls lead to too many state changes => Application re-renders multiple times at once.

    const getCoinlist = async (prevCoins = coinList, defaultPage = page ) => {
        try {
            setLoading(true)
            const {data} = await axios (`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${formattedCurrency}&order=market_cap_desc&per_page=30&page=${defaultPage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`)
            setCoinList([...prevCoins, ...data])
            setPage(defaultPage + 1)
            setLoading(false)

            
        } catch (error){
            console.log(error)
        }
    }

    const getBtcPrice = async() => {
        try{
            const {data} = await axios(`https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&market_data=true`)
            setBtcPrice(data)
        } catch(error){
            console.log(error)
        }
    }

    const getChartData = async( ) => {
        try {
            const {data} = await axios (`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=30&interval=daily`)
        
           
           setPriceData(data.prices.map(price => price[1]))
           setVolumeData(data.total_volumes.map(volume => volume[1]))
        } catch (error){
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


    useEffect(() => {
            resetData(); 
            getCoinlist([],1); 
            getBtcPrice();
            getGlobalMarketData();
            getChartData();
        // resetData();


        switch(formattedCurrency){
            case "usd":
                    setCoinIcon("$");
                    break;
            case "gbp":
                    setCoinIcon("£");
                    break;
            case "btc":
                    setCoinIcon("₿");
                    break;
            case "eth":
                    setCoinIcon("Ξ");
                    break;
            default:
                    setCoinIcon("€");
                    break;
        }
    
    }, [currency]);


    return(
        <CoinDataContext.Provider value={{coinList, setCoinList,coinIcon,btcPrice, globalData, getCoinlist,loading,priceData,volumeData,setCoinChart,coinChart,timeFrame, setTimeFrame,coin, setCoin}}>
             {children}
        </CoinDataContext.Provider>
    )
}