import {ThemeProvider} from "styled-components"
import {Container} from "./App.styles"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import Coinspage from "./pages/Coinspage/Coinspage";
import {CurrencyColorProvider, CurrencyColorContext} from "./contexts/CurrencyColorProvider/CurrencyColorProvider"
import { useContext } from "react";




function App() {

  const {currency, setCurrency, colorMode, setColorMode} = useContext(CurrencyColorContext)

  const darkTheme = {
    primary: "#191B1F",
    secondary: "#F6F6F6",
    componentBackground: "#2C2F36",
    pageBackground: "#1F2128"
  }

  const lightTheme = {
    primary: "#F6F6F6",
    secondary: "black",
    componentBackground: "#EDEFF2",
    pageBackground:"#F7F7F7"
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
  
    }
  ]);


  

  return (
      <ThemeProvider theme={{background: colorMode === "dark" ? darkTheme : lightTheme}}>
      <Container>
        <RouterProvider router={router} />
        </Container>
      </ThemeProvider> 
  )
}




export default App
