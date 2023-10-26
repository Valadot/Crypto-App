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
    ChartWrapper, ChartDescription,PriceData} from "./LineChart.styles"


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Filler
)

const LineChart = () => {

    const [todayDate, setTodayDate] = useState(new Date());
   
    const {colorMode,} = useContext(CurrencyColorContext);
    const {coinList, coinIcon,priceData} = useContext(CoinDataContext);

   

const dateLabels = [];
const fullDateLabels = [];
const startDate = new Date();
startDate.setDate(startDate.getDate() - 29); 
let currentDate = new Date(startDate);

while (currentDate <= new Date()) {
  dateLabels.push(currentDate.getDate()); // Full date for x-axis
  fullDateLabels.push(currentDate.toISOString().split('T')[0]); // Full date for tooltips
  currentDate.setDate(currentDate.getDate() + 1); // Increment the date by 1 day
  }

    const data={
        labels: dateLabels,
        datasets: [{
            data: priceData,
            backgroundColor: (context) => {
                
                const bgColor= colorMode === "dark" ? ["RGBA(0,255,95,0.56 )","RGBA(255,255,255,0.2 )","RGBA(0,255,95,0 )"] : ["RGBA(37,80,234,0.56)", "RGBA(37,80,234,0.2 )","RGBA(37,80,234,0)"]
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
            borderColor: colorMode === "dark" ? "#04DC55" : "#2550EA",
            pointBorderColor: colorMode === "dark" ? "#04DC55" : "#2550EA",
            fill: true,
            tension: 0.5,
            

        }]
    }

    const options = {
      elements: {
        point: {
          radius: 0,
          hoverRadius: 4,
          hitRadius: 10,
        }
      },
        scales: {
          x:{
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
              label: (context) => `Price: ${coinIcon} ${priceData[context.dataIndex].toLocaleString()}`
            },
          },
        },
        aspectRatio: undefined,
        responsive: true,
  maintainAspectRatio: true,
        layout: {
            padding:{
                left: 30,
                right: 30,
                top: 10,
                bottom: 10,
            }
        }
      };


    return(
        (
              <ChartWrapper>
                      <ChartDescription>
                  <h1>BTC</h1>
                  {coinIcon && coinList[0] && <PriceData>{coinIcon} {coinList[0].current_price.toLocaleString()}</PriceData>}
                    <h1>{todayDate.toDateString()}</h1>
                </ChartDescription>
                  <Line
                      data = {data}
                      options = {options}>
                        
      
                  </Line>
                  </ChartWrapper>
          )

    )
}

export default LineChart