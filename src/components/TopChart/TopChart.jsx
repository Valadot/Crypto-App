import {Line, Bar} from "react-chartjs-2"
import axios from "axios";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement,
    Tooltip,
    Filler,
    BarElement
} from "chart.js"
import { useEffect } from "react";
import { useContext, useState } from "react";
import { CurrencyColorContext } from "../../contexts/CurrencyColorProvider/CurrencyColorProvider";
import {Container,
    ChartWrapper} from "./TopChart.styles"


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Tooltip,
    Filler
)

const TopChart =() => {
 const [priceData, setPriceData] = useState([]);
 const [volumeData, setVolumeData] = useState([]);

 const {colorMode} = useContext(CurrencyColorContext);

    const getChartData = async( ) => {
        try {
            const {data} = await axios ("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily")
        
           
           setPriceData(data.prices.map(price => price[1]))
           setVolumeData(data.total_volumes.map(volume => volume[1]))
        } catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
        getChartData()
    }, []);




    //for the line chart - showing data for 2 days
const dataPoints = priceData;
const dateLabels = [];
const fullDateLabels = [];
const startDate = new Date();
startDate.setDate(startDate.getDate() - 29); 
let currentDate = new Date(startDate);

while (currentDate <= new Date()) {
  dateLabels.push(currentDate.getDate());
  fullDateLabels.push(currentDate.toISOString().split('T')[0]); 
  currentDate.setDate(currentDate.getDate() + 2); 
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
            pointBorderColor: "white",
            fill: true,
            tension: 0.5,
            

        }]
    }

    const options = {
        scales: {
          x: {
            display: true,
            grid: {
                display: false,
            },
            ticks: {
              stepSize: 1,
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
              label: (context) => `Price: ${priceData[context.dataIndex].toFixed(2)}`
            },
          },
        },
        layout: {
            padding:{
                left: 10,
                right: 10,
                top: 10,
                bottopm: 10,
            }
        }
      };


//for the bar chart - showing data every day


const BardataPoints = [volumeData];

// Generate date labels for every day
const BarDateLabels = [];
const BarFullDateLabels = [];
const BarStartDate = new Date();
BarStartDate.setDate(BarStartDate.getDate() - 29); // Start with today - 29 days
let BarcurrentDate = new Date(BarStartDate);

while (BarcurrentDate <= new Date()) {
BarDateLabels.push(BarcurrentDate.getDate()); // Full date for x-axis
  BarFullDateLabels.push(BarcurrentDate.toISOString().split('T')[0]); // Full date for tooltips
  BarcurrentDate.setDate(BarcurrentDate.getDate() + 1); // Increment the date by 1 day
}

// Ensure that your data contains a value for each day
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
            borderRadius: 5,
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
              label: (context) => `Volume: ${volumeData[context.dataIndex].toFixed(2)}`
            },
          },
        },
        layout: {
            padding:{
                left: 10,
                right: 10,
                top: 10,
                bottopm: 10,
            }
        }
      };

    return(
        <Container>
                <ChartWrapper>
            <Line
                data = {data}
                options = {options}>

            </Line>
            </ChartWrapper>
            <ChartWrapper>
            <Bar
                data = {Bardata}
                options = {Baroptions}
            >
            </Bar>
            </ChartWrapper>
        </Container>
    )
}

export default TopChart