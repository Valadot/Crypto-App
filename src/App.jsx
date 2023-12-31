import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "./App.styles";
import Portfolio from "./pages/Portfolio/Portfolio";
import Coinspage from "./pages/Coinspage/Coinspage";
import Coin from "./pages/Coin/Coin";

function App(props) {
  const darkTheme = {
    primary: "#191B1F",
    secondary: "#F6F6F6",
    componentBackground: "#2C2F36",
    pageBackground: "#1F2128",
    copyBackground: "rgba(22, 20, 20, 0.8)",
    chartColor: "rgb(33 114 229)",
  };

  const lightTheme = {
    primary: "#F6F6F6",
    secondary: "black",
    componentBackground: "#FFFFFF",
    pageBackground: "#FCFCFC",
    copyBackground: "rgba(216, 216, 216, 0.8)",
    chartColor: "rgb(26, 215, 97)",
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Coinspage />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/coin/:id",
      element: <Coin />,
    },
  ]);

  return (
    <ThemeProvider
      theme={{
        background: props.colormode === "dark" ? darkTheme : lightTheme,
      }}
    >
      <Container>
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  colormode: state.colormode.colormode,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
