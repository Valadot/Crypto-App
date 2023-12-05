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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto 0 auto;
  background-color: ${(props) => props.theme.background.pageBackground};
  border-radius: 10px;
  position: relative;
  width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
`;

export const AddAssetButton = styled.button`
  color: ${(props) => props.theme.background.secondary};
  padding: 1rem 0;

  background-color: #06d554;
  margin: 0 auto;
  border-radius: 12px;
  font-size: 20px;
  width: 100%;
  max-width: 700px;
  cursor: pointer;
  border: none;
`;

export const AddAssetWrapper = styled.div`
  background-color: ${(props) => props.theme.background.componentBackground};
  max-width: 700px;
  width: 90%;
  padding: 2rem;
  gap: 2rem;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  @media ${devices.laptop} {
    flex-direction: column;
    align-items: center;
    max-width: 500px;
  }

  @media ${devices.mobileM} {
    padding: 1rem;
    gap: 0.5rem;
  }
`;

export const CoinWrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media ${devices.laptop} {
    flex-direction: column;
    align-items: center;
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
  }

  @media ${devices.laptop} {
    max-width: 300px;
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

export const CoinsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;

  @media ${devices.laptop} {
    gap: 2rem;
  }

  @media ${devices.tablet} {
    width: 100%;
    margin: 0 auto;
    align-items: center;
  }
`;

export const Input = styled.input`
  padding: 1rem 2rem 1rem 2rem;
  background-color: ${(props) => props.theme.background.primary};
  color: ${(props) => props.theme.background.secondary};
  border: none;
  width: 100%;
  border-radius: 12px;

  &::placeholder {
    color: ${(props) => props.theme.background.secondary};
  }

  @media ${devices.laptop} {
    max-width: 100%;
    margin: 0 auto;
    align-items: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media ${devices.mobileM} {
    margin-top: -2rem;
  }
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
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
  opacity: 1;

  &[disabled] {
    opacity: 0.5;
  }
`;

export const FilteredDropdown = styled.div`
  position: absolute;
  padding-left: 1rem;
  z-index: 99;
  top: 50px;
  left: 2px;
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.background.componentBackground};
  flex-direction: column;
  border-radius: 10px;
`;

export const DropdownItem = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 0.4rem;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.background.secondary};
`;

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
