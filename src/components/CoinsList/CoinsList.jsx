import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import {Container, CoinWrapper,CoinImage,NameImageWrapper, InnerBar,OuterBar,TableHead, BigRow, SmallRow,CoinRow,Table,PriceChange,DotSpan} from "./CoinsList.styles"
import {CoinDataContext} from "../../contexts/CoinDataProvider/CoinDataProvider"
import Sparkline from "../Sparkline/Sparkline"

const CoinsList = () => {

    // am besten coindata und so in context packen und dann muss der useeffect sich immer updaten, wenn sich etwas ändert in der währung zb. Ich kann dann axios anpassen anhand der momentanen currency
    // anstatt es hardzucoden.


    const {coinList, coinIcon} = useContext(CoinDataContext)
    

    function formatNumber(number) {
        if (number >= 1e12) {
          return (number / 1e12).toFixed(2) + 'k';
        } else if (number >= 1e9) {
          return (number / 1e9).toFixed(2) + 'b';
        } else if (number >= 1e6) {
          return (number / 1e6).toFixed(2) + 'm';
        } else {
          return number;
        }
      }
    
    //   console.log(coinList.map(coin => Object.entries(coin.sparkline_in_7d.price).map(test => test)))
    console.log(coinList)

    return(
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
                    {coinList && coinList.map(coin =>
                       <CoinRow key={coin.id}>
                        <SmallRow>{coin.market_cap_rank}</SmallRow>
                        <BigRow><NameImageWrapper><CoinImage src={coin.image}></CoinImage>{coin.name}({coin.symbol})</NameImageWrapper></BigRow>
                        <SmallRow>{coinIcon} {coin.current_price.toLocaleString()}</SmallRow>
                        <PriceChange color={coin.price_change_percentage_1h_in_currency}>{coin.price_change_percentage_1h_in_currency.toFixed(2)}</PriceChange>
                        <PriceChange color={coin.price_change_percentage_24h_in_currency}>{coin.price_change_percentage_24h_in_currency.toFixed(2)}</PriceChange>
                        <PriceChange color={coin.price_change_percentage_7d_in_currency}>{coin.price_change_percentage_7d_in_currency.toFixed(2)}</PriceChange>
                        <BigRow>
                            <div style={{display: "flex", justifyContent:"space-between"}}>
                                <div>
                                    <DotSpan>.</DotSpan>
                                    {coinIcon} {formatNumber(coin.total_volume)}
                                </div>
                                <div>
                                    <DotSpan>.</DotSpan>
                                    {coinIcon} {formatNumber(coin.market_cap)}
                                </div>
                            </div>
                            <OuterBar>
                                <InnerBar lowernum={coin.total_volume} highernum={coin.market_cap}></InnerBar>
                            </OuterBar>
                        </BigRow>
                        <BigRow>
                            <div style={{display: "flex", justifyContent:"space-between", alignItems:"center",}}>
                                <div>
                                    <DotSpan>.</DotSpan>
                                    {coinIcon} {formatNumber(coin.circulating_supply)}
                                </div>
                                <div >
                                    <DotSpan>.</DotSpan>
                                    {coinIcon} {coin.max_supply !== null ? formatNumber(coin.max_supply) : formatNumber(coin.circulating_supply)}
                                </div>
                            </div>
                            <OuterBar>
                                <InnerBar lowernum={coin.circulating_supply} highernum={coin.max_supply}></InnerBar>
                            </OuterBar>
                        </BigRow>
                        <BigRow>
                            <Sparkline data={coin.sparkline_in_7d} last7d={coin.price_change_percentage_7d_in_currency}/>
                            {/* {coin.sparkline_in_7d.price.map(price => price)} */}
                        </BigRow>
                       </CoinRow> )}
                        </tbody>
                </Table>
            </div>
        </Container>

    );
};

export default CoinsList