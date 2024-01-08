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
  width: 1000px;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 10px;
  position: absolute;
  align-self: center;
  border-radius: 0 0 10px 10px;
  top: 0;
  font-size: 17px;
  background-color: ${(props) => props.theme.background.primary};

  @media ${devices.laptop} {
    width: 800px;
  }

  @media ${devices.tablet} {
    width: 600px;
  }

  @media screen and (max-width: 700px) {
    width: 450px;
  }

  @media ${devices.mobileL} {
    width: 320px;
  }
`;

export const OuterBar = styled.div`
  width: 55px;
  height: 13px;
  border-radius: 50vw;
  background-color: blue;
`;

export const InnerBar = styled.div`
  width: ${(props) =>
    props.$lowernum && props.$highernum && props.$lowernum < props.$highernum
      ? `${(props.$lowernum / props.$highernum) * 100}%`
      : "100%"};
  padding-left: 0.5rem;
  height: 13px;
  border-radius: 50vw;
  background-color: #ffffff;
`;

export const InnerBarCap = styled.div`
  width: ${(props) => (props.$cap ? `${props.$cap}%` : "100%")};
  height: 13px;
  border-radius: 50vw;
  background-color: #ffffff;
`;

export const CoinStatWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: white;

  @media ${devices.laptop} {
    display: none;
  }
`;

export const Exchanges = styled.div`
  @media ${devices.laptop} {
    display: none;
  }
`;

export const Coins = styled.div`
  @media ${devices.tablet} {
    display: none;
  }
`;

export const GlobalCap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media ${devices.tablet} {
    display: none;
  }
`;

export const EthStats = styled.div`
  @media ${devices.mobileL} {
    display: none;
  }
`;
