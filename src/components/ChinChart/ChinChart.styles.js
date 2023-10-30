import styled from "styled-components";

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
`;

export const OuterBar = styled.div`
  width: 55px;
  height: 13px;
  border-radius: 50vw;
  background-color: blue;
`;

export const InnerBar = styled.div`
  width: ${(props) =>
    props.lowernum && props.highernum && props.lowernum < props.highernum
      ? `${(props.lowernum / props.highernum) * 100}%`
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
`;

export const Caret = styled.img`
  width: 20px;
  height: 20px;
`;
