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
        <h1>In future you will see your portfolio here</h1>
        <PortfolioComponent />
      </Container>
    </>
  );
};

export default Portfolio;
