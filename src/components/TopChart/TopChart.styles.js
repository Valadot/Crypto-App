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
  margin-left: 2rem;
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 500px;
  justify-content: space-between;

  @media ${devices.laptop} {
    display: block;
    height: 300px;
  }
`;

export const Headline = styled.div`
  font-size: 12px;
  padding-bottom: 1rem;

  @media ${devices.laptop} {
    font-size: 10px;
    margin-top: 1rem;
  }
`;

export const Wrapper = styled.div`
  width: 100px;
  height: 300px;
  font-size: 10px;
`;
