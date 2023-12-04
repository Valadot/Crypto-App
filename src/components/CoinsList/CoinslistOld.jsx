// <InfiniteScroll
//   dataLength={props.coinlist.length}
//   next={() => props.incrementPage()}
//   hasMore={!props.isLoading}
//   loader={<h4>Loading coins...</h4>}
// >
<Container>
  {/* {props.isLoading && <div>Loading...</div>} */}
  {/* <div> */}
  {/* <TableWrapper>
            <TableHead>
              <tr>
                <SmallRow>#</SmallRow>
                <BigRow>Name</BigRow>
                <SmallRow>Price</SmallRow>
                <SmallRow>1h%</SmallRow>
                <SmallRow>24h%</SmallRow>
                <SmallRow>7d%</SmallRow>
                <BigRow>24h Volume/Market Cap</BigRow>
                <BigRow>Circulating/Total Supply</BigRow>
                <SmallRow>Last 7d</SmallRow>
              </tr>
            </TableHead> */}
  {/* <tbody> */}
  {/* {props.coinlist &&
            props.coinlist.map((coin, index) => (
              <CoinRow key={coin.id}>
                <SmallRow>{coin.market_cap_rank}</SmallRow>
                <BigRow>
                  <StyledLink to={`/coin/${coin.id}`}>
                    <CoinImage src={coin.image}></CoinImage>
                    {coin.name} ({coin.symbol.toUpperCase()})
                  </StyledLink>
                </BigRow>
                <SmallRow>
                  {props.currencyIcon} {formatPrice(coin.current_price)}
                </SmallRow>
                <PriceChange
                  color={coin.price_change_percentage_1h_in_currency}
                >
                  <div>
                    {coin.price_change_percentage_1h_in_currency === 0 ? (
                      ""
                    ) : coin.price_change_percentage_1h_in_currency < 0 ? (
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
                    {formatPriceChange(
                      coin.price_change_percentage_1h_in_currency
                    )}
                  </div>
                </PriceChange>
                <PriceChange
                  color={coin.price_change_percentage_24h_in_currency}
                >
                  <div>
                    {coin.price_change_percentage_24h_in_currency === 0 ? (
                      ""
                    ) : coin.price_change_percentage_24h_in_currency < 0 ? (
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
                    {formatPriceChange(
                      coin.price_change_percentage_24h_in_currency
                    )}
                  </div>
                </PriceChange>
                <PriceChange
                  color={coin.price_change_percentage_7d_in_currency}
                >
                  <div>
                    {coin.price_change_percentage_7d_in_currency === 0 ? (
                      ""
                    ) : coin.price_change_percentage_7d_in_currency < 0 ? (
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
                    {formatPriceChange(
                      coin.price_change_percentage_7d_in_currency
                    )}
                  </div>
                </PriceChange>
                <BigRow>
                  <BarIndicatorWrapper>
                    <LeftFigure
                      color={TableLeftcolors[index % TableLeftcolors.length]}
                    >
                      <LeftDotSpan>.</LeftDotSpan>
                      {props.currencyIcon}
                      {formatNumber(coin.total_volume)}
                    </LeftFigure>
                    <RightFigure
                      color={TableRightcolors[index % TableRightcolors.length]}
                    >
                      <RightDotSpan>.</RightDotSpan>
                      {props.currencyIcon}
                      {formatNumber(coin.market_cap)}
                    </RightFigure>
                  </BarIndicatorWrapper>
                  <OuterBar
                    color={TableRightcolors[index % TableRightcolors.length]}
                  >
                    <InnerBar
                      $lowernum={coin.total_volume}
                      $highernum={coin.market_cap}
                      color={TableLeftcolors[index % TableLeftcolors.length]}
                    ></InnerBar>
                  </OuterBar>
                </BigRow>
                <BigRow>
                  <BarIndicatorWrapper>
                    <LeftFigure
                      color={TableLeftcolors[index % TableLeftcolors.length]}
                    >
                      <LeftDotSpan>.</LeftDotSpan>
                      {formatNumber(coin.circulating_supply)}
                    </LeftFigure>
                    <RightFigure
                      color={TableRightcolors[index % TableRightcolors.length]}
                    >
                      <RightDotSpan>.</RightDotSpan>
                      {coin.max_supply !== null
                        ? formatNumber(coin.max_supply)
                        : formatNumber(coin.circulating_supply)}
                    </RightFigure>
                  </BarIndicatorWrapper>
                  <OuterBar
                    color={TableRightcolors[index % TableRightcolors.length]}
                  >
                    <InnerBar
                      $lowernum={coin.circulating_supply}
                      $highernum={coin.max_supply}
                      color={TableLeftcolors[index % TableLeftcolors.length]}
                    ></InnerBar>
                  </OuterBar>
                </BigRow>
                <BigRow>
                  <Sparkline
                    data={coin.sparkline_in_7d}
                    last7d={coin.price_change_percentage_7d_in_currency}
                  />
                </BigRow>
              </CoinRow>
            ))} */}
  {/* </tbody> */}
  {/* </TableWrapper> */}
  {/* </div> */}
  <BackToTopButton />
  //{" "}
</Container>;
// {/* </InfiniteScroll> */}
