import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  margin-top: 4rem;
  flex-wrap: wrap;
`;

export const TimeFrameWrapper = styled.div`
  display: flex;
`;

export const TimeFrameRadioButton = styled.input``;

export const Label = styled.label`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-bottom: 10px;
  font-size: 16px;

  input[type="radio"] {
    appearance: none;
    width: 30px;
    height: 30px;
    border: 3px solid #146638;
    border-radius: 50%;
    cursor: pointer;
  }

  input[type="radio"]:checked {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: block;
    background-color: #06d554;
    border: 4px solid #146638;
  }
`;
