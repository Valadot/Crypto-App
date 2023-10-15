import { useState, useEffect } from "react";
import axios from "axios";
import {Container, CoinWrapper,CoinImage,NameImageWrapper} from "./CoinsList.styles"


const CoinsList = () => {

    const [coinList, setCoinList] = useState([])

    const getCoinlist = async( ) => {
        try {
            const {data} = await axios ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en")

            setCoinList(data)
            
        } catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
        getCoinlist()
        console.log(coinList)
    }, [])
    return(
        <Container>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>1h%</th>
                            <th>24h%</th>
                            <th>7d%</th>
                            <th>24h Volume / Market Cap</th>
                            <th>Circulating Supply / Total Supply</th>
                            <th>Last 7d</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {coinList && coinList.map(coin =>
                       <tr key={coin.id}>
                        <th>{coin.market_cap_rank}</th>
                        <NameImageWrapper><CoinImage src={coin.image}></CoinImage>{coin.name}({coin.symbol})</NameImageWrapper>
                        <th>{coin.current_price}</th>
                        <th>{coin.price_change_percentage_1h_in_currency.toFixed(2)}</th>
                        <th>{coin.price_change_percentage_24h_in_currency.toFixed(2)}</th>
                        <th>{coin.price_change_percentage_7d_in_currency.toFixed(2)}</th>
                       </tr> )}
                        </tbody>
                </table>
            </div>
        </Container>

    );
};

export default CoinsList