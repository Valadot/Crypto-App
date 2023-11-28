import { styled } from "styled-components";

export const CurrencyWrapper = styled.div`
  background-color: #191b1f;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  border-radius: 100%;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const CurrencyImage = styled.img`
  width: 20px;
  background-color: transparent;
`;
