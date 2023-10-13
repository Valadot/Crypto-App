import {useState, useContext} from "react"
import { NavLink } from "react-router-dom";
import { CurrencyColorContext } from "../../contexts/CurrencyColorProvider/CurrencyColorProvider";
import {NavbarContainer, RightNavbar,SearchWrapper,ThemeChangeWrapper,CurrencyChangeWrapper,SearchInput,CurrencyChanger,NavLinkWrapper,StyledLink} from "./Navbar.styles"
import DarkTheme from "../../assets/dark-theme.svg"
import LightTheme from "../../assets/light-theme.svg"
import CurrencySymbol from "../CurrencySymbol/CurrencySymbol"
import DollarSign from "../../assets/dollar-sign.svg"
import PoundSign from "../../assets/gbp-sign.svg"
import EuroSign from "../../assets/eur-sign.svg"
import BitcoinSign from "../../assets/btc-sign.svg"
import EthereumSign from "../../assets/eth-sign.svg"
import MagnyfingGlassDark from "../../assets/magnifying-glass-dark.svg"
import MagnyfingGlassLight from "../../assets/magnifying-glass-light.svg"
import Layout from "../Layout/Layout";


const Navbar = () => {

  const {currency, setCurrency, colorMode, setColorMode} = useContext(CurrencyColorContext)

  const handleColorModeChange = () => {

    if (colorMode === "light"){
      setColorMode("dark")
    } else {
      setColorMode("light")
    }
  }

  const CurrencyLogo = {
    USD: DollarSign,
    GBP:PoundSign,
    EUR: EuroSign,
    BTC: BitcoinSign,
    ETH: EthereumSign
  }

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value)
  }
  return (
    <Layout>
    <NavbarContainer>
      <NavLinkWrapper>
      <StyledLink bgcolor={colorMode === "dark" ? "#2c2f36" : "#EDEFF2"} textcolor={colorMode === "dark" ? "#f6f6f6" : "black"} to="/">Coins</StyledLink>
      <StyledLink bgcolor={colorMode === "dark" ? "#2c2f36" : "#EDEFF2"}  textcolor={colorMode === "dark" ? "#f6f6f6" : "black"}to="/portfolio">Portfolio</StyledLink>
      </NavLinkWrapper>
          <RightNavbar>
            <SearchWrapper bgcolor={colorMode === "dark" ? "#2c2f36" : "#EDEFF2"} >
              <img src={colorMode === "dark" ? MagnyfingGlassLight : MagnyfingGlassDark}></img>
              <SearchInput placeholder="Search..." textcolor={colorMode === "dark" ? "#f6f6f6" : "black"}/>
            </SearchWrapper >
            <CurrencyChangeWrapper bgcolor={colorMode === "dark" ? "#2c2f36" : "#EDEFF2"}>
              <CurrencySymbol currency={CurrencyLogo[currency]} />
              <CurrencyChanger onChange={handleCurrencyChange} name="currency" value={currency} bgcolor={colorMode === "dark" ? "#2c2f36" : "#EDEFF2"} textcolor={colorMode === "dark" ? "#f6f6f6" : "black"}>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
              </CurrencyChanger>
            </CurrencyChangeWrapper>
            <ThemeChangeWrapper bgcolor={colorMode === "dark" ? "#2c2f36" : "#EDEFF2"}>
            <img onClick={handleColorModeChange} style={{width: "25px"}} src={colorMode === "dark" ? LightTheme : DarkTheme}></img>
            </ThemeChangeWrapper>
          </RightNavbar>
          </NavbarContainer>
          </Layout>
  );
};

export default Navbar;
