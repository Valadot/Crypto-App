import {Container} from "./Coinspage.styles"
import Navbar from "../../components/Navbar/Navbar"
import CoinsList from "../../components/CoinsList/CoinsList"
import TopChart from "../../components/TopChart/TopChart"
import { useState } from "react"


function Coinspage() {

  
    return (
      <Container>
        <Navbar />
        <h2>Your overview</h2>
        <TopChart />

        <CoinsList/>
  
      </Container>
    )
  }
  
  export default Coinspage