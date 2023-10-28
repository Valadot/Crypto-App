import { styled } from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.color};
  margin: 0 auto;
  padding: 3rem 5rem;
  height: 100vh;
  background-color: ${(props) => props.theme.background.componentBackground};
  max-width: 1700px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
