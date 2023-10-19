import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 3rem auto 0 auto;
  background-color: ${(props) => props.theme.background.primary};
  border-radius: 10px;
  padding: 1.5rem 1rem 0 1.5rem;
`;

export const Table = styled.table`
  font-size: 0.775rem;
  border-collapse: collapse;
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
  align-items: center;
  gap: 10px;
`;

export const OuterBar = styled.div`
  width: 100%;
  height: 5px;
  margin-bottom: 30px;
  background-color: ${(props) => props.color};
  border-radius: 50vw;
`;

export const InnerBar = styled.div`
  width: ${(props) =>
    props.lowernum && props.highernum && props.lowernum < props.highernum
      ? `${(props.lowernum / props.highernum) * 100}%`
      : "100%"};
  height: 5px;
  background-color: ${(props) => props.color};
  border-radius: 50vw;
`;

export const TableHead = styled.thead``;

export const BigRow = styled.th`
  text-align: left;
  padding: 5px 10px;
`;

export const SmallRow = styled.th`
  text-align: left;
  padding: 5px 10px;
`;

export const PriceChange = styled.th`
  text-align: left;
  padding: 10px 15px;
  color: ${(props) => (props.color > 0 ? "#00FC2A" : "#FE1040")};

  div {
    display: flex;
    align-items: center;
  }
`;

export const CoinRow = styled.tr`
  border-bottom: 1px solid #606061;

  &:last-child {
    border-bottom: none;
  }
`;

export const LeftDotSpan = styled.span`
  font-size: 25px;
  padding-right: 5px;
  border-radius: 100%;
  color: ${(props) => props.color};
`;

export const RightDotSpan = styled.span`
  font-size: 25px;
  padding-right: 5px;
  border-radius: 100%;
  color: ${(props) => props.color};
`;

export const BarIndicatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftFigure = styled.div`
  color: ${(props) => props.color};
`;

export const RightFigure = styled.div`
  color: ${(props) => props.color};
`;

export const Caret = styled.img`
  width: 20px;
`;
