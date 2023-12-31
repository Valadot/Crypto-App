import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

export const Sparkline = ({ data, last7d }) => {
  const prices = data && data.price.map((el) => el);

  const labels = [...Array(data.price.length).keys()];

  const borderColor = last7d && last7d >= 0 ? "#00FF5F" : "#FE1040";

  const chartData = {
    labels: labels,
    datasets: [
      {
        fill: true,
        pointBorderColor: "#191B1F",
        tension: 1,
        label: "BTC",
        data: prices,
        backgroundColor: ["transparent"],
        borderColor: [borderColor],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    legend: {
      display: false,
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    hover: {
      intersect: false,
    },
    responsive: false,
    maintainAspectRatio: false,
    aspectRatio: 2,
    title: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 0,
        rotation: 1,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };
  return (
    <Line data={chartData} height={70} width={150} options={chartOptions} />
  );
};

export default Sparkline;
