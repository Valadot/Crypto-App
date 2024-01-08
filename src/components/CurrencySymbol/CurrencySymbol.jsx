import { CurrencyImage, CurrencyWrapper } from "./CurrencySymbol.styles";

const CurrencySymbol = (props) => {
  return (
    <CurrencyWrapper>
      <CurrencyImage
        src={props.currency}
        alt="Icon of the Currency"
      ></CurrencyImage>
    </CurrencyWrapper>
  );
};

export default CurrencySymbol;
