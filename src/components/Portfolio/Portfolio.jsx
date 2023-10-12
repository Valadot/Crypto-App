import {ThemeProvider} from "styled-components"
import {Container} from "./Portfolio.styles"
import Navbar from "../Navbar/Navbar"





const Portfolio = () => {
    return(
        <ThemeProvider theme={{red:"violet"}}>
        <Container>
          <Navbar />
          <h1>In future you will see your portfolio here</h1>
    
        </Container>
        </ThemeProvider>
    )
}

export default Portfolio