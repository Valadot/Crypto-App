import {useState} from "react"
import { NavLink } from "react-router-dom";
import {NavbarContainer, RightNavbar} from "./Navbar.styles"
import DarkTheme from "../../assets/dark-theme.svg"
import LightTheme from "../../assets/light-theme.svg"

const Navbar = () => {
  const [colorMode, setColorMode] = useState("light")

  const handleColorModeChange = () => {

    if (colorMode === "light"){
      setColorMode("dark")
    } else {
      setColorMode("light")
    }
  }
  return (
    <NavbarContainer>
      <div>
      <NavLink to="/">Coins</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      </div>
          <RightNavbar>
            <div>
              <img></img>
              <input />
            </div>
            <div>
              
              <select name="currency">
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
              </select>
            </div>
            <div>
            <img onClick={handleColorModeChange} style={{width: "25px"}} src={colorMode === "dark" ? DarkTheme : LightTheme}></img>
            </div>
          </RightNavbar>
          </NavbarContainer>
  );
};

export default Navbar;
