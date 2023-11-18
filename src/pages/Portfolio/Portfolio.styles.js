import { styled } from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.color};
  margin: 0 auto;
  padding: 3rem 5rem;
  background-color: ${(props) => props.theme.background.pageBackground};
  max-width: 1700px;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
