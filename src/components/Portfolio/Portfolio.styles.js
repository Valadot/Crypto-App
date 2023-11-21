import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto 0 auto;
  background-color: ${(props) => props.theme.background.primary};
  border-radius: 10px;
  position: relative;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const AddAssetButton = styled.button`
  color: ${(props) => props.theme.background.secondary};
  padding: 1rem 18rem;
  background-color: #06d554;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  border: none;
`;

export const AddAssetWrapper = styled.div`
  background-color: ${(props) => props.theme.background.componentBackground};
  width: 1000px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const CoinWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const CoinData = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  border-radius: 12px;
  gap: 1rem;
  width: 300px;
`;

export const CoinImage = styled.div`
  background-color: ${(props) => props.theme.background.componentBackground};
  width: 150px;
  padding: 3rem;
  display: flex;
  justify-content: center;
  border-radius: 8px;
`;

export const CoinsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

export const Input = styled.input`
  padding: 1rem 2rem 1rem 2rem;
  background-color: ${(props) => props.theme.background.primary};
  color: ${(props) => props.theme.background.secondary};
  border: none;
  width: 500px;
  border-radius: 12px;

  &::placeholder {
    color: ${(props) => props.theme.background.secondary};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  width: 293px;
  padding: 1rem 0;
  margin-top: 4rem;
  background-color: ${(props) => props.$background};
  color: ${(props) => props.$color};
  border-radius: 12px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

export const FilteredDropdown = styled.div`
  position: absolute;
  padding-left: 1rem;
  z-index: 99;
  top: 50px;
  left: 2px;
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.background.componentBackground};
  flex-direction: column;
  border-radius: 10px;
`;

export const DropdownItem = styled.div`
  width: 100%;
  /* background-color: red; */
  border-radius: 10px;
  padding: 0.4rem;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.background.secondary};
`;

export const AssetList = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${(props) => props.theme.background.pageBackground};
`;

export const MetricsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Metrics = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  border-radius: 12px;
  background-color: ${(props) => props.theme.background.primary};
`;
