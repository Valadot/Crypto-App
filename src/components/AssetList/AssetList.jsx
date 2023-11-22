import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import format from "date-fns/format";
import {
  faCaretDown,
  faCaretUp,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  List,
  CoinData,
  CoinImage,
  MetricsWrapper,
  Metrics,
  OuterBar,
  InnerBar,
  MarketData,
  GreenText,
} from "./AssetList.styles";
import { getCoinHistoryData } from "../../store/coinHistoryData/acions";

const AssetList = ({ assets, setAsset, deleteAsset }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [newPortfolio, setNewPortfolio] = useState([]);

  let noDupps = assets.reduce((acc, el) => {
    if (acc[el.assetName]) return acc;
    return { ...acc, [el.assetName]: el };
  }, {});

  async function getData() {
    setIsLoading(true);
    const pricedCoinsObject = await Promise.all(
      Object.keys(noDupps).map(async (key) => {
        const data = await fetch(
          `https://api.coingecko.com/api/v3/coins/${key}`
        );

        const json = await data.json();
        console.log("json", json);
        noDupps[key].currentPrice = json.market_data.current_price.usd;

        noDupps[key].priceChange24h =
          json.market_data.price_change_24h_in_currency.usd;

        noDupps[key].marketCapVsVolume = (
          json.market_data.market_cap.usd / json.market_data.total_volume.usd
        ).toFixed(0);

        noDupps[key].circSupplyVsMaxSuply = (
          (json.market_data.circulating_supply / json.market_data.max_supply) *
          100
        ).toFixed(0);
      })
    );

    const newPortfolio = await Promise.all(
      assets.map(async (coin) => {
        const data = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coin.assetName}/history?date=${coin.purchaseDate}`
        );
        const json = await data.json();
        console.log("coin", coin);
        console.log("json below", json);
        return {
          ...coin,
          assetName: json.id,
          total: coin.amount * json.market_data.current_price.usd,
          currentPrice: noDupps[coin.assetName].currentPrice,
          priceChange24h: noDupps[coin.assetName].priceChange24h,
          marketCapVsVolume: noDupps[coin.assetName].marketCapVsVolume,
          circSupplyVsMaxSuply: noDupps[coin.assetName].circSupplyVsMaxSuply,
          previousPriceChange: (
            ((noDupps[coin.assetName].currentPrice -
              json.market_data.current_price.usd) /
              noDupps[coin.assetName].currentPrice) *
            100
          ).toFixed(2),
          previousPrice: json.market_data.current_price.usd,
        };
      })
    );

    setNewPortfolio(newPortfolio);

    setIsLoading(false);
  }

  function formatDate(inputDate) {
    const [day, month, year] = inputDate.split("-");
    const formattedDate = `${month}.${day}.${year}`;
    return formattedDate;
  }

  useEffect(() => {
    getData();
  }, [assets]);

  return (
    <>
      {isLoading ? (
        <div>Loding...</div>
      ) : (
        newPortfolio.map((asset) => (
          <List key={uuid()}>
            <CoinData>
              <CoinImage>
                <img src={asset.image}></img>
              </CoinImage>
              {asset.assetName}
              <div>
                <FontAwesomeIcon
                  onClick={() => deleteAsset(asset)}
                  size="2xl"
                  icon={faRectangleXmark}
                  style={{ color: "#ff0000" }}
                />
              </div>
            </CoinData>
            <MetricsWrapper>
              Market price:
              <Metrics>
                <div>
                  Current price:{" "}
                  <GreenText>{asset.currentPrice.toLocaleString()}</GreenText>
                </div>
                <div>
                  Price change 24h:{" "}
                  <GreenText>{asset.priceChange24h}</GreenText>
                </div>
                <MarketData>
                  Market Cap vs Volume:{" "}
                  <GreenText>{asset.marketCapVsVolume}%</GreenText>
                  <OuterBar>
                    <InnerBar $marketData={asset.marketCapVsVolume}></InnerBar>
                  </OuterBar>
                </MarketData>
                <MarketData>
                  Circ supply vs max supply:{" "}
                  <GreenText>{asset.price}</GreenText>
                  <OuterBar>
                    <InnerBar
                      $marketData={asset.circSupplyVsMaxSuply}
                    ></InnerBar>
                  </OuterBar>
                </MarketData>
              </Metrics>
              Your coin:
              <Metrics>
                <div>
                  Coin amount: <GreenText>{asset.amount}</GreenText>
                </div>
                <div>
                  Amount value:{" "}
                  <GreenText>
                    {(asset.amount * asset.currentPrice).toLocaleString()}
                  </GreenText>
                </div>
                <div>
                  Amount price change since purchase:{" "}
                  {asset.previousPriceChange === 0 ? (
                    ""
                  ) : asset.previousPriceChange < 0 ? (
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
                  <GreenText>{asset.previousPriceChange}%</GreenText>
                </div>
                <div>
                  Purchase Date:{" "}
                  <GreenText>{formatDate(asset.purchaseDate)}</GreenText>
                </div>
              </Metrics>
            </MetricsWrapper>
          </List>
        ))
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  coindata: state.coindata.coindata,
  colormode: state.colormode.colormode,
  coins: state.allcoins.coins,
});

const mapDispatchToProps = {
  getCoinHistoryData,
};
export default connect(mapStateToProps, mapDispatchToProps)(AssetList);
