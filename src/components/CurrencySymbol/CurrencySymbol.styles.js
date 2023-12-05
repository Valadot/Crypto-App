import { styled } from "styled-components";
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

export const CurrencyWrapper = styled.div`
  background-color: #191b1f;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  border-radius: 100%;

  @media ${devices.mobileL} {
    display: none;
  }
`;

export const CurrencyImage = styled.img`
  width: 20px;
  background-color: transparent;
`;
