import { useState, useEffect } from "react";
import uuid from "react-uuid";
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
} from "./Portfolio.styles";
import { getCoinData } from "../../store/coindata/actions";
import AssetList from "../AssetList/AssetList";

const Portfolio = (props) => {
  const [showAddAsset, setShowAddAsset] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [asset, setAsset] = useState({});
  const [assetList, setAssetList] = useState([]);
  const [ButtonisDisabled, setButtonIsDisabled] = useState(true);

  const handleClick = () => {
    setShowAddAsset(!showAddAsset);
    setAsset({});
    setSearchInput("");
  };

  const filteredCoins = props.coins.filter(
    (coin) =>
      coin.id.toLowerCase().startsWith(searchInput.toLowerCase()) ||
      coin.symbol.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  const displayedCoins = filteredCoins.slice(0, 5);

  function formatDateForApiCall(inputDate) {
    const [year, month, day] = inputDate.split("-");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  }

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

  const removeCoinsDropdown = () => {
    setClicked(true);
  };

  const handleAmount = (e) => {
    setAsset({ ...asset, amount: e.target.value });
  };

  const handlePurchaseDate = (e) => {
    const selectedDate = new Date(e.target.value);
    const todayDate = new Date();
    if (selectedDate > todayDate) {
      alert("Please select a date on or before today.");
      setButtonIsDisabled(true);
      setAsset({
        ...asset,
        purchaseDate: "",
      });
      e.target.value = "";

      return;
    } else {
      setAsset({
        ...asset,
        purchaseDate: formatDateForApiCall(e.target.value),
      });
    }
  };

  const checkValues = () => {
    if (asset.purchaseDate && asset.amount && asset.assetName !== undefined) {
      setButtonIsDisabled(false);
    } else {
      setButtonIsDisabled(true);
    }
  };

  const addAsset = (asset) => {
    if (!ButtonisDisabled) {
      setAssetList([
        ...assetList,
        { ...asset, image: props.coindata.image.small, id: uuid() },
      ]);
      setShowAddAsset(!showAddAsset);
      setAsset({});
      props.coindata.image = "";
      props.coindata.id = "";
    } else {
      alert("Please put in the missing info.");
    }
  };

  const handleAssetDelete = (asset) => {
    const newAssetList = assetList.filter((assets) => assets.id !== asset.id);
    setAssetList(newAssetList);
  };

  useEffect(() => {
    checkValues();
  }, [asset.purchaseDate, asset.amount, asset.assetName]);

  useEffect(() => {
    document.addEventListener("click", removeCoinsDropdown);
    return () => {
      document.removeEventListener("click", removeCoinsDropdown);
    };
  }, [clicked]);

  return (
    <>
      <Container>
        <AddAssetButton onClick={handleClick}>Add Asset</AddAssetButton>

        {showAddAsset && (
          <Overlay>
            <AddAssetWrapper>
              <div>Select Coins</div>
              <CoinWrapper>
                <CoinData>
                  <CoinImage>
                    {props.coindata.image && (
                      <img
                        src={asset.assetName && props.coindata.image.small}
                        alt="Icon of the Coin"
                      ></img>
                    )}
                  </CoinImage>
                  {props.coindata.id && asset.assetName && (
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
                      <FilteredDropdown>
                        {displayedCoins.map((coin) => (
                          <DropdownItem
                            onClick={() => handleClickedLink(coin.id)}
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
                    value={asset.amount || ""}
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
                  disabled={ButtonisDisabled}
                  onClick={() => addAsset(asset)}
                  $background="#06D554"
                  $color={props.colormode === "dark" ? "#FFFFFF" : "#1F2128"}
                >
                  Save
                </Button>
              </ButtonWrapper>
            </AddAssetWrapper>
          </Overlay>
        )}
      </Container>
      <AssetList
        assets={assetList}
        setAssets={(newList) => setAssetList(newList)}
        setAsset={(newAsset) => setAsset(newAsset)}
        deleteAsset={handleAssetDelete}
        setShowAddAsset={setShowAddAsset}
      />
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
