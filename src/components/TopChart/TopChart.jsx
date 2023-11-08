import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Tooltip,
  Filler,
  BarElement,
} from "chart.js";
import { Container, Headline } from "./TopChart.styles";

import LineChart from "../Linechart/LineChart";
import BarChart from "../BarChart/BarChart";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Filler
);

const TopChart = () => {
  return (
    <>
      <Headline>
        <h1>Your Overview</h1>
      </Headline>
      <Container>
        <LineChart />
        <BarChart />
      </Container>
    </>
  );
};

export default TopChart;
