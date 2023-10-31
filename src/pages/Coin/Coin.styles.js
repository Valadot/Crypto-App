import { styled } from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  color: ${(props) => props.theme.color};
  margin: 0 auto;
  background-color: ${(props) => props.theme.background.pageBackground};
  max-width: 1700px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
