import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Container,TimeFrameWrapper,TimeFrameRadioButton,Label } from "./TimeFrameRadioButtons.styles"
import { CoinDataContext } from "../../contexts/CoinDataProvider/CoinDataProvider";
import { CurrencyColorContext } from "../../contexts/CurrencyColorProvider/CurrencyColorProvider";


const TimeFrameRadioButtons = () => {
    const {setCoinChart, timeFrame, setTimeFrame,coin} = useContext(CoinDataContext)
    const {currency} = useContext(CurrencyColorContext)
    const handleClick = (e) => {
        setTimeFrame(e.target.value)
        console.log(e.target.value)
    }

    const getCoinChart = async () => {
        try {
            const {data} = await axios (`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency.toLowerCase()}&days=${timeFrame}&interval=daily`)
            console.log(data)
            setCoinChart(data.prices.map(price => price[1]))
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getCoinChart()
    },[coin,timeFrame, currency])

    return(
        <Container>
                
        <TimeFrameWrapper >
            <Label>
        <TimeFrameRadioButton onChange={handleClick} type="radio" name="timeframe" value="1" />
        <span>1d</span>
        </Label>
        </TimeFrameWrapper>
        <TimeFrameWrapper >
            <Label>
        <TimeFrameRadioButton onChange={handleClick} type="radio" name="timeframe" value="7"/>
        <span>7d</span>
        </Label>
        </TimeFrameWrapper>
        <TimeFrameWrapper >
            <Label>
        <TimeFrameRadioButton onChange={handleClick} type="radio" name="timeframe" value="30" />
        <span>30d</span>
        </Label>
        </TimeFrameWrapper>
        <TimeFrameWrapper >
            <Label>
        <TimeFrameRadioButton onChange={handleClick} type="radio" name="timeframe" value="90" />
        <span>90d</span>
        </Label>
        </TimeFrameWrapper>
        <TimeFrameWrapper >
            <Label>
        <TimeFrameRadioButton onChange={handleClick} type="radio" name="timeframe" value="365" />
        <span>1y</span>
        </Label>
        </TimeFrameWrapper>
        <TimeFrameWrapper >
            <Label>
        <TimeFrameRadioButton onChange={handleClick} type="radio" name="timeframe" value="max" />
        <span>Max</span>
        </Label>
        </TimeFrameWrapper>
    </Container>
    )
}

export default TimeFrameRadioButtons