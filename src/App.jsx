import { useContext } from "react";
import {ThemeProvider} from "styled-components"
import {Container} from "./App.styles"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import Portfolio from "./pages/Portfolio/Portfolio";
import Coinspage from "./pages/Coinspage/Coinspage";
import {CurrencyColorProvider, CurrencyColorContext} from "./contexts/CurrencyColorProvider/CurrencyColorProvider"
import Coin from "./pages/Coin/Coin";





function App() {

  const {colorMode} = useContext(CurrencyColorContext)

  const darkTheme = {
    primary: "#191B1F",
    secondary: "#F6F6F6",
    componentBackground: "#2C2F36",
    pageBackground: "#1F2128",
    copyBackground: "rgba(22, 20, 20, 0.8)"
  }

  const lightTheme = {
    primary: "#F6F6F6",
    secondary: "black",
    componentBackground: "#EDEFF2",
    pageBackground:"#F7F7F7",
    copyBackground: "rgba(216, 216, 216, 0.8)"
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <Coinspage/>
    },
    {
      path: "/portfolio",
      element:
        <Portfolio />
  
    },
    {
    path: "/coin/:id",
    element:
    <Coin />
    },
  ]);


  

  return (
      <ThemeProvider theme={{background: colorMode === "dark" ? darkTheme : lightTheme}}>
      <Container>
        
        <RouterProvider router={router} />
        <BackToTopButton/>
        </Container>
      </ThemeProvider> 
  )
}




export default App
