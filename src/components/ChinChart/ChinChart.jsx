import {useContext} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { CoinDataContext } from "../../contexts/CoinDataProvider/CoinDataProvider"
import { CurrencyColorContext } from "../../contexts/CurrencyColorProvider/CurrencyColorProvider"
import {Container,OuterBar, InnerBar, InnerBarCap,CoinStatWrapper,Dot, Caret} from "./ChinChart.styles"
import BitcoinLogo from "../../assets/bitcoin-logo.svg"
import EthLogo from "../../assets/eth-logo.svg"
import { formatNumber } from "../../utils/formatNumber/formatNumber"

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
                {globalData && globalData.data.market_cap_change_percentage_24h_usd < 0 ? <FontAwesomeIcon icon={faCaretDown} style={{color: "#FE1040",}} /> : <FontAwesomeIcon icon={faCaretUp} style={{color: "#00FC2A",}} />}

            </div>
            <div style={{display:"flex", alignItems:"center", gap:"0.5rem"}}>
            <Dot></Dot>
                {currencySymbol[currency]} {globalData && formatNumber(globalData.data.total_volume[currency.toLowerCase()])}
                <OuterBar>
                    <InnerBar $highernum={globalData && globalData.data.total_market_cap[currency.toLowerCase()]} $lowernum={globalData && globalData.data.total_volume[currency.toLowerCase()]}></InnerBar>
                </OuterBar>
            </div>
            <div>
                <CoinStatWrapper>
                    <img style={{width:"15px"}} src={BitcoinLogo} alt="" />
                    {globalData && globalData.data.market_cap_percentage["btc"].toFixed(0)}%
                    <OuterBar>
                    <InnerBarCap $cap={globalData && globalData.data.market_cap_percentage["btc"]}></InnerBarCap>
                </OuterBar>
                </CoinStatWrapper>
            </div>
            <div>
                <CoinStatWrapper>
                    <img style={{width:"15px"}} src={EthLogo} alt="" />
                    {globalData && globalData.data.market_cap_percentage["eth"].toFixed(0)}%
                    <OuterBar>
                    <InnerBarCap $cap={globalData && globalData.data.market_cap_percentage["eth"]}></InnerBarCap>
                </OuterBar>
                </CoinStatWrapper>
            </div>
        </Container>
    )
}

export default ChinChart