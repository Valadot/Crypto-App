import { styled } from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.background.secondary};
  padding: 0;
  background-color: ${(props) => props.theme.background.primary};
`;
