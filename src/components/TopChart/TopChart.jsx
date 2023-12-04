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
    // Add event listener to track window size
    const handleResize = () => {
      setShowSlider(window.innerWidth <= 900);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!showSlider) {
    // Don't render the slider if the screen size is larger than 500px
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
  }

  const settings = {
    dots: true,
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
    </>
  );
};

export default TopChart;
