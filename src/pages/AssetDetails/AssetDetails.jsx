import { Container, AddAssetButton } from "./AssetDetails.styles";
import Navbar from "../../components/Navbar/Navbar";

const AssetDetails = () => {
  return (
    <Container>
      <Navbar />
      <h1>Your asset will be visible here.</h1>
      <div>
        <AddAssetButton>test</AddAssetButton>
      </div>
    </Container>
  );
};

export default AssetDetails;
