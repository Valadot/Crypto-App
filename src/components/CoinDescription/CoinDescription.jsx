import { useParams } from "react-router-dom"
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import FadeIn from 'react-fade-in';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faLayerGroup, faLink,faCopy, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { CoinDataContext } from "../../contexts/CoinDataProvider/CoinDataProvider";
import { CurrencyColorContext } from "../../contexts/CurrencyColorProvider/CurrencyColorProvider";
import { Container,CoinDataWrapper,CoinDiv,CoinIcon,CoinIconWrapper,CoinInfo,HomePage,PriceDataWrapper, PriceData, MarketChange,HistoryPrice,CoinInfoWrapper, 
    CoinData,Data,CoinDescriptionWrapper,Section,CoinLinks,Link,LinkIcon, CopyIcon, Copied,CurrencyConverter,CurrencyWrapper, Currency, CurrencyValue } from "./CoinDescription.styles"
import { formatPrice } from "../../utils/formatPrice/formatPrice";
import { formatPriceChange } from "../../utils/formatPriceChange/formatPriceChange";
import { formatNumber } from "../../utils/formatNumber/formatNumber";
import TimeFrameRadioButtons from "../TimeFrameRadioButtons/TimeFrameRadioButtons";
import { CurrencyChangeWrapper } from "../Navbar/Navbar.styles";

