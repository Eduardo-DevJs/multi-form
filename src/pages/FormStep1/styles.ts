import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 0.8125rem;
    color: #b8b8d4;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 1.625rem;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #16195c;
    margin: 30px 0;
  }

  label {
    font-size: 0.8125rem;

    input {
      display: block;
      margin-top: 7px;
      width: 100%;
      box-sizing: border-box;
      padding: 20px 10px;
      border: 2px solid #25cd89;
      border-radius: 10px;
      color: #fff;
      outline: 0;
      font-size: 0.9375rem;
      background-color: transparent;
    }
  }

  button {
    background-color: #25cd89;
    color: #fff;
    font-size: 0.875rem;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
  }
`;
