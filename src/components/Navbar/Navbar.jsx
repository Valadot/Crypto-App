import {useState, useContext} from "react"
import { CurrencyColorContext } from "../../contexts/CurrencyColorProvider/CurrencyColorProvider";
import {NavbarContainer, RightNavbar,SearchWrapper,ThemeChangeWrapper,CurrencyChangeWrapper,SearchInput,CurrencyChanger,NavLinkWrapper,StyledLink} from "./Navbar.styles"
import DarkTheme from "../../assets/dark-theme.svg"
import LightTheme from "../../assets/light-theme.svg"
import CurrencySymbol from "../CurrencySymbol/CurrencySymbol"
import { currencyLogo } from "../../utils/currencyLogo/currencyLogo"
import MagnyfingGlassDark from "../../assets/magnifying-glass-dark.svg"
import MagnyfingGlassLight from "../../assets/magnifying-glass-light.svg"



const Navbar = () => {

  const {currency, setCurrency, colorMode, setColorMode} = useContext(CurrencyColorContext)
  const [activeLink, setActiveLink] = useState("");

  const handleColorModeChange = () => {

    if (colorMode === "light"){
      setColorMode("dark")
    } else {
      setColorMode("light")
    }
  }


  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value)
  }
  return (
    <NavbarContainer>
      <NavLinkWrapper>
      <StyledLink to="/"
      onClick={() => setActiveLink("Coins")}
      className={activeLink === "Coins" ? "active" : ""}>
        Coins
        </StyledLink>
      <StyledLink to="/portfolio"
      onClick={() => setActiveLink("Portfolio")}
      className={activeLink === "Portfolio" ? "active" : ""}>
        Portfolio</StyledLink>
      </NavLinkWrapper>
          <RightNavbar>
            <SearchWrapper>
              <img src={colorMode === "dark" ? MagnyfingGlassLight : MagnyfingGlassDark}></img>
              <SearchInput placeholder="Search..."/>
            </SearchWrapper >
            <CurrencyChangeWrapper>
              <CurrencySymbol currency={currencyLogo(currency)} />
              <CurrencyChanger onChange={handleCurrencyChange} name="currency" value={currency}>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
              </CurrencyChanger>
            </CurrencyChangeWrapper>
            <ThemeChangeWrapper>
            <img onClick={handleColorModeChange} style={{width: "25px"}} src={colorMode === "dark" ? LightTheme : DarkTheme}></img>
            </ThemeChangeWrapper>
          </RightNavbar>
          </NavbarContainer>
  );
};

export default Navbar;
