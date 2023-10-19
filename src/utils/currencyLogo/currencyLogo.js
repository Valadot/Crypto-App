import DollarSign from "../../assets/dollar-sign.svg";
import PoundSign from "../../assets/gbp-sign.svg";
import EuroSign from "../../assets/eur-sign.svg";
import BitcoinSign from "../../assets/btc-sign.svg";
import EthereumSign from "../../assets/eth-sign.svg";

export function currencyLogo(currency) {
  if (currency === "USD") {
    return DollarSign;
  } else if (currency === "GBP") {
    return PoundSign;
  } else if (currency === "BTC") {
    return BitcoinSign;
  } else if (currency === "ETH") {
    return EthereumSign;
  } else {
    return EuroSign;
  }
}
