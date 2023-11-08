import { Line } from "react-chartjs-2";
import axios from "axios";
import { useEffect } from "react";
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
import { ChartWrapper, ChartDescription, PriceData } from "./LineChart.styles";
import { getCurrency } from "../../store/currency/actions";
import { getBitcoinData } from "../../store/bitcoinChartData/actions";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const LineChart = (props) => {
  const [todayDate, setTodayDate] = useState(new Date());
  const dateLabels = [];
  const fullDateLabels = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 29);
  let currentDate = new Date(startDate);

  while (currentDate <= new Date()) {
    dateLabels.push(currentDate.getDate()); // Full date for x-axis
    fullDateLabels.push(currentDate.toISOString().split("T")[0]); // Full date for tooltips
    currentDate.setDate(currentDate.getDate() + 1); // Increment the date by 1 day
  }

  const data = {
    labels: dateLabels,
    datasets: [
      {
        data: props.pricedata,
        backgroundColor: (context) => {
          const bgColor =
            props.colormode === "dark"
              ? [
                  "RGBA(0,255,95,0.56 )",
                  "RGBA(255,255,255,0.2 )",
                  "RGBA(0,255,95,0 )",
                ]
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
        borderColor: props.colormode === "dark" ? "#04DC55" : "#2550EA",
        pointBorderColor: props.colormode === "dark" ? "#04DC55" : "#2550EA",
        fill: true,
        tension: 0.5,
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 0,
        hoverRadius: 4,
        hitRadius: 10,
      },
    },
    scales: {
      x: {
        display: true,
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
          title: (tooltipItem) => fullDateLabels[tooltipItem[0].dataIndex],
          label: (context) =>
            `Price: ${props.currencyIcon} ${props.pricedata[
              context.dataIndex
            ].toLocaleString()}`,
        },
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
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 40,
        right: 40,
        top: 10,
        bottom: 10,
      },
    },
  };

  useEffect(() => {
    props.getBitcoinData();
  }, [props.currency]);

  return (
    <ChartWrapper>
      <ChartDescription>
        <h1>BTC</h1>
        {props.coinlist[0] && (
          <PriceData>
            {props.currencyIcon}{" "}
            {props.coinlist[0].current_price.toLocaleString()}
          </PriceData>
        )}
        <h1>{todayDate.toDateString()}</h1>
      </ChartDescription>
      <Line data={data} options={options}></Line>
    </ChartWrapper>
  );
};

const mapStateToProps = (state) => ({
  coinlist: state.coinlist.data,
  pricedata: state.bitcoinChartData.priceData,
  isLoading: state.bitcoinChartData.isLoading,
  error: state.bitcoinChartData.error,
  currency: state.currency.currency,
  currencyIcon: state.currency.currencyIcon,
  colormode: state.colormode.colormode,
});

const mapDispatchToProps = {
  getCurrency,
  getBitcoinData,
};

export default connect(mapStateToProps, mapDispatchToProps)(LineChart);
