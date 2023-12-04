import styled from "styled-components";

export const Container = styled.div`
  margin-left: 2rem;
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 500px;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    display: block;
    height: 300px;
  }
`;

export const Headline = styled.div`
  font-size: 12px;
  padding-bottom: 1rem;

  @media screen and (max-width: 900px) {
    font-size: 10px;
    margin-top: 1rem;
  }
`;

export const Wrapper = styled.div`
  width: 100px;
  height: 300px;
  font-size: 10px;
`;
