import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 3rem auto 0 auto;
  background-color: ${(props) => props.theme.background.primary};
  border-radius: 10px;
  position: relative;
  height: 100vh;
  padding: 1.5rem 0 0 1.5rem;
`;

export const TableWrapper = styled.div`
  font-size: 1.19rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    font-size: 11px;
  }

  .ReactVirtualized__Table__headerRow {
    font-size: 18px;
    text-transform: none;
  }

  .ReactVirtualized__Table__row {
    padding: 1rem 0;
  }

  .ReactVirtualized__Table__row:not(:last-child) {
    border-bottom: 1px solid #2a2c2f;
  }

  .ReactVirtualized__Table__Grid {
    /* Styling for both horizontal and vertical scrollbars */
    overflow: overlay;
  }

  /* Styling for horizontal scrollbar */
  .ReactVirtualized__Table__Grid--horizontalScroll {
    overflow-y: hidden;
    overflow-x: auto;
    bottom: 0;
  }

  /* Styling for vertical scrollbar */
  .ReactVirtualized__Table__Grid--verticalScroll {
    overflow-x: hidden;
    overflow-y: auto;
    right: 0;
    display: none;
  }

  /* Optional: Customize scrollbar appearance */
  /* Width of the scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    background-color: ${(props) => props.theme.background.primary};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    background-color: ${(props) => props.theme.background.componentBackground};
    border-radius: 12px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const CoinWrapper = styled.div`
  display: flex;
`;

export const CoinImage = styled.img`
  width: 25px;
  aspect-ratio: 1/1;
`;

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.background.secondary};
  display: flex;
  text-decoration: none;
  align-items: center;
  gap: 0.7rem;
`;

export const OuterBar = styled.div`
  width: 300px;
  height: 5px;
  margin-bottom: 30px;
  background-color: ${(props) => props.color};
  border-radius: 50vw;
`;

export const InnerBar = styled.div`
  width: ${(props) =>
    props.$lowernum && props.$highernum && props.$lowernum < props.$highernum
      ? `${(props.$lowernum / props.$highernum) * 100}%`
      : "100%"};
  height: 5px;
  background-color: ${(props) => props.color};
  border-radius: 50vw;
`;

export const TableHead = styled.thead``;

export const BigRow = styled.div`
  text-align: left;
`;

export const SmallRow = styled.div`
  text-align: left;
`;

export const PriceChange = styled.div`
  text-align: left;
  color: ${(props) => (props.color > 0 ? "#00FC2A" : "#FE1040")};

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const CoinRow = styled.div`
  border-bottom: 1px solid #606061;

  &:last-child {
    border-bottom: none;
  }
`;

export const LeftDotSpan = styled.span`
  font-size: 25px;
  padding-right: 5px;
  color: ${(props) => props.color};
`;

export const RightDotSpan = styled.span`
  font-size: 25px;
  padding-right: 5px;
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

export const InfiteScrolling = styled(InfiniteScroll)`
  display: flex;
`;

export const Line = styled.div`
  width: 1700px;
  height: 2px;
  background-color: red;
`;
