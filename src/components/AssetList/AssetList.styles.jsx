import styled from "styled-components";

export const List = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${(props) => props.theme.background.pageBackground};
`;

export const MetricsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Metrics = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  border-radius: 12px;
  background-color: ${(props) => props.theme.background.primary};
`;

export const CoinData = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  border-radius: 12px;
  gap: 1rem;
  width: 300px;

  div {
    text-align: center;
    cursor: pointer;
  }
`;

export const CoinImage = styled.div`
  background-color: ${(props) => props.theme.background.componentBackground};
  width: 150px;
  padding: 3rem;
  display: flex;
  justify-content: center;
  border-radius: 8px;
`;

export const OuterBar = styled.div`
  width: 75px;
  background-color: green;
  height: 20px;
  border-radius: 50vw;
`;

export const InnerBar = styled.div`
  width: ${(props) => `${props.$marketData}%`};
  background-color: white;
  height: 20px;
  border-radius: 50vw;
`;

export const MarketData = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const GreenText = styled.span`
  color: #00fc2a;
`;
