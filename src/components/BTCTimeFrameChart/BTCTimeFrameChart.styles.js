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
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: -2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.background.primary};

  @media ${devices.mobileL} {
    padding: 1rem 0;
  }
`;

export const TimeFrameWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TimeFrame = styled.button`
  padding: 0.3rem 1.2rem;
  background-color: ${(props) =>
    props.$clicked
      ? props.theme.background.chartColor
      : props.theme.background.componentBackground};
  color: ${(props) => props.theme.background.secondary};
  border-radius: 50vw;
  border: none;
  cursor: pointer;
  @media ${devices.mobileL} {
    font-size: 12px;
    width: 100%;
    padding: 0.3rem 0.8rem;
  }

  @media ${devices.mobileM} {
    font-size: 11px;
    width: 100%;
    padding: 0.3rem 0.5rem;
    font-size: 11px;
  }
`;
