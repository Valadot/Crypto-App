import {CurrencyImage,CurrencyWrapper} from "./CurrencySymbol.styles"


const CurrencySymbol = (props) => {

   


    return(
        <CurrencyWrapper>
        <CurrencyImage src={props.currency}></CurrencyImage>
        </CurrencyWrapper>
    )
}

export default CurrencySymbol