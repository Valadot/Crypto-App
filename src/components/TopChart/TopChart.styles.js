import styled from "styled-components";

export const Headline = styled.div`
  font-size: 12px;
  padding-bottom: 1rem;
`;

export const Container = styled.div`
  margin-left: 2rem;
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;
`;

export const ChartWrapper = styled.div`
  border-radius: 10px;
  position: relative;
  width: 48.5%;
  padding: 0 15px;
  background-color: ${(props) => props.theme.background.primary};
`;

export const Chart = styled.div``;

export const ChartDescription = styled.div`
  position: absolute;
  font-size: 10px;
  margin-top: 10px;

  h1 {
    font-weight: 400;
  }
`;

export const PriceData = styled.h1`
  font-size: 14px;
`;
