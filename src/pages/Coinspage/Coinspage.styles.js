import { styled } from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.color};
  margin: 0 auto;
  padding: 0;
  background-color: ${(props) => props.theme.background.componentBackground};
  height: 100vh;
  max-width: 1220px;
`;
