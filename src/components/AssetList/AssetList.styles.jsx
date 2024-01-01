import styled from "styled-components";

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "475px",
  tablet: "800px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

export const List = styled.div`
  box-sizing: border-box;
  padding-top: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${(props) => props.theme.background.pageBackground};

  @media ${devices.laptopL} {
    font-size: 12px;
  }

  @media ${devices.laptop} {
    flex-direction: column;
    font-size: 14px;
  }

  @media ${devices.mobileL} {
    flex-direction: column;
    font-size: 11px;
  }
`;

export const MetricsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Metrics = styled.div`
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  display: flex;
  padding: 2rem 1rem;
  max-height: 100%;
  justify-content: space-between;
  border-radius: 12px;
  background-color: ${(props) => props.theme.background.primary};

  div {
    display: flex;
    gap: 0.4rem;
  }

  @media ${devices.laptop} {
    flex-direction: column;
  }
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

  @media ${devices.laptop} {
    width: 100%;
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
  background-color: #00fc2a;
  height: 20px;
  border-radius: 50vw;
`;

export const InnerBar = styled.div`
  width: ${(props) => `${props.$marketData}%`};
  background-color: white;
  height: 20px;
  padding-left: 20px;
  border-radius: 50vw;
`;

export const MarketData = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const GreenText = styled.span`
  color: #00fc2a;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const ProfitWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const PriceChange = styled.div`
  color: ${(props) => (props.color > 0 ? "#00FC2A" : "#FE1040")};
`;

export const ChangeCoinDataWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  div {
    background-color: ${(props) => props.theme.background.primary};
    padding: 1rem;
    border-radius: 12px;
    cursor: pointer;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const EditCoinWrapper = styled.div`
  background-color: ${(props) => props.theme.background.componentBackground};
  width: 1000px;
  padding: 2rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const EditCoinsForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  width: 293px;
  padding: 1rem 0;
  margin-top: 4rem;
  background-color: ${(props) => props.$background};
  color: ${(props) => props.$color};
  border-radius: 12px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

export const Input = styled.input`
  background: transparent;
  color: ${(props) => props.theme.background.secondary};
`;
