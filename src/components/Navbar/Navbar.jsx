import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  NavbarContainer,
  RightNavbar,
  SearchWrapper,
  ThemeChangeWrapper,
  CurrencyChangeWrapper,
  SearchInput,
  CurrencyChanger,
  NavLinkWrapper,
  StyledLink,
  FilteredDropdown,
  DropdownItem,
} from "./Navbar.styles";
import DarkTheme from "../../assets/dark-theme.svg";
import LightTheme from "../../assets/light-theme.svg";
import CurrencySymbol from "../CurrencySymbol/CurrencySymbol";
import { currencyLogo } from "../../utils/currencyLogo/currencyLogo";
import MagnyfingGlassDark from "../../assets/magnifying-glass-dark.svg";
import MagnyfingGlassLight from "../../assets/magnifying-glass-light.svg";
import { getCurrency } from "../../store/currency/actions";
import { changeColorMode } from "../../store/colormode/actions";
import { getAllCoins } from "../../store/allCoinsList/actions";

const Navbar = (props) => {
  const [activeLink, setActiveLink] = useState("");
  const [sticky, setSticky] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setClicked(false);
  };

  const handleClickedLink = () => {
    setClicked(true);
  };

  const filteredCoins = props.coins.filter(
    (coin) =>
      coin.id.startsWith(searchInput) || coin.symbol.startsWith(searchInput)
  );

  const displayedCoins = filteredCoins.slice(0, 5);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    props.getAllCoins();
    document.addEventListener("click", handleClickedLink);
    window.addEventListener("scroll", handleScroll);
    return (
      () => window.removeEventListener("scroll", handleScroll),
      document.removeEventListener("click", handleClickedLink)
    );
  }, [clicked]);
  return (
    <NavbarContainer className={`${sticky ? "sticky" : ""}`}>
      <NavLinkWrapper>
        <StyledLink
          to="/"
          onClick={() => setActiveLink("Coins")}
          className={activeLink === "Coins" ? "active" : ""}
        >
          Coins
        </StyledLink>
        <StyledLink
          to="/portfolio"
          onClick={() => setActiveLink("Portfolio")}
          className={activeLink === "Portfolio" ? "active" : ""}
        >
          Portfolio
        </StyledLink>
      </NavLinkWrapper>
      <RightNavbar>
        <SearchWrapper>
          <img
            src={
              props.colormode === "dark"
                ? MagnyfingGlassLight
                : MagnyfingGlassDark
            }
          ></img>
          <SearchInput
            onChange={handleChange}
            value={searchInput}
            placeholder="Search..."
          />
          {clicked === false &&
            searchInput &&
            searchInput.length > 2 &&
            props.coins && (
              <FilteredDropdown id="coin-list">
                {displayedCoins.map((coin) => (
                  <DropdownItem
                    onClick={handleClickedLink}
                    to={`/coin/${coin.id}`}
                    key={coin.id}
                  >
                    {coin.id} ({coin.symbol.toUpperCase()})
                  </DropdownItem>
                ))}
              </FilteredDropdown>
            )}
        </SearchWrapper>
        <CurrencyChangeWrapper>
          <CurrencySymbol currency={currencyLogo(props.currency)} />
          <CurrencyChanger
            onChange={(e) => props.getCurrency(e.target.value)}
            name="currency"
            value={props.currency}
          >
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </CurrencyChanger>
        </CurrencyChangeWrapper>
        <ThemeChangeWrapper
          onClick={() => props.changeColorMode(props.colormode)}
        >
          <img
            style={{ width: "25px" }}
            src={props.colormode === "dark" ? LightTheme : DarkTheme}
          ></img>
        </ThemeChangeWrapper>
      </RightNavbar>
    </NavbarContainer>
  );
};

const mapStateToProps = (state) => ({
  currency: state.currency.currency,
  colormode: state.colormode.colormode,
  coins: state.allcoins.coins,
});

const mapDispatchToProps = {
  getCurrency,
  changeColorMode,
  getAllCoins,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
