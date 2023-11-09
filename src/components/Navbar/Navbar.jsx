import { useState, useContext, useEffect } from "react";
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
} from "./Navbar.styles";
import DarkTheme from "../../assets/dark-theme.svg";
import LightTheme from "../../assets/light-theme.svg";
import CurrencySymbol from "../CurrencySymbol/CurrencySymbol";
import { currencyLogo } from "../../utils/currencyLogo/currencyLogo";
import MagnyfingGlassDark from "../../assets/magnifying-glass-dark.svg";
import MagnyfingGlassLight from "../../assets/magnifying-glass-light.svg";
import { getCurrency } from "../../store/currency/actions";
import { changeColorMode } from "../../store/colormode/actions";

const Navbar = (props) => {
  const [activeLink, setActiveLink] = useState("");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
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
          <SearchInput placeholder="Search..." />
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
});

const mapDispatchToProps = {
  getCurrency,
  changeColorMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
