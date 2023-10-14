import { styled } from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.background.secondary};
  max-width: 1220px;
  background-color: ${(props) => props.theme.background.primary};
  margin: 0 auto;
  height: 100vh;
`;
