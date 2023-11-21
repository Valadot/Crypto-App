import { useState } from "react";
import { connect } from "react-redux";
import {
  Container,
  Overlay,
  AddAssetButton,
  AddAssetWrapper,
  CoinWrapper,
  CoinData,
  CoinImage,
  CoinsForm,
  Input,
  ButtonWrapper,
  Button,
  FilteredDropdown,
  DropdownItem,
  AssetList,
  Metrics,
  MetricsWrapper,
} from "./Portfolio.styles";
import { getCoinData } from "../../store/coindata/actions";

const Portfolio = (props) => {
  const [showAddAsset, setShowAddAsset] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [asset, setAsset] = useState({});
  const [assetList, setAssetList] = useState([]);

  const handleClick = () => {
    setShowAddAsset(!showAddAsset);
  };

  const filteredCoins = props.coins.filter(
    (coin) =>
      coin.id.startsWith(searchInput) || coin.symbol.startsWith(searchInput)
  );

  const displayedCoins = filteredCoins.slice(0, 5);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setClicked(false);
  };

  const handleClickedLink = (coin) => {
    setClicked(true);
    props.getCoinData(coin);
    setSearchInput(coin);
    setAsset({ ...asset, assetName: coin });
  };

  const handleAmount = (e) => {
    setAsset({ ...asset, amount: e.target.value });
  };

  const handlePrice = (e) => {
    setAsset({ ...asset, price: e.target.value });
  };

  const handlePurchaseDate = (e) => {
    setAsset({ ...asset, purchaseDate: e.target.value });
  };

  const addAsset = () => {
    setAssetList([
      ...assetList,
      { ...asset, image: props.coindata.image.small },
    ]);
    setShowAddAsset(!showAddAsset);
    console.log("list", assetList);
  };
  console.log("list", assetList);
  console.log("asset", asset);
  return (
    <>
      <Container>
        <AddAssetButton onClick={handleClick}>Add Asset</AddAssetButton>

        {showAddAsset && (
          <Overlay>
            <AddAssetWrapper>
              Select Coins
              <CoinWrapper>
                <CoinData>
                  <CoinImage>
                    {props.coindata && (
                      <img src={props.coindata.image.small}></img>
                    )}
                  </CoinImage>
                  {props.coindata && (
                    <div>
                      {props.coindata.id} ({props.coindata.symbol.toUpperCase()}
                      )
                    </div>
                  )}
                </CoinData>
                <CoinsForm>
                  <Input
                    onChange={handleChange}
                    value={searchInput}
                    required
                    placeholder="Select Coins"
                  ></Input>
                  {clicked === false &&
                    searchInput &&
                    searchInput.length > 2 &&
                    props.coins && (
                      <FilteredDropdown id="coin-list">
                        {displayedCoins.map((coin) => (
                          <DropdownItem
                            onClick={(e) => handleClickedLink(coin.id)}
                            key={coin.id}
                          >
                            {coin.id} ({coin.symbol.toUpperCase()})
                          </DropdownItem>
                        ))}
                      </FilteredDropdown>
                    )}
                  <Input
                    onChange={handleAmount}
                    required
                    placeholder="Purchased Amount"
                  ></Input>
                  <Input
                    onChange={handlePrice}
                    required
                    placeholder="Purchased Price"
                  ></Input>
                  <Input
                    onChange={handlePurchaseDate}
                    required
                    type="date"
                    placeholder="Purchased Date"
                  ></Input>
                </CoinsForm>
              </CoinWrapper>
              <ButtonWrapper>
                <Button
                  onClick={handleClick}
                  $background={
                    props.colormode === "dark" ? "#FFFFFF" : "#F6F6F6"
                  }
                  $color={props.colormode === "dark" ? "#06D554" : "#1F2128"}
                >
                  Close
                </Button>
                <Button
                  onClick={addAsset}
                  $background="#06D554"
                  $color={props.colormode === "dark" ? "#FFFFFF" : "#1F2128"}
                >
                  Save and Continue
                </Button>
              </ButtonWrapper>
            </AddAssetWrapper>
          </Overlay>
        )}
      </Container>
      {assetList &&
        assetList.map((asset) => (
          <AssetList>
            <CoinData>
              <CoinImage>
                <img src={asset.image}></img>
              </CoinImage>
              {asset.assetName}
            </CoinData>
            <MetricsWrapper>
              Market price:
              <Metrics>
                <div>Current price: {asset.price}</div>
                <div>Price change 24h{asset.price}</div>
                <div>Market Cap vs Volume{asset.price}</div>
                <div>Circ supply vs max supply{asset.price}</div>
              </Metrics>
              Your coin:
              <Metrics>
                <div>Current price: {asset.price}</div>
                <div>Price change 24h{asset.price}</div>
                <div>Market Cap vs Volume{asset.price}</div>
                <div>Circ supply vs max supply{asset.price}</div>
              </Metrics>
            </MetricsWrapper>
          </AssetList>
        ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  coindata: state.coindata.coindata,
  colormode: state.colormode.colormode,
  coins: state.allcoins.coins,
});

const mapDispatchToProps = {
  getCoinData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
