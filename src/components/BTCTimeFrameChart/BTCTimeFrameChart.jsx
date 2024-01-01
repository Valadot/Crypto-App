import { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  Container,
  TimeFrameWrapper,
  TimeFrame,
} from "./BTCTimeFrameChart.styles";
import { getBitcoinData } from "../../store/bitcoinChartData/actions";

const BTCTimeFrameChart = (props) => {
  return (
    <Container>
      <TimeFrameWrapper>
        <TimeFrame
          value="6"
          $clicked={props.timeframe === "6"}
          onClick={(e) => props.getBitcoinData(e.currentTarget.value)}
        >
          <p>1w</p>
        </TimeFrame>
        <TimeFrame
          value="29"
          $clicked={props.timeframe === "29"}
          onClick={(e) => props.getBitcoinData(e.currentTarget.value)}
        >
          <p>1m</p>
        </TimeFrame>
        <TimeFrame
          value="89"
          $clicked={props.timeframe === "89"}
          onClick={(e) => props.getBitcoinData(e.currentTarget.value)}
        >
          <p>3m</p>
        </TimeFrame>
        <TimeFrame
          value="179"
          $clicked={props.timeframe === "179"}
          onClick={(e) => props.getBitcoinData(e.currentTarget.value)}
        >
          <p>6m</p>
        </TimeFrame>
        <TimeFrame
          value="364"
          $clicked={props.timeframe === "364"}
          onClick={(e) => props.getBitcoinData(e.currentTarget.value)}
        >
          <p>1y</p>
        </TimeFrame>
      </TimeFrameWrapper>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  timeframe: state.bitcoinChartData.timeframe,
  coindata: state.coindata.coindata,
  athDate: state.coindata.athDate,
  atlDate: state.coindata.atlDate,
  isLoading: state.coindata.isLoading,
  error: state.coindata.error,
  currency: state.currency.currency,
  currencyIcon: state.currency.currencyIcon,
  colormode: state.colormode.colormode,
});

const mapDispatchToProps = {
  getBitcoinData,
};

export default connect(mapStateToProps, mapDispatchToProps)(BTCTimeFrameChart);
