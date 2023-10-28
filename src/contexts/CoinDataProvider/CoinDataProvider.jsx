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
    const [priceData, setPriceData] = useState([]);
    const [volumeData, setVolumeData] = useState([]);

    const resetData = () => {
        setCoinList([]);
        setPriceData([]);
        setVolumeData([]);
        setPage(1); // Moved setPage to the end to ensure it reflects the updated value
    };
   

    const getCoinlist = async ( ) => {
        try {
            setLoading(true)
            const {data} = await axios (`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${formattedCurrency}&order=market_cap_desc&per_page=30&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`)
            // console.log(data)
            // setCoinList([...coinList, ...data])
            setCoinList(data)
            // setPage(page + 5)
            setLoading(false)

            
        } catch (error){
            console.log(error)
        }
    }

    const getBtcPrice = async() => {
        try{
            const {data} = await axios(`https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&market_data=true`)
            console.log(data)
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
        //    console.log(data.prices.map(price => price[1]))
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

    // const debouncedFetchCoins = debounce(getCoinlist, 1000)

    useEffect(() => {

        const fetchData = async () => {
            resetData(); 
            console.log(page)
            getCoinlist(); 
            getBtcPrice();
            getGlobalMarketData();
            getChartData();
        }
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
    
        // getCoinlist();
        // getBtcPrice();
        // getGlobalMarketData();
        // getChartData();
        fetchData()
    }, [currency]);


    return(
        <CoinDataContext.Provider value={{coinList, setCoinList,coinIcon,btcPrice, globalData, getCoinlist,loading,priceData,volumeData}}>
             {children}
        </CoinDataContext.Provider>
    )
}