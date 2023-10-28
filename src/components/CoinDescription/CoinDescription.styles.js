import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 3rem auto 0 auto;
  background-color: ${(props) => props.theme.background.componentBackground};
  border-radius: 10px;
  padding: 1.5rem 1rem 0 1.5rem;
`;

export const Section = styled.div`
  font-size: 22px;
  font-weight: 500;
`;

export const CoinDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1424px;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const CoinDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: calc(379px - 295px - 64px);
`;

export const CoinInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background.primary};
  width: 258px;
  height: 295px;
  border-radius: 12px;
  gap: 1rem;
`;
export const CoinIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background.componentBackground};
  width: 104px;
  height: 103px;

  border-radius: 8px;
`;

export const CoinIcon = styled.img`
  width: 50px;
`;

export const HomePage = styled.div`
  width: 258px;
  height: 64px;
  background-color: ${(props) => props.theme.background.primary};
  display: flex;
  align-items: center;
  font-size: 15px;
  border-radius: 12px;
  gap: 3rem;
  padding: 0 20px;
`;

export const LinkIcon = styled.div`
  cursor: pointer;
`;

export const PriceDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;
  justify-content: center;
  width: 463px;
  height: 379px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.background.primary};

  gap: 1rem;
`;

export const PriceData = styled.div`
  font-size: 44px;
  display: flex;
  gap: 1rem;
`;

export const MarketChange = styled.div`
  display: flex;
  gap: 10px;
  font-size: 19px;
  align-items: center;
  color: ${(props) => (props.color > 0 ? "#00FC2A" : "#FE1040")};
`;

export const HistoryPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CoinInfoWrapper = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  width: 546px;
  height: 379px;
  border-radius: 12px;
`;

export const CoinData = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    padding-inline: 8px;
    font-size: 22px;
    background-color: #2172e5;
    border-radius: 6px;
    color: white;
  }

  p {
    font-size: 16px;
  }
`;

export const CoinDescriptionWrapper = styled.div`
  width: 1424px;
  height: 100%;
  background-color: ${(props) => props.theme.background.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.2rem;
  gap: 2rem;
  border-radius: 12px;
  margin-top: 2rem;

  p {
    font-size: 19px;
  }
`;

export const CoinLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1424px;
  text-align: center;
  gap: 1rem;
  margin-top: 2rem;
  position: relative;
`;

export const Link = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  text-align: center;
  flex: 1;
  padding: 15px 20px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CopyIcon = styled.div`
  cursor: pointer;
`;

export const Copied = styled.div`
  position: absolute;
  top: -80%;
  left: 50%;
  transform: translate(-50%);
  background-color: ${(props) => props.theme.background.copyBackground};
  width: 400px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 24px;
  font-weight: 500;
`;