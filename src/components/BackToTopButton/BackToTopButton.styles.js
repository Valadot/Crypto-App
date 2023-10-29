import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 50px;
  left: 530px;
  padding: 2rem;
  background-color: ${(props) => props.theme.background.componentBackground};
  color: ${(props) => props.theme.background.secondary};
  border-radius: 50vw 20vw 100vw 50vw;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 500;
`;
