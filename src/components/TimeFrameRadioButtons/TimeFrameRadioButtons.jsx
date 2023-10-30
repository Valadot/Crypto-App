import { Container,TimeFrameWrapper,TimeFrameRadioButton,Label } from "./TimeFrameRadioButtons.styles"

const TimeFrameRadioButtons = () => {
    const handleClick = (e) => {
        console.log(e.target.value)
    }

    return(
        <Container>
                
        <TimeFrameWrapper >
            <Label>
        <TimeFrameRadioButton onChange={handleClick} type="radio" name="timeframe" value="1d" />
        <span>1d</span>
        </Label>
        </TimeFrameWrapper>
        <TimeFrameWrapper >
            <Label>
        <TimeFrameRadioButton onChange={handleClick} type="radio" name="timeframe" value="7d" />
        <span>7d</span>
        </Label>
        </TimeFrameWrapper>
        <TimeFrameWrapper >
            <Label>
        <TimeFrameRadioButton onChange={handleClick} type="radio" name="timeframe" value="30d" />
        <span>30d</span>
        </Label>
        </TimeFrameWrapper>
        <TimeFrameWrapper >
            <Label>
        <TimeFrameRadioButton onChange={handleClick} type="radio" name="timeframe" value="90d" />
        <span>90d</span>
        </Label>
        </TimeFrameWrapper>
        <TimeFrameWrapper >
            <Label>
        <TimeFrameRadioButton onChange={handleClick} type="radio" name="timeframe" value="1y" />
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