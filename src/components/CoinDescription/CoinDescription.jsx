import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import {
  faCaretDown,
  faCaretUp,
  faLayerGroup,
  faLink,
  faCopy,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  CoinDataWrapper,
  CoinDiv,
  CoinIcon,
  CoinIconWrapper,
  CoinInfo,
  HomePage,
  PriceDataWrapper,
  PriceData,
  MarketChange,
  HistoryPrice,
  CoinInfoWrapper,
  CoinData,
  Data,
  CoinDescriptionWrapper,
  Section,
  CoinLinks,
  Link,
  LinkIcon,
  CopyIcon,
  Copied,
  CurrencyConverter,
  CurrencyWrapper,
  Currency,
  CurrencyValue,
  PriceDate,
} from "./CoinDescription.styles";
import { formatPrice } from "../../utils/formatPrice/formatPrice";
import { formatPriceChange } from "../../utils/formatPriceChange/formatPriceChange";
import { formatNumber } from "../../utils/formatNumber/formatNumber";
import TimeFrameRadioButtons from "../TimeFrameRadioButtons/TimeFrameRadioButtons";
import CoinChart from "../CoinChart/CoinChart";
import { getCoinData } from "../../store/coindata/actions";

const CoinDescription = (props) => {
  const [copied, setCopied] = useState(false);
  const [currencyFormat, setCurrencyFormat] = useState();
  const coindata = props.coindata;
  const { id } = useParams();

  // changes the date more custom, so it shows the day, date, time and GMT
  function formatDateToCustom(dateString) {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
      hour12: true,
    };

    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  const goToLink = (page) => {
    window.open(page, "_blank");
  };

  // copy the link if the user clicks on the icon next to the text

  const handleCopy = (copytext) => {
    navigator.clipboard.writeText(copytext);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // changes the homepage format, removes the // and https etc.
  const formatHomepage = (homepage) => {
    return homepage.replace(/\/\/|.+\/\//, "");
  };

  const formatCurrency = (e) => {
    const convertedPrice = (
      e.target.value /
      coindata.market_data.current_price[props.currency.toLowerCase()]
    ).toFixed(5);
    setCurrencyFormat(convertedPrice);
  };

  const formatLinks = (link) => {
    return link.replace(/\/\/|.+\/\//, "");
  };

  useEffect(() => {
    props.getCoinData(id);
  }, [props.currency, id]);

  return (
    <Container>
      <Section>Your summary</Section>
      {props.coindata && props.coindata.market_data && (
        <>
          <CoinDataWrapper>
            <CoinDiv>
              <CoinInfo>
                <CoinIconWrapper>
                  <CoinIcon src={coindata.image["small"]} />
                </CoinIconWrapper>
                <div>
                  {coindata.name} ({coindata.symbol.toUpperCase()})
                </div>
              </CoinInfo>
              <HomePage>
                <LinkIcon onClick={() => goToLink(coindata.links.homepage[0])}>
                  {props.colormode === "dark" ? (
                    <FontAwesomeIcon
                      icon={faLink}
                      style={{ color: "#ffffff" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faLink}
                      style={{ color: "#191b1f" }}
                    />
                  )}
                </LinkIcon>
                {formatHomepage(coindata.links.homepage[0])}
              </HomePage>
            </CoinDiv>
            <PriceDataWrapper>
              <PriceData>
                {props.currencyIcon}
                {formatPrice(
                  coindata.market_data.current_price[
                    props.currency.toLowerCase()
                  ]
                )}
                <MarketChange
                  color={coindata.market_data.price_change_percentage_24h}
                >
                  {coindata.market_data.price_change_percentage_24h_in_currency[
                    props.currency.toLowerCase()
                  ] === 0 ? (
                    ""
                  ) : coindata.market_data
                      .price_change_percentage_24h_in_currency[
                      props.currency.toLowerCase()
                    ] < 0 ? (
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      style={{ color: "#FE1040" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCaretUp}
                      style={{ color: "#00FC2A" }}
                    />
                  )}
                  {formatPriceChange(
                    coindata.market_data
                      .price_change_percentage_24h_in_currency[
                      props.currency.toLowerCase()
                    ]
                  )}
                  %
                </MarketChange>
              </PriceData>
              {props.colormode === "dark" ? (
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  size="xl"
                  style={{ color: "#FFFFFF" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  size="xl"
                  style={{ color: "#000000" }}
                />
              )}
              <HistoryPrice>
                <FontAwesomeIcon
                  icon={faCaretUp}
                  style={{ color: "#00FC2A" }}
                />
                <div>
                  <p>
                    All Time High: {props.currencyIcon}{" "}
                    {formatPrice(
                      coindata.market_data.ath[props.currency.toLowerCase()]
                    )}
                  </p>
                  <PriceDate>
                    {formatDateToCustom(
                      props.athDate[props.currency.toLowerCase()]
                    )}
                  </PriceDate>
                </div>
              </HistoryPrice>
              <HistoryPrice>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  style={{ color: "#FE1040" }}
                />
                <div>
                  <p>
                    All Time Low: {props.currencyIcon}{" "}
                    {formatPrice(
                      coindata.market_data.atl[props.currency.toLowerCase()]
                    )}
                  </p>
                  <PriceDate>
                    {formatDateToCustom(
                      props.atlDate[props.currency.toLowerCase()]
                    )}
                  </PriceDate>
                </div>
              </HistoryPrice>
            </PriceDataWrapper>
            <CoinInfoWrapper>
              <CoinData>
                <Data>
                  <span>+</span>
                  <p>
                    Market Cap: {props.currencyIcon}{" "}
                    {formatNumber(
                      coindata.market_data.market_cap[
                        props.currency.toLowerCase()
                      ]
                    )}{" "}
                  </p>
                </Data>
                <Data>
                  <span>+</span>
                  <p>
                    Fully Diluted Valuation: {props.currencyIcon}{" "}
                    {formatNumber(
                      coindata.market_data.fully_diluted_valuation[
                        props.currency.toLowerCase()
                      ]
                    )}{" "}
                  </p>
                </Data>
                <Data>
                  <span>+</span>
                  <p>
                    Volume 24h: {props.currencyIcon}{" "}
                    {formatNumber(
                      coindata.market_data.total_volume[
                        props.currency.toLowerCase()
                      ]
                    )}{" "}
                  </p>
                </Data>
                <Data>
                  <span>+</span>
                  <p>
                    Volume / Market:{" "}
                    {(
                      coindata.market_data.total_volume[
                        props.currency.toLowerCase()
                      ] /
                      coindata.market_data.market_cap[
                        props.currency.toLowerCase()
                      ]
                    ).toFixed(5)}{" "}
                  </p>
                </Data>
                <Data>
                  <span>+</span>
                  <p>
                    Total Volume:{" "}
                    {(
                      coindata.market_data.total_volume[
                        props.currency.toLowerCase()
                      ] /
                      coindata.market_data.current_price[
                        props.currency.toLowerCase()
                      ]
                    ).toLocaleString()}{" "}
                    {coindata.symbol.toUpperCase()}{" "}
                  </p>
                </Data>
                <Data>
                  <span>+</span>
                  <p>
                    Circulating Supply:{" "}
                    {coindata.market_data.circulating_supply.toLocaleString()}{" "}
                    {coindata.symbol.toUpperCase()}{" "}
                  </p>
                </Data>
                <Data>
                  <span>+</span>
                  <p>
                    Max Supply:{" "}
                    {coindata.market_data.max_supply === null
                      ? "infinite"
                      : coindata.market_data.max_supply}{" "}
                    {coindata.symbol.toUpperCase()}{" "}
                  </p>
                </Data>
              </CoinData>
            </CoinInfoWrapper>
          </CoinDataWrapper>
          <Section>Description</Section>
          <CoinDescriptionWrapper>
            {props.colormode === "dark" ? (
              <FontAwesomeIcon
                icon={faLayerGroup}
                size="xl"
                style={{ color: "#FFFFFF" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faLayerGroup}
                size="xl"
                style={{ color: "#000000" }}
              />
            )}
            <p>
              {coindata.description["en"].replace(
                /<a [^>]*>([^<]+)<\/a>/gi,
                "$1"
              )}
            </p>
          </CoinDescriptionWrapper>
          <CoinLinks>
            <Link>
              <LinkIcon
                onClick={() => goToLink(coindata.links.blockchain_site[0])}
              >
                {props.colormode === "dark" ? (
                  <FontAwesomeIcon icon={faLink} style={{ color: "#ffffff" }} />
                ) : (
                  <FontAwesomeIcon icon={faLink} style={{ color: "#191b1f" }} />
                )}
              </LinkIcon>
              {formatLinks(coindata.links.blockchain_site[0])}
              <CopyIcon
                onClick={() => handleCopy(coindata.links.blockchain_site[0])}
              >
                {props.colormode === "dark" ? (
                  <FontAwesomeIcon icon={faCopy} style={{ color: "#ffffff" }} />
                ) : (
                  <FontAwesomeIcon icon={faLink} style={{ color: "#191b1f" }} />
                )}
              </CopyIcon>
            </Link>
            {coindata.links.blockchain_site[1] && (
              <Link>
                <LinkIcon
                  onClick={() => goToLink(coindata.links.blockchain_site[1])}
                >
                  {props.colormode === "dark" ? (
                    <FontAwesomeIcon
                      icon={faLink}
                      style={{ color: "#ffffff" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faLink}
                      style={{ color: "#191b1f" }}
                    />
                  )}
                </LinkIcon>
                {formatLinks(coindata.links.blockchain_site[1])}
                <CopyIcon
                  onClick={() => handleCopy(coindata.links.blockchain_site[1])}
                >
                  {props.colormode === "dark" ? (
                    <FontAwesomeIcon
                      icon={faCopy}
                      style={{ color: "#ffffff" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faLink}
                      style={{ color: "#191b1f" }}
                    />
                  )}
                </CopyIcon>
              </Link>
            )}
            {coindata.links.blockchain_site[2] && (
              <Link>
                <LinkIcon
                  onClick={() => goToLink(coindata.links.blockchain_site[2])}
                >
                  {props.colormode === "dark" ? (
                    <FontAwesomeIcon
                      icon={faLink}
                      style={{ color: "#ffffff" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faLink}
                      style={{ color: "#191b1f" }}
                    />
                  )}
                </LinkIcon>
                {formatLinks(coindata.links.blockchain_site[2]) ??
                  formatLinks(coindata.links.blockchain_site[2])}
                <CopyIcon
                  onClick={() => handleCopy(coindata.links.blockchain_site[2])}
                >
                  {props.colormode === "dark" ? (
                    <FontAwesomeIcon
                      icon={faCopy}
                      style={{ color: "#ffffff" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faLink}
                      style={{ color: "#191b1f" }}
                    />
                  )}
                </CopyIcon>
              </Link>
            )}

            {copied && <Copied $showPopup={copied}>Copied!</Copied>}
          </CoinLinks>
          <TimeFrameRadioButtons />
          <CurrencyConverter>
            <CurrencyWrapper>
              <Currency>{props.currency}</Currency>
              <CurrencyValue
                type="number"
                min="1"
                onChange={(e) => formatCurrency(e)}
              ></CurrencyValue>
            </CurrencyWrapper>
            <FontAwesomeIcon
              size="xl"
              icon={faArrowRightArrowLeft}
              style={{ color: "#ffffff" }}
            />
            <CurrencyWrapper>
              <Currency $beforecurrency={coindata.symbol.toUpperCase()}>
                {coindata.symbol.toUpperCase()}
              </Currency>
              <CurrencyValue
                value={`${coindata.symbol.toUpperCase()} ${
                  currencyFormat ?? "0"
                }  `}
                readOnly
              />
            </CurrencyWrapper>
          </CurrencyConverter>
          <CoinChart />
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  coindata: state.coindata.coindata,
  athDate: state.coindata.athDate,
  atlDate: state.coindata.atlDate,
  isLoading: state.coindata.isLoading,
  error: state.coindata.error,
  currency: state.currency.currency,
  currencyIcon: state.currency.currencyIcon,
  colormode: state.colormode.colormode,
});

const mapDispatchToProps = {
  getCoinData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinDescription);
