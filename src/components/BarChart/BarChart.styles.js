import styled from "styled-components";

export const ChartWrapper = styled.div`
  border-radius: 10px;
  position: relative;
  width: 48.5%;
  padding: 0 15px;
  background-color: ${(props) => props.theme.background.primary};

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`;

export const ChartDescription = styled.div`
  position: absolute;
  font-size: 10px;
  margin-top: 10px;

  h1 {
    font-weight: 400;
  }

  @media screen and (max-width: 900px) {
    font-size: 8px;
  }
`;

export const PriceData = styled.h1`
  font-size: 2.75rem;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;
