import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  Container,
  TimeFrameWrapper,
  TimeFrameRadioButton,
  Label,
} from "./TimeFrameRadioButtons.styles";
import { CoinDataContext } from "../../contexts/CoinDataProvider/CoinDataProvider";
import { CurrencyColorContext } from "../../contexts/CurrencyColorProvider/CurrencyColorProvider";
import { getChartData } from "../../store/coinChartData/actions";

const TimeFrameRadioButtons = (props) => {
  const { setCoinChart, timeFrame, setTimeFrame, coin } =
    useContext(CoinDataContext);
  const { currency } = useContext(CurrencyColorContext);
  const handleClick = (e) => {
    setTimeFrame(e.target.value);
  };

  useEffect(() => {
    getChartData();
  }, [props.coin, props.timeframe, props.currency]);

  return (
    <Container>
      <TimeFrameWrapper>
        <Label>
          <TimeFrameRadioButton
            onChange={(e) => props.getChartData(e.target.value)}
            type="radio"
            name="timeframe"
            value="1"
          />
          <span>1d</span>
        </Label>
      </TimeFrameWrapper>
      <TimeFrameWrapper>
        <Label>
          <TimeFrameRadioButton
            onChange={(e) => props.getChartData(e.target.value)}
            type="radio"
            name="timeframe"
            value="7"
          />
          <span>7d</span>
        </Label>
      </TimeFrameWrapper>
      <TimeFrameWrapper>
        <Label>
          <TimeFrameRadioButton
            onChange={(e) => props.getChartData(e.target.value)}
            type="radio"
            name="timeframe"
            value="30"
          />
          <span>30d</span>
        </Label>
      </TimeFrameWrapper>
      <TimeFrameWrapper>
        <Label>
          <TimeFrameRadioButton
            onChange={(e) => props.getChartData(e.target.value)}
            type="radio"
            name="timeframe"
            value="90"
          />
          <span>90d</span>
        </Label>
      </TimeFrameWrapper>
      <TimeFrameWrapper>
        <Label>
          <TimeFrameRadioButton
            onChange={(e) => props.getChartData(e.target.value)}
            type="radio"
            name="timeframe"
            value="365"
          />
          <span>1y</span>
        </Label>
      </TimeFrameWrapper>
      <TimeFrameWrapper>
        <Label>
          <TimeFrameRadioButton
            onChange={(e) => props.getChartData(e.target.value)}
            type="radio"
            name="timeframe"
            value="max"
          />
          <span>Max</span>
        </Label>
      </TimeFrameWrapper>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  timeframe: state.coinchartdata.timeframe,
  currency: state.currency.currency,
  coin: state.coindata.coin,
});

const mapDispatchToProps = {
  getChartData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeFrameRadioButtons);
