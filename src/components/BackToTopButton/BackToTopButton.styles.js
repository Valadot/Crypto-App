import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 100px;
  left: 200px;
  padding: 1.7rem;
  background-color: ${(props) => props.theme.background.componentBackground};
  color: ${(props) => props.theme.background.secondary};
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 500;

  @media screen and (max-width: 2285px) {
    left: 100px;
  }

  @media screen and (max-width: 2105px) {
    left: 0;
  }
`;