const CoinDescription = () => {

    const [coinInfo, setCoinInfo] = useState();
    const [homepage, setHomepage] = useState("");
    const [coinLinks, setCoinLinks] = useState();
    const [copied, setCopied] = useState(false);
    const [currencyFormat, setCurrencyFormat] = useState();

    const {coinList} = useContext(CoinDataContext)
    const {currency, colorMode} = useContext(CurrencyColorContext)

    const {id} = useParams();


    const coin = coinList.find(coin => coin.id === id)

    const currencySymbol = {
        USD: "$",
        GBP: "£",
        EUR: "€",
        BTC:"₿",
        ETH: "Ξ"
    }

    const getCoinInfo = async() => {
        try{
            const {data} = await axios(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`)
            setCoinInfo(data)
            setHomepage(data.links.homepage[0]);
            setCoinLinks(data.links.blockchain_site)

        } catch(error){
            console.log(error)
        }
    }

    const getCoinData = async() => {
        try{
            const {data} = await axios(`https://api.coingecko.com/api/v3/coins/${id}`)

        } catch(error){
            console.log(error)
        }
    }


    function formatDateToCustom(dateString) {
        const options = {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
          hour12: false,
        };
        
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
      }

      const goToLink = (page) => {
        
        window.open(page, "_blank")

      }

      const handleCopy = (copytext) => {
        navigator.clipboard.writeText(copytext)
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 2000)
      }

      const formattedHomepage = homepage.replace(/\/\/|.+\/\//, '')
      const formattedLinks = coinLinks && coinLinks.map(link => link.replace(/\/\/|.+\/\//, ''))


      const originalDate = coinInfo && coinInfo.market_data.ath_date[currency.toLowerCase()];
        const formattedDate = formatDateToCustom(originalDate);

        const formatCurrency = (e) => {
            const convertedPrice = (e.target.value/ coin.current_price).toFixed(5)
            setCurrencyFormat(convertedPrice)
             
        }
    useEffect(() => {
        getCoinInfo();
        getCoinData();
        
    },[currency])
    return(
        <Container>
            <Section>Your summary</Section>
        
            <CoinDataWrapper>
                <CoinDiv>
                    <CoinInfo>
                        <CoinIconWrapper>
                            <CoinIcon src={coin && coin.image} /> 
                        </CoinIconWrapper>
                        <div>{coin && coin.name} ({coin && coin.symbol.toUpperCase()})</div>
                    </CoinInfo>
                    <HomePage>
                       <LinkIcon onClick={() => goToLink(homepage)}>{colorMode === "dark" ? <FontAwesomeIcon  icon={faLink} style={{color: "#ffffff",}} /> : <FontAwesomeIcon icon={faLink} style={{color: "#191b1f",}}/>}</LinkIcon> 
                        {formattedHomepage}</HomePage>
                </CoinDiv>
                <PriceDataWrapper>
                    <PriceData>
                        {currencySymbol[currency]} {coin && formatPrice(coin.current_price)}
                        <MarketChange color={coinInfo && coinInfo.market_data.price_change_percentage_24h}>
                    {coinInfo && coinInfo.market_data.price_change_percentage_24h_in_currency[currency.toLowerCase()]
 === 0 ? "" : coinInfo && coinInfo.market_data.price_change_percentage_24h_in_currency[currency.toLowerCase()] <0 ? <FontAwesomeIcon icon={faCaretDown} style={{color: "#FE1040",}} /> : <FontAwesomeIcon icon={faCaretUp} style={{color: "#00FC2A",}} />}
                    {coinInfo && formatPriceChange(coinInfo.market_data.price_change_percentage_24h_in_currency[currency.toLowerCase()])}%
                    </MarketChange>
                    </PriceData>
                    {colorMode === "dark" ? <FontAwesomeIcon icon={faLayerGroup} size="xl" style={{color: "#FFFFFF",}} /> : <FontAwesomeIcon icon={faLayerGroup} size="xl" style={{color: "#000000",}} />}
                    <HistoryPrice>
                    <FontAwesomeIcon icon={faCaretUp} style={{color: "#00FC2A",}} />
                    <div>
                        <p>All Time High: {currencySymbol[currency]} {coinInfo && formatPrice(coinInfo.market_data.ath[currency.toLowerCase()])}</p>
                        <p>{formattedDate}</p>
                    </div>
                    
                    </HistoryPrice>
                    <HistoryPrice>
                    <FontAwesomeIcon icon={faCaretDown} style={{color: "#FE1040",}} />
                    <div>
                        <p>All Time Low: {currencySymbol[currency]} {coinInfo && formatPrice(coinInfo.market_data.atl[currency.toLowerCase()])}</p>
                        <p>{formattedDate}</p>
                    </div>
                    
                    </HistoryPrice>
                </PriceDataWrapper>
                <CoinInfoWrapper>
                    <CoinData>
                        <Data>
                            <span>+</span>
                            <p>Market Cap: {currencySymbol[currency]} {coinInfo && formatNumber(coinInfo.market_data.market_cap[currency.toLowerCase()])} </p>
                        </Data>
                        <Data>
                            <span>+</span>
                            <p>Fully Diluted Valuation: {currencySymbol[currency]} {coinInfo && formatNumber(coinInfo.market_data.fully_diluted_valuation[currency.toLowerCase()])} </p>
                        </Data>
                        <Data>
                            <span>+</span>
                            <p>Volume 24h: {currencySymbol[currency]} {coinInfo && formatNumber(coinInfo.market_data.total_volume[currency.toLowerCase()])} </p>
                        </Data>
                        <Data>
                            <span>+</span>
                            <p>Volume / Market: {coinInfo && (coinInfo.market_data.total_volume[currency.toLowerCase()] / coinInfo.market_data.market_cap[currency.toLowerCase()]).toFixed(5)} </p>
                        </Data>
                        <Data>
                            <span>+</span>
                            <p>Total Volume: {coinInfo && (coinInfo.market_data.total_volume[currency.toLowerCase()] / coinInfo.market_data.current_price[currency.toLowerCase()]).toLocaleString()} {coin && coin.symbol.toUpperCase()} </p>
                        </Data>
                        <Data>
                            <span>+</span>
                            <p>Circulating Supply: {coinInfo && coinInfo.market_data.circulating_supply.toLocaleString()} {coin && coin.symbol.toUpperCase()} </p>
                        </Data>
                        <Data>
                            <span>+</span>
                            <p>Max Supply: {coinInfo && coinInfo.market_data.max_supply === null ? "infinite" : coinInfo && coinInfo.market_data.max_supply} {coin && coin.symbol.toUpperCase()} </p>
                        </Data>
                        <div>

                        </div>
                    </CoinData>
                </CoinInfoWrapper>
                
            </CoinDataWrapper>
            <Section>Description</Section>
            <CoinDescriptionWrapper>
            {colorMode === "dark" ? <FontAwesomeIcon icon={faLayerGroup} size="xl" style={{color: "#FFFFFF",}} /> : <FontAwesomeIcon icon={faLayerGroup} size="xl" style={{color: "#000000",}} />}
                <p>{coinInfo && coinInfo.description["en"].replace(/<a [^>]*>([^<]+)<\/a>/gi, '$1')}</p>
            </CoinDescriptionWrapper>
            <CoinLinks>
            <Link>
            <LinkIcon onClick={() => goToLink(coinLinks[0])}>{colorMode === "dark" ? <FontAwesomeIcon icon={faLink} style={{color: "#ffffff",}} /> : <FontAwesomeIcon icon={faLink} style={{color: "#191b1f",}}/>}</LinkIcon>
            {formattedLinks && formattedLinks[0]}
            <CopyIcon onClick={() => handleCopy(coinLinks[0])}>{colorMode === "dark" ? <FontAwesomeIcon icon={faCopy} style={{color: "#ffffff",}} /> : <FontAwesomeIcon icon={faLink} style={{color: "#191b1f",}}/>}</CopyIcon>
            </Link>
           <Link>
           <LinkIcon onClick={() => goToLink(coinLinks[1])}>{colorMode === "dark" ? <FontAwesomeIcon icon={faLink} style={{color: "#ffffff",}} /> : <FontAwesomeIcon icon={faLink} style={{color: "#191b1f",}}/>}</LinkIcon>
           {formattedLinks && formattedLinks[1]}
           <CopyIcon onClick={() => handleCopy(coinLinks[1])}>{colorMode === "dark" ? <FontAwesomeIcon icon={faCopy} style={{color: "#ffffff",}} /> : <FontAwesomeIcon icon={faLink} style={{color: "#191b1f",}}/>}</CopyIcon>
           </Link> 
           <Link>
           <LinkIcon onClick={() => goToLink(coinLinks[2])}>{colorMode === "dark" ? <FontAwesomeIcon icon={faLink} style={{color: "#ffffff",}} /> : <FontAwesomeIcon icon={faLink} style={{color: "#191b1f",}}/>}</LinkIcon>
           {formattedLinks && formattedLinks[2]}
           <CopyIcon onClick={() => handleCopy(coinLinks[2])}>{colorMode === "dark" ? <FontAwesomeIcon icon={faCopy} style={{color: "#ffffff",}} /> : <FontAwesomeIcon icon={faLink} style={{color: "#191b1f",}}/>}</CopyIcon>

           </Link>
            {copied && <Copied showPopup={copied}>Copied!</Copied>}
           
            </CoinLinks>
            <TimeFrameRadioButtons/>
            <CurrencyConverter>
                <CurrencyWrapper>
                    <Currency $currency={currencySymbol[currency]} >{currency}</Currency>
                    <CurrencyValue type="number" min="1" onChange={(e) => formatCurrency(e)} ></CurrencyValue>
                </CurrencyWrapper>
                <FontAwesomeIcon size="xl" icon={faArrowRightArrowLeft} style={{color: "#ffffff",}} />
                <CurrencyWrapper>
                    <Currency $beforecurrency={coin && coin.symbol.toUpperCase()} >{coin && coin.symbol.toUpperCase()}</Currency>
                    <CurrencyValue 
                    value={currencyFormat || ""}
                    readOnly
                    />
                </CurrencyWrapper>
            </CurrencyConverter>
        </Container>
    )
}

export default CoinDescription