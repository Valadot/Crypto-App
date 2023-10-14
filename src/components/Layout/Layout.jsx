import {useState, useContext} from "react"
import {PageLayout} from "./Layout.styles"
import {ThemeProvider} from "styled-components"
import { CurrencyColorContext } from "../../contexts/CurrencyColorProvider/CurrencyColorProvider";

const Layout = ({ children }) => {

    const {colorMode, setColorMode} = useContext(CurrencyColorContext)

    return (
    <>
    <ThemeProvider theme={{background: colorMode === "dark" ? "#191B1F" : "#FFFFFF"}}>
    <PageLayout>{children}</PageLayout>
    </ThemeProvider>
    </>
    )
};

export default Layout;