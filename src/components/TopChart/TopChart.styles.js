import styled from "styled-components";

export const Container = styled.div`
  margin-left: 2rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

export const ChartWrapper = styled.div`
  width: 500px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.background.primary};
  padding: 2rem;
`;
