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

export const ChartWrapper = styled.div`
  border-radius: 10px;
  position: relative;
  width: 48.5%;
  padding: 0 15px;
  background-color: ${(props) => props.theme.background.primary};

  @media ${devices.laptop} {
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

  @media ${devices.laptop} {
    font-size: 8px;
  }
`;

export const PriceData = styled.h1`
  font-size: 2.75rem;

  @media ${devices.mobileL} {
    font-size: 2rem;
  }
`;
