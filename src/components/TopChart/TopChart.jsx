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
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Headline, Wrapper } from "./TopChart.styles";

import LineChart from "../Linechart/LineChart";
import BarChart from "../BarChart/BarChart";
import BTCTimeFrameChart from "../BTCTimeFrameChart/BTCTimeFrameChart";

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
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowSlider(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!showSlider) {
    return (
      <>
        <Headline>
          <h1>Your Overview</h1>
        </Headline>
        <Container>
          <LineChart />
          <BarChart />
        </Container>
        <BTCTimeFrameChart />
      </>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Headline>
        <h1>Your Overview</h1>
      </Headline>

      <Container>
        <Slider {...settings}>
          <Wrapper>
            <LineChart />
          </Wrapper>
          <Wrapper>
            <BarChart />
          </Wrapper>
        </Slider>
      </Container>
      <BTCTimeFrameChart />
    </>
  );
};

export default TopChart;
