import {useContext} from "react"
import { CoinDataContext } from "../../contexts/CoinDataProvider/CoinDataProvider"
import { CurrencyColorContext } from "../../contexts/CurrencyColorProvider/CurrencyColorProvider"
import {Container,OuterBar, InnerBar, InnerBarCap,CoinStatWrapper,Dot, Caret} from "./ChinChart.styles"
import BitcoinLogo from "../../assets/bitcoin-logo.svg"
import EthLogo from "../../assets/eth-logo.svg"
import { formatNumber } from "../../utils/formatNumber/formatNumber"
import { currencyLogo } from "../../utils/currencyLogo/currencyLogo"
import { pickCaret } from "../../utils/correctCaret/correctCaret"

const ChinChart = () =>{

    const {globalData} = useContext(CoinDataContext)
    const {currency} = useContext(CurrencyColorContext)

    const currencySymbol = {
        USD: "$",
        GBP: "£",
        EUR: "€",
        BTC:"₿",
        ETH: "Ξ"
    }

    console.log(globalData)

    return(
        <Container>
            <div>
                
            Coins {globalData && globalData.data.active_cryptocurrencies}
            </div>
            <div>
                
            Exchanges {globalData && globalData.data.markets}
            </div>
            <div style={{display:"flex", alignItems:"center", gap:"0.5rem"}}>
                <Dot></Dot>
                {currencySymbol[currency]} {globalData && formatNumber(globalData.data.total_market_cap[currency.toLowerCase()])}
                <Caret src={globalData && pickCaret(globalData.data.market_cap_change_percentage_24h_usd.toString())}/>

            </div>
            <div style={{display:"flex", alignItems:"center", gap:"0.5rem"}}>
            <Dot></Dot>
                {currencySymbol[currency]} {globalData && formatNumber(globalData.data.total_volume[currency.toLowerCase()])}
                <OuterBar>
                    <InnerBar highernum={globalData && globalData.data.total_market_cap[currency.toLowerCase()]} lowernum={globalData && globalData.data.total_volume[currency.toLowerCase()]}></InnerBar>
                </OuterBar>
            </div>
            <div>
                <CoinStatWrapper>
                    <img style={{width:"15px"}} src={BitcoinLogo} alt="" />
                    {globalData && globalData.data.market_cap_percentage["btc"].toFixed(0)}%
                    <OuterBar>
                    <InnerBarCap cap={globalData && globalData.data.market_cap_percentage["btc"]}></InnerBarCap>
                </OuterBar>
                </CoinStatWrapper>
            </div>
            <div>
                <CoinStatWrapper>
                    <img style={{width:"15px"}} src={EthLogo} alt="" />
                    {globalData && globalData.data.market_cap_percentage["eth"].toFixed(0)}%
                    <OuterBar>
                    <InnerBarCap cap={globalData && globalData.data.market_cap_percentage["eth"]}></InnerBarCap>
                </OuterBar>
                </CoinStatWrapper>
            </div>
        </Container>
    )
}

export default ChinChart