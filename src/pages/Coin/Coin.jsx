
import Navbar from "../../components/Navbar/Navbar"
import ChinChart from "../../components/ChinChart/ChinChart"
import CoinDescription from "../../components/CoinDescription/CoinDescription"
import { Container } from "./Coin.styles"


const Coin = () => {

    return(
        <>
        <Navbar/>
        <Container>
        <ChinChart/>
        <CoinDescription/>
        </Container>       
         </>
    )
}

export default Coin