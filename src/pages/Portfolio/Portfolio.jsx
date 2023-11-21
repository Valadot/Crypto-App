import { Container } from "./Portfolio.styles";
import Navbar from "../../components/Navbar/Navbar";
import ChinChart from "../../components/ChinChart/ChinChart";
import PortfolioComponent from "../../components/Portfolio/Portfolio";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <Container>
        <ChinChart />
        <PortfolioComponent />
      </Container>
    </>
  );
};

export default Portfolio;
