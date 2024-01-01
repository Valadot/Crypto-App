import { useEffect } from "react";
import { connect } from "react-redux";
import {
  Container,
  TimeFrameWrapper,
  TimeFrameRadioButton,
  Label,
} from "./TimeFrameRadioButtons.styles";
import { getChartData } from "../../store/coinChartData/actions";

const TimeFrameRadioButtons = (props) => {
  const isTimeFrameSelected = (value) => {
    return props.timeframe === value;
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
            checked={isTimeFrameSelected("1")}
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
            checked={isTimeFrameSelected("7")}
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
            checked={isTimeFrameSelected("30")}
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
            checked={isTimeFrameSelected("90")}
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
            checked={isTimeFrameSelected("365")}
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
            checked={isTimeFrameSelected("max")}
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
