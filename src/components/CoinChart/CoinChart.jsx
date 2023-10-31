import {Line} from "react-chartjs-2"
import axios from "axios";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement,
    Tooltip,
    Filler,
} from "chart.js"
import { useContext, useState } from "react";
import { CurrencyColorContext } from "../../contexts/CurrencyColorProvider/CurrencyColorProvider";
import { CoinDataContext } from "../../contexts/CoinDataProvider/CoinDataProvider";
import {
    ChartWrapper} from "./CoinChart.styles"


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Filler
)

const CoinChart = () => {

    const [todayDate, setTodayDate] = useState(new Date());
   
    const {colorMode,} = useContext(CurrencyColorContext);
    const {coinList, coinIcon,priceData, coinChart, timeFrame,} = useContext(CoinDataContext);
    const pricesCount = coinChart.length;
  // Calculate the start date based on the number of prices
  const startDate = new Date(todayDate);
  startDate.setDate(todayDate.getDate() - pricesCount);

    // Generate date labels for the x-axis
  const dateLabels = [];
  for (let i = 0; i < pricesCount; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dateLabels.push(date.toISOString().split('T')[0]);
  }




    const data={
        labels: dateLabels,
        datasets: [{
            data: coinChart,
            backgroundColor: (context) => {
                
                const bgColor= colorMode === "dark" ? ["#404040","#2C2D33","RGBA(23,24,33,0)"] : ["RGBA(37,80,234,0.56)", "RGBA(37,80,234,0.2 )","RGBA(37,80,234,0)"]
                if(!context.chart.chartArea){
                    return;
                }

                const {ctx, data, chartArea:{top,bottom}} = context.chart;
                const gradientBg = ctx.createLinearGradient(0,top,0,bottom);
                gradientBg.addColorStop(0, bgColor[0])
                gradientBg.addColorStop(0.5, bgColor[1])
                gradientBg.addColorStop(1, bgColor[2])
                return gradientBg
            },
            borderColor: colorMode === "dark" ? "#2C2D33" : "#2550EA",
            pointBorderColor: colorMode === "dark" ? "#146638" : "#2550EA",

            pointBackgroundColor: colorMode === "dark" ? "#00FF5F":"#2550EA" ,
            fill: true,
            tension: 0.5,
            pointHoverRadius: 9,
            

        }]
    }

    const options = {
      elements: {
        point: {
          radius: 0,
          hoverRadius: 4,
          hitRadius: 40,
        }
      },
        scales: {
          x:{
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
              label: (context) => `Price: ${coinIcon} ${coinChart[context.dataIndex].toLocaleString()}`,
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
        layout: {
        }
      };


    return(
              <ChartWrapper>
                  <Line
                      data = {data}
                      options = {options}>
                  </Line>
                  </ChartWrapper>
          )
}

export default CoinChart