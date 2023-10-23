import { useState, useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component"
import {Container, CoinWrapper,CoinImage,NameImageWrapper, InfiteScrolling, InnerBar,OuterBar,TableHead, BigRow, SmallRow,CoinRow,Table,PriceChange,LeftDotSpan, RightDotSpan, BarIndicatorWrapper, LeftFigure, RightFigure,Caret} from "./CoinsList.styles"
import {CoinDataContext} from "../../contexts/CoinDataProvider/CoinDataProvider"
import Sparkline from "../Sparkline/Sparkline"
import { formatNumber } from "../../utils/formatNumber/formatNumber";
import {pickCaret} from "../../utils/correctCaret/correctCaret" 
import {formatPriceChange} from "../../utils/formatPriceChange/formatPriceChange"

const CoinsList = () => {

    // am besten coindata und so in context packen und dann muss der useeffect sich immer updaten, wenn sich etwas ändert in der währung zb. Ich kann dann axios anpassen anhand der momentanen currency
    // anstatt es hardzucoden.

    const TableLeftcolors = [
        "#FFB528",
        "#474C77",
        "#1BA27A",
        "#BB9F33",
        "#FE7D43",
        "#B3404A",
        "#2775C9",
        "#83808B",
        "#345D9D",
      ];
   
      const TableRightcolors = [
        "#FEE158",
        "#8A92B2",
        "#FFFFFF",
        "#E4CD82",
        "#FFDCCE",
        "#F4B2B0",
        "#FFFFFF",
        "#F09242",
        "#FFFFFF",
      ];
    const {coinList, coinIcon,getCoinlist,loading } = useContext(CoinDataContext)
    
    return(
        
        <InfiniteScroll dataLength={coinList.length} next={getCoinlist} hasMore={!loading} loader={<h4>Loading coins...</h4>}>
        <Container>
            <div>
                
                <Table>
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
                    </TableHead>
                    
                    <tbody>
                    
                    {coinList && coinList.map((coin,index) =>
                    
                       <CoinRow key={coin.id}>
                        <SmallRow>{coin.market_cap_rank}</SmallRow>
                        <BigRow><NameImageWrapper><CoinImage src={coin.image}></CoinImage>{coin.name}({coin.symbol})</NameImageWrapper></BigRow>
                        <SmallRow>{coinIcon} {coin.current_price.toLocaleString()}</SmallRow>
                        <PriceChange color={coin.price_change_percentage_1h_in_currency}>
                            <div>
                        <Caret src={pickCaret(coin.price_change_percentage_1h_in_currency.toString())} alt="" />
                        {formatPriceChange(coin.price_change_percentage_1h_in_currency)}
                        </div></PriceChange>
                        <PriceChange color={coin.price_change_percentage_24h_in_currency}>
                            <div>
                            <Caret src={pickCaret(coin.price_change_percentage_24h_in_currency.toString())} alt="" />
                            {formatPriceChange(coin.price_change_percentage_24h_in_currency)}
                            </div>
                            </PriceChange>
                        <PriceChange color={coin.price_change_percentage_7d_in_currency}>
                            <div>
                            <Caret src={pickCaret(coin.price_change_percentage_7d_in_currency.toString())} alt="" />
                            {formatPriceChange(coin.price_change_percentage_7d_in_currency)}
                                </div></PriceChange>
                        <BigRow>
                            <BarIndicatorWrapper>
                            <LeftFigure color={TableLeftcolors[index % TableLeftcolors.length]}>
                                    <LeftDotSpan>.</LeftDotSpan>
                                    {coinIcon}{formatNumber(coin.total_volume)}
                                </LeftFigure>
                                <RightFigure color={TableRightcolors[index % TableRightcolors.length]}>
                                    <RightDotSpan>.</RightDotSpan>
                                    {coinIcon}{formatNumber(coin.market_cap)}
                                </RightFigure>
                            </BarIndicatorWrapper>
                            <OuterBar color={TableRightcolors[index % TableRightcolors.length]}>
                                <InnerBar lowernum={coin.total_volume} highernum={coin.market_cap} color={TableLeftcolors[index % TableLeftcolors.length]}></InnerBar>
                            </OuterBar>
                        </BigRow>
                        <BigRow>
                            <BarIndicatorWrapper>
                                
                            <LeftFigure color={TableLeftcolors[index % TableLeftcolors.length]}>
                                    <LeftDotSpan>.</LeftDotSpan>
                                    {formatNumber(coin.circulating_supply)}
                                </LeftFigure>
                                <RightFigure color={TableRightcolors[index % TableRightcolors.length]}>
                                    <RightDotSpan>.</RightDotSpan>
                                    {coin.max_supply !== null ? formatNumber(coin.max_supply) : formatNumber(coin.circulating_supply)}
                                </RightFigure>
                            </BarIndicatorWrapper>
                            <OuterBar color={TableRightcolors[index % TableRightcolors.length]}>
                                <InnerBar lowernum={coin.circulating_supply} highernum={coin.max_supply} color={TableLeftcolors[index % TableLeftcolors.length]}></InnerBar>
                            </OuterBar>
                        </BigRow>
                        <BigRow>
                            <Sparkline data={coin.sparkline_in_7d} last7d={coin.price_change_percentage_7d_in_currency}/>
                            {/* {coin.sparkline_in_7d.price.map(price => price)} */}
                        </BigRow>
                       </CoinRow> 
                       )}
                        
                        </tbody>
                        

                </Table>
            </div>
        </Container>
        </InfiniteScroll>

    );
};

export default CoinsList