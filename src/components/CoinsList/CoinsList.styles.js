import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const CoinWrapper = styled.div`
  display: flex;
`;

export const CoinImage = styled.img`
  width: 25px;
  aspect-ratio: 1/1;
`;

export const NameImageWrapper = styled.div`
  display: flex;
`;

export const OuterBar = styled.div`
  width: 100px;
  height: 5px;
  background-color: #fee158;
  border-radius: 50vw;
`;

export const InnerBar = styled.div`
  width: ${(props) =>
    props.lowernum && props.highernum && props.lowernum < props.highernum
      ? `${(props.lowernum / props.highernum) * 100}%`
      : "100%"};
  height: 5px;
  background-color: #ffb528;
  border-radius: 50vw;
`;

export const TableHead = styled.thead``;

export const BigRow = styled.th`
  width: 500px;
  text-align: left;
  font-size: 18px;
  font-weight: normal;
`;

export const SmallRow = styled.th`
  width: 100px;
  text-align: left;
  font-size: 18px;
  font-weight: normal;
`;
