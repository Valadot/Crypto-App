import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import {
  Table,
  Column,
  InfiniteLoader,
  AutoSizer,
  WindowScroller,
} from "react-virtualized";
import "react-virtualized/styles.css";
import { connect } from "react-redux";
import {
  Container,
  CoinImage,
  StyledLink,
  InnerBar,
  OuterBar,
  TableHead,
  BigRow,
  SmallRow,
  CoinRow,
  TableWrapper,
  PriceChange,
  LeftDotSpan,
  RightDotSpan,
  BarIndicatorWrapper,
  LeftFigure,
  RightFigure,
  Line,
} from "./CoinsList.styles";
import Sparkline from "../Sparkline/Sparkline";
import { formatNumber } from "../../utils/formatNumber/formatNumber";
import { formatPrice } from "../../utils/formatPrice/formatPrice";
import { formatPriceChange } from "../../utils/formatPriceChange/formatPriceChange";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import { getCoins, incrementPage } from "../../store/coinslist/actions";

const CoinsList = (props) => {
  const [availableWidth, setAvailableWidth] = useState(0);

  const TableLeftcolors = [
    "#FFB528",
    "#474C77",
    "#0f664c",
    "#BB9F33",
    "#FE7D43",
    "#B3404A",
    "#2775C9",
    "#83808B",
    "#2b4c81",
  ];

  const TableRightcolors = [
    "#FEE158",
    "#8A92B2",
    "#1BA27A",
    "#E4CD82",
    "#F09242",
    "#f8bda5",
    "#7db5f1",
    "#F4B2B0",
    "#518ceb",
  ];

  const isRowLoaded = ({ index }) => index < props.coinlist.length;

  const loadMoreRows = () => {
    props.incrementPage();
  };

  useEffect(() => {
    props.getCoins();
  }, [props.currency]);

  return (
    <WindowScroller>
      {({ height, isScrolling, registerChild, scrollTop }) => (
        <InfiniteLoader
          isRowLoaded={isRowLoaded}
          rowCount={props.coinlist.length + 1}
          loadMoreRows={loadMoreRows}
        >
          {({ onRowsRendered, registerChild }) => (
            <Container>
              <AutoSizer onResize={({ width }) => setAvailableWidth(width)}>
                {({ height, width }) => (
                  <TableWrapper>
                    <Table
                      width={width}
                      height={height}
                      headerHeight={40}
                      rowHeight={80}
                      rowCount={props.coinlist.length}
                      rowGetter={({ index }) => props.coinlist[index]}
                      onRowsRendered={onRowsRendered}
                      ref={registerChild}
                    >
                      <Column label="#" dataKey="market_cap_rank" width={50} />
                      <Column
                        label="Name"
                        dataKey="name"
                        width={availableWidth > 400 ? 320 : 150}
                        responsive
                        cellRenderer={({ cellData, rowIndex }) => (
                          <StyledLink
                            to={`/coin/${props.coinlist[rowIndex].id}`}
                          >
                            <CoinImage
                              src={props.coinlist[rowIndex].image}
                            ></CoinImage>
                            {cellData} (
                            {props.coinlist[rowIndex].symbol.toUpperCase()})
                          </StyledLink>
                        )}
                      />
                      <Column
                        label="Price"
                        dataKey="current_price"
                        width={150}
                        responsive
                        cellRenderer={({ cellData, rowIndex }) => (
                          <SmallRow>
                            {props.currencyIcon} {formatPrice(cellData)}
                          </SmallRow>
                        )}
                      />
                      {availableWidth > 670 && (
                        <Column
                          label="1h%"
                          dataKey="price_change_percentage_1h_in_currency"
                          width={80}
                          responsive
                          cellRenderer={({ cellData, rowIndex }) => (
                            <PriceChange
                              color={
                                props.coinlist[rowIndex]
                                  .price_change_percentage_1h_in_currency
                              }
                            >
                              <div>
                                {props.coinlist[rowIndex]
                                  .price_change_percentage_1h_in_currency ===
                                0 ? (
                                  ""
                                ) : props.coinlist[rowIndex]
                                    .price_change_percentage_1h_in_currency <
                                  0 ? (
                                  <FontAwesomeIcon
                                    icon={faCaretDown}
                                    style={{ color: "#FE1040" }}
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faCaretUp}
                                    style={{ color: "#00FC2A" }}
                                  />
                                )}
                                {formatPriceChange(cellData)}
                              </div>
                            </PriceChange>
                          )}
                        />
                      )}

                      {availableWidth > 750 && (
                        <Column
                          label="24h%"
                          dataKey="price_change_percentage_24h_in_currency"
                          width={80}
                          responsive
                          cellRenderer={({ cellData, rowIndex }) => (
                            <PriceChange
                              color={
                                props.coinlist[rowIndex]
                                  .price_change_percentage_24h_in_currency
                              }
                            >
                              <div>
                                {props.coinlist[rowIndex]
                                  .price_change_percentage_24h_in_currency ===
                                0 ? (
                                  ""
                                ) : props.coinlist[rowIndex]
                                    .price_change_percentage_24h_in_currency <
                                  0 ? (
                                  <FontAwesomeIcon
                                    icon={faCaretDown}
                                    style={{ color: "#FE1040" }}
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faCaretUp}
                                    style={{ color: "#00FC2A" }}
                                  />
                                )}
                                {formatPriceChange(cellData)}
                              </div>
                            </PriceChange>
                          )}
                        />
                      )}

                      {availableWidth > 850 && (
                        <Column
                          label="7d%"
                          dataKey="price_change_percentage_7d_in_currency"
                          width={80}
                          responsive
                          cellRenderer={({ cellData, rowIndex }) => (
                            <PriceChange
                              color={
                                props.coinlist[rowIndex]
                                  .price_change_percentage_7d_in_currency
                              }
                            >
                              <div>
                                {props.coinlist[rowIndex]
                                  .price_change_percentage_7d_in_currency ===
                                0 ? (
                                  ""
                                ) : props.coinlist[rowIndex]
                                    .price_change_percentage_7d_in_currency <
                                  0 ? (
                                  <FontAwesomeIcon
                                    icon={faCaretDown}
                                    style={{ color: "#FE1040" }}
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faCaretUp}
                                    style={{ color: "#00FC2A" }}
                                  />
                                )}
                                {formatPriceChange(cellData)}
                              </div>
                            </PriceChange>
                          )}
                        />
                      )}

                      {availableWidth > 1150 && (
                        <Column
                          label="24h Volume/Market Cap"
                          dataKey="total_volume"
                          width={300}
                          responsive
                          cellRenderer={({ cellData, rowIndex }) => (
                            <BigRow>
                              <BarIndicatorWrapper>
                                <LeftFigure
                                  color={
                                    TableLeftcolors[
                                      rowIndex % TableLeftcolors.length
                                    ]
                                  }
                                >
                                  <LeftDotSpan>.</LeftDotSpan>
                                  {props.currencyIcon}
                                  {formatNumber(cellData)}
                                </LeftFigure>
                                <RightFigure
                                  color={
                                    TableRightcolors[
                                      [rowIndex % TableRightcolors.length]
                                    ]
                                  }
                                >
                                  <RightDotSpan>.</RightDotSpan>
                                  {props.currencyIcon}
                                  {formatNumber(
                                    props.coinlist[rowIndex].market_cap
                                  )}
                                </RightFigure>
                              </BarIndicatorWrapper>
                              <OuterBar
                                color={
                                  TableRightcolors[
                                    [rowIndex % TableRightcolors.length]
                                  ]
                                }
                              >
                                <InnerBar
                                  $lowernum={cellData}
                                  $highernum={
                                    props.coinlist[rowIndex].market_cap
                                  }
                                  color={
                                    TableLeftcolors[
                                      rowIndex % TableLeftcolors.length
                                    ]
                                  }
                                ></InnerBar>
                              </OuterBar>
                            </BigRow>
                          )}
                        />
                      )}

                      {availableWidth > 1450 && (
                        <Column
                          label="Circulating/Total Supply"
                          dataKey="circulating_supply"
                          width={300}
                          responsive
                          cellRenderer={({ cellData, rowIndex }) => (
                            <BigRow>
                              <BarIndicatorWrapper>
                                <LeftFigure
                                  color={
                                    TableLeftcolors[
                                      rowIndex % TableLeftcolors.length
                                    ]
                                  }
                                >
                                  <LeftDotSpan>.</LeftDotSpan>
                                  {formatNumber(cellData)}
                                </LeftFigure>
                                <RightFigure
                                  color={
                                    TableRightcolors[
                                      [rowIndex % TableRightcolors.length]
                                    ]
                                  }
                                >
                                  <RightDotSpan>.</RightDotSpan>
                                  {props.coinlist[rowIndex].max_supply !== null
                                    ? formatNumber(
                                        props.coinlist[rowIndex].max_supply
                                      )
                                    : formatNumber(cellData)}
                                </RightFigure>
                              </BarIndicatorWrapper>
                              <OuterBar
                                color={
                                  TableRightcolors[
                                    [rowIndex % TableRightcolors.length]
                                  ]
                                }
                              >
                                <InnerBar
                                  $lowernum={cellData}
                                  $highernum={
                                    props.coinlist[rowIndex].max_supply
                                  }
                                  color={
                                    TableLeftcolors[
                                      rowIndex % TableLeftcolors.length
                                    ]
                                  }
                                ></InnerBar>
                              </OuterBar>
                            </BigRow>
                          )}
                        />
                      )}

                      {availableWidth > 1500 && (
                        <Column
                          label="last 7d"
                          dataKey="sparkline_in_7d"
                          width={200}
                          responsive
                          cellRenderer={({ cellData, rowIndex }) => (
                            <BigRow>
                              <Sparkline
                                data={cellData}
                                last7d={
                                  props.coinlist[rowIndex]
                                    .price_change_percentage_7d_in_currency
                                }
                              />
                            </BigRow>
                          )}
                        />
                      )}
                    </Table>
                  </TableWrapper>
                )}
              </AutoSizer>
            </Container>
          )}
        </InfiniteLoader>
      )}
    </WindowScroller>
  );
};

const mapStateToProps = (state) => ({
  coinlist: state.coinlist.data,
  isLoading: state.coinlist.isLoading,
  error: state.coinlist.error,
  currency: state.currency.currency,
  currencyIcon: state.currency.currencyIcon,
});

const mapDispatchToProps = {
  getCoins,
  incrementPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList);
