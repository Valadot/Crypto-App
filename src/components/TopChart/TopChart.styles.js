import styled from "styled-components";

export const Container = styled.div`
  margin-left: 2rem;
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Headline = styled.div`
  font-size: 12px;
  padding-bottom: 1rem;
`;
