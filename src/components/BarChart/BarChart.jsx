import {Line, Bar} from "react-chartjs-2"
import axios from "axios";
import {
    Chart as ChartJS,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement,
    Tooltip,
    Filler,
    BarElement
} from "chart.js"
import { useContext, useState } from "react";
import { CurrencyColorContext } from "../../contexts/CurrencyColorProvider/CurrencyColorProvider";
import { CoinDataContext } from "../../contexts/CoinDataProvider/CoinDataProvider";
import {
    ChartWrapper, ChartDescription,PriceData} from "./BarChart.styles";
import { formatNumber } from "../../utils/formatNumber/formatNumber";
  


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Tooltip,
    Filler
)

const BarChart = () => {
    const [todayDate, setTodayDate] = useState(new Date());
    const {colorMode,currency} = useContext(CurrencyColorContext);
    const {coinList, coinIcon,volumeData} = useContext(CoinDataContext);


    const BardataPoints = [volumeData];

    const BarDateLabels = [];
    const BarFullDateLabels = [];
    const BarStartDate = new Date();
    BarStartDate.setDate(BarStartDate.getDate() - 29); // today - 29days
    let BarcurrentDate = new Date(BarStartDate);

    while (BarcurrentDate <= new Date()) {
    BarDateLabels.push(BarcurrentDate.getDate()); // full date for X-axis
    BarFullDateLabels.push(BarcurrentDate.toISOString().split('T')[0]); // full date for tooltips
    BarcurrentDate.setDate(BarcurrentDate.getDate() + 1); // increment date by 1 day
    }

    const BarfullData = [];
    let BardataIndex = 0;

    while (BardataIndex < BardataPoints.length) {
        BarfullData.push(BardataPoints[BardataIndex]);
        BardataIndex++;
    }

      const Bardata = {
        labels: BarDateLabels,
        datasets: [{
            data: volumeData,
            backgroundColor: colorMode === "dark" ? "#2172E5" : "#1AD761",
            barPercentage: 1,
            borderRadius: 4,
        }]
      }

      const Baroptions = {
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
                title: (tooltipItem) => BarFullDateLabels[tooltipItem[0].dataIndex],
              label: (context) => `Volume: ${coinIcon} ${volumeData[context.dataIndex].toLocaleString()}`
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
            padding:{
                left: 40,
                right: 40,
                top: 10,
                bottom: 10,
            }
        }

    }

    return(
        <ChartWrapper>
        <ChartDescription>
      <h1>Volume 24h</h1>
      {coinIcon && coinList[0] && <PriceData>{coinIcon} {formatNumber(coinList[0].total_volume)}</PriceData>}
        <h1>{todayDate.toDateString()}</h1>
    </ChartDescription>
      <Bar
      
          data = {Bardata}
          options = {Baroptions}
      >
      </Bar>
      </ChartWrapper>
    )

}

export default BarChart