import {ThemeProvider} from "styled-components"
import {Container} from "./Portfolio.styles"
import Navbar from "../Navbar/Navbar"
import Layout from "../Layout/Layout"





const Portfolio = () => {
    return(
      <Layout>
        <Container>
          <Navbar />
          <h1>In future you will see your portfolio here</h1>
    
        </Container>
        </Layout>
    )
}

export default Portfolio