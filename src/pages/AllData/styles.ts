import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  hr {
    height: 1px;
    border: 0;
    background-color: #16195c;
    margin: 30px 0;
  }
`;

export const Data = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 15px;
  align-items: center;
  background-color: #16195c;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid rgb(23, 228, 125);
`;

export const Title = styled.h1`
  font-size: 1.4rem;
`;
