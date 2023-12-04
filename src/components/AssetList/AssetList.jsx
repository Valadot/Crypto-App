import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faRectangleXmark,
  faPencil,
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
  ProfitWrapper,
  PriceChange,
  ChangeCoinDataWrapper,
  Overlay,
  EditCoinWrapper,
  EditCoinsForm,
  ButtonWrapper,
  Button,
} from "./AssetList.styles";
import { getCoinHistoryData } from "../../store/coinHistoryData/acions";
import { formatPriceChange } from "../../utils/formatPriceChange/formatPriceChange";

const AssetList = ({
  assets,
  deleteAsset,
  setAsset,
  colormode,
  currency,
  currencyIcon,
  setAssets,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [newPortfolio, setNewPortfolio] = useState([]);
  const [editData, setEditData] = useState(false);
  const [editedAmount, setEditedAmount] = useState("");
  const [editingCoinId, setEditingCoinId] = useState("");

  let noDupps = assets.reduce((acc, el) => {
    if (acc[el.assetName]) return acc;
    return { ...acc, [el.assetName]: el };
  }, {});

  const correctedCurrency = currency.toLowerCase();

  async function getData() {
    setIsLoading(true);
    const pricedCoinsObject = await Promise.all(
      Object.keys(noDupps).map(async (key) => {
        const data = await fetch(
          `https://api.coingecko.com/api/v3/coins/${key}`
        );

        const json = await data.json();
        console.log("json", json);
        console.log("currency", json.market_data.current_price);
        noDupps[key].currentPrice =
          json.market_data.current_price[correctedCurrency];

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
          previousPriceChange:
            ((noDupps[coin.assetName].currentPrice -
              json.market_data.current_price.usd) /
              noDupps[coin.assetName].currentPrice) *
            100,
          previousPrice: json.market_data.current_price.usd,
        };
      })
    );

    setNewPortfolio(newPortfolio);
    setAsset(newPortfolio);
    setIsLoading(false);
    console.log("assets", assets);
  }

  function formatDate(inputDate) {
    const [day, month, year] = inputDate.split("-");
    const formattedDate = `${month}.${day}.${year}`;
    return formattedDate;
  }

  const handleAmountBlur = (coinId) => {
    setNewPortfolio((prevPortfolio) =>
      prevPortfolio.map((item) =>
        item.id === coinId ? { ...item, amount: editedAmount } : item
      )
    );
    setEditingCoinId(null);
    setAssets((prevPortfolio) =>
      prevPortfolio.map((item) =>
        item.id === coinId ? { ...item, amount: editedAmount } : item
      )
    );
    console.log("edit", assets);
  };

  const handleEditClick = (coinId, currentAmount) => {
    setEditedAmount(currentAmount.toString());
    setEditingCoinId(coinId);
  };

  useEffect(() => {
    getData();
  }, [assets, currency]);

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
                  <GreenText>
                    {currencyIcon} {asset.currentPrice.toLocaleString()}
                  </GreenText>
                </div>
                <div>
                  Price change 24h:{" "}
                  <GreenText>
                    {formatPriceChange(asset.priceChange24h)}
                  </GreenText>
                </div>
                <MarketData>
                  Vol / Mrkt Cap:{" "}
                  <GreenText>{asset.marketCapVsVolume}%</GreenText>
                  <OuterBar>
                    <InnerBar $marketData={asset.marketCapVsVolume}></InnerBar>
                  </OuterBar>
                </MarketData>
                <MarketData>
                  Circ / Total Sup:{" "}
                  <GreenText>{asset.circSupplyVsMaxSuply}%</GreenText>
                  <OuterBar>
                    <InnerBar
                      $marketData={asset.circSupplyVsMaxSuply}
                    ></InnerBar>
                  </OuterBar>
                </MarketData>
              </Metrics>
              <ChangeCoinDataWrapper>Your coin:</ChangeCoinDataWrapper>
              <Metrics>
                <div>
                  Coin amount:
                  {editingCoinId === asset.id ? (
                    <input
                      autoFocus="autoFocus"
                      type="number"
                      value={editedAmount}
                      onChange={(e) => setEditedAmount(e.target.value)}
                      onBlur={() => handleAmountBlur(asset.id)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleAmountBlur(asset.id);
                        }
                      }}
                    ></input>
                  ) : (
                    <GreenText>
                      {asset.amount}
                      <div
                        onClick={() => handleEditClick(asset.id, asset.amount)}
                      >
                        <FontAwesomeIcon
                          icon={faPencil}
                          style={{ color: "#dbc266" }}
                        />
                      </div>
                    </GreenText>
                  )}
                </div>
                <div>
                  Amount value:{" "}
                  <GreenText>
                    {currencyIcon}{" "}
                    {(asset.amount * asset.currentPrice).toLocaleString()}
                  </GreenText>
                </div>
                <ProfitWrapper>
                  Price change since purchase:{" "}
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
                  <PriceChange color={asset.previousPriceChange}>
                    {formatPriceChange(asset.previousPriceChange)}%
                  </PriceChange>
                </ProfitWrapper>
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
  currency: state.currency.currency,
  currencyIcon: state.currency.currencyIcon,
});

const mapDispatchToProps = {
  getCoinHistoryData,
};
export default connect(mapStateToProps, mapDispatchToProps)(AssetList);
