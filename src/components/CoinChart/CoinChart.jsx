import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { useState } from "react";

import { ChartWrapper } from "./CoinChart.styles";
import { formatPrice } from "../../utils/formatPrice/formatPrice";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const CoinChart = (props) => {
  const [todayDate, setTodayDate] = useState(new Date());

  const pricesCount = props.chartdata.length; // take the length here to calculate the days as they are dynamic

  const startDate = new Date(todayDate);
  startDate.setDate(todayDate.getDate() - pricesCount);

  // Labels for the X-asis, loop pushes the dates until it reaches the pricesCount length
  const dateLabels = [];
  for (let i = 0; i < pricesCount; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dateLabels.push(date.toISOString().split("T")[0]);
  }

  const data = {
    labels: dateLabels,
    datasets: [
      {
        data: props.chartdata,
        backgroundColor: (context) => {
          const bgColor =
            props.colormode === "dark"
              ? ["#404040", "#2C2D33", "RGBA(23,24,33,0)"]
              : [
                  "RGBA(37,80,234,0.56)",
                  "RGBA(37,80,234,0.2 )",
                  "RGBA(37,80,234,0)",
                ];
          if (!context.chart.chartArea) {
            return;
          }

          const {
            ctx,
            data,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBg.addColorStop(0, bgColor[0]);
          gradientBg.addColorStop(0.5, bgColor[1]);
          gradientBg.addColorStop(1, bgColor[2]);
          return gradientBg;
        },
        borderColor: props.colormode === "dark" ? "#2C2D33" : "#2550EA",
        pointBorderColor: props.colormode === "dark" ? "#146638" : "#2550EA",

        pointBackgroundColor:
          props.colormode === "dark" ? "#00FF5F" : "#2550EA",
        fill: true,
        tension: 0.5,
        pointHoverRadius: 9,
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 0,
        hoverRadius: 4,
        hitRadius: 40,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 1,
          minRotation: 0,
          maxRotation: 0,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItem) => dateLabels[tooltipItem[0].dataIndex],
          label: (context) =>
            `Price: ${props.currencyIcon} ${formatPrice(
              props.chartdata[context.dataIndex]
            )}`,
        },
        itemRadius: 8,
        titleFont: {
          size: 16,
        },
        bodyFont: {
          size: 16,
        },
      },
    },
    aspectRatio: undefined,
    responsive: true,
    maintainAspectRatio: false,
    layout: {},
  };

  return (
    <ChartWrapper>
      {!props.chartdata && <div>Loading...</div>}
      <Line data={data} options={options}></Line>
    </ChartWrapper>
  );
};

const mapStateToProps = (state) => ({
  chartdata: state.coinchartdata.chartdata,
  isLoading: state.coinchartdata.isLoading,
  error: state.coinchartdata.error,
  currencyIcon: state.currency.currencyIcon,
  colormode: state.colormode.colormode,
});

export default connect(mapStateToProps)(CoinChart);
