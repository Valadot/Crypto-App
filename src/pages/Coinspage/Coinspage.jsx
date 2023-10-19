
import {Container} from "./Coinspage.styles"
import Navbar from "../../components/Navbar/Navbar"
import CoinsList from "../../components/CoinsList/CoinsList"
import TopChart from "../../components/TopChart/TopChart"
import ChinChart from "../../components/ChinChart/ChinChart"


function Coinspage() {

  
    return (
      <>
      <Navbar />
      <Container>
      <ChinChart />
        <TopChart />
        

        <CoinsList/>
  
      </Container>
      </>
    )
  }
  
  export default Coinspage