import { connect } from "react-redux";
import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { CoinDataContext } from "../../contexts/CoinDataProvider/CoinDataProvider";
import { CurrencyColorContext } from "../../contexts/CurrencyColorProvider/CurrencyColorProvider";
import {
  Container,
  OuterBar,
  InnerBar,
  InnerBarCap,
  CoinStatWrapper,
  Dot,
  Caret,
} from "./ChinChart.styles";
import BitcoinLogo from "../../assets/bitcoin-logo.svg";
import EthLogo from "../../assets/eth-logo.svg";
import { formatNumber } from "../../utils/formatNumber/formatNumber";
import { getGlobalMarketData } from "../../store/globalMarketData/actions";

const ChinChart = (props) => {
  useEffect(() => {
    props.getGlobalMarketData();
  }, []);
  return (
    <Container>
      {props.globalmarketdata && (
        <>
          <div>Coins {props.globalmarketdata.data.active_cryptocurrencies}</div>
          <div>Exchanges {props.globalmarketdata.data.markets}</div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Dot></Dot>
            {props.currencyIcon}{" "}
            {formatNumber(
              props.globalmarketdata.data.total_market_cap[
                props.currency.toLowerCase()
              ]
            )}
            {props.globalmarketdata.data.market_cap_change_percentage_24h_usd <
            0 ? (
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ color: "#FE1040" }}
              />
            ) : (
              <FontAwesomeIcon icon={faCaretUp} style={{ color: "#00FC2A" }} />
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Dot></Dot>
            {props.currencyIcon}{" "}
            {formatNumber(
              props.globalmarketdata.data.total_volume[
                props.currency.toLowerCase()
              ]
            )}
            <OuterBar>
              <InnerBar
                $highernum={
                  props.globalmarketdata.data.total_market_cap[
                    props.currency.toLowerCase()
                  ]
                }
                $lowernum={
                  props.globalmarketdata.data.total_volume[
                    props.currency.toLowerCase()
                  ]
                }
              ></InnerBar>
            </OuterBar>
          </div>
          <div>
            <CoinStatWrapper>
              <img style={{ width: "15px" }} src={BitcoinLogo} alt="" />
              {props.globalmarketdata.data.market_cap_percentage["btc"].toFixed(
                0
              )}
              %
              <OuterBar>
                <InnerBarCap
                  $cap={
                    props.globalmarketdata.data.market_cap_percentage["btc"]
                  }
                ></InnerBarCap>
              </OuterBar>
            </CoinStatWrapper>
          </div>
          <div>
            <CoinStatWrapper>
              <img style={{ width: "15px" }} src={EthLogo} alt="" />
              {props.globalmarketdata.data.market_cap_percentage["eth"].toFixed(
                0
              )}
              %
              <OuterBar>
                <InnerBarCap
                  $cap={
                    props.globalmarketdata.data.market_cap_percentage["eth"]
                  }
                ></InnerBarCap>
              </OuterBar>
            </CoinStatWrapper>
          </div>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  globalmarketdata: state.globalmarketdata.marketData,
  isLoading: state.globalmarketdata.isLoading,
  error: state.globalmarketdata.error,
  currency: state.currency.currency,
  currencyIcon: state.currency.currencyIcon,
  colormode: state.colormode.colormode,
});

const mapDispatchToProps = {
  getGlobalMarketData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChinChart);
