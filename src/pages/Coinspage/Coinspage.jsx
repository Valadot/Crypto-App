import {Container} from "./Coinspage.styles"
import Navbar from "../../components/Navbar/Navbar"
import CoinsList from "../../components/CoinsList/CoinsList"
import TopChart from "../../components/TopChart/TopChart"
import { useState } from "react"


function Coinspage() {

  
    return (
      <>
      <Navbar />
      <Container>
        <TopChart />

        <CoinsList/>
  
      </Container>
      </>
    )
  }
  
  export default Coinspage