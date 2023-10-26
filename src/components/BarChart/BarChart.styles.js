import styled from "styled-components";

export const ChartWrapper = styled.div`
  border-radius: 10px;
  position: relative;
  width: 48.5%;
  padding: 0 15px;
  background-color: ${(props) => props.theme.background.primary};
`;

export const ChartDescription = styled.div`
  position: absolute;
  font-size: 10px;
  margin-top: 10px;

  h1 {
    font-weight: 400;
  }
`;

export const PriceData = styled.h1``;
