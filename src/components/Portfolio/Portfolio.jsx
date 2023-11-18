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
} from "./Portfolio.styles";

const Portfolio = (props) => {
  const [showAddAsset, setShowAddAsset] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [searchInput, setSearchInput] = useState("");

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

  const handleClickedLink = () => {
    setClicked(true);
  };

  return (
    <Container>
      <AddAssetButton onClick={handleClick}>Add Asset</AddAssetButton>

      {showAddAsset && (
        <Overlay>
          <AddAssetWrapper>
            Select Coins
            <CoinWrapper>
              <CoinData>
                <CoinImage></CoinImage>
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
                        <DropdownItem onClick={handleClickedLink} key={coin.id}>
                          {coin.id} ({coin.symbol.toUpperCase()})
                        </DropdownItem>
                      ))}
                    </FilteredDropdown>
                  )}
                <Input required placeholder="Purchased Amount"></Input>
                <Input required placeholder="Purchased Price"></Input>
                <Input
                  required
                  type="date"
                  placeholder="Purchased Date"
                ></Input>
              </CoinsForm>
            </CoinWrapper>
            <ButtonWrapper>
              <Button
                onClick={handleClick}
                $background={props.colormode === "dark" ? "#FFFFFF" : "#F6F6F6"}
                $color={props.colormode === "dark" ? "#06D554" : "#1F2128"}
              >
                Close
              </Button>
              <Button
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
  );
};

const mapStateToProps = (state) => ({
  colormode: state.colormode.colormode,
  coins: state.allcoins.coins,
});

export default connect(mapStateToProps)(Portfolio);
