import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  margin: 120px auto 0 auto;

  border: 1px #d2d2d2 solid;

  padding: 41px;

  & > h1 {
    font-size: 24px;
    font-weight: 400;

    font-family: 'Rowdies', cursive;

    padding: 40px 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 10px;

  font-family: 'Rowdies', cursive;

  h1 {
    color: #ff4f5a;

    font-weight: bold;
    font-size: 36px;
  }

  img {
    width: 41px;
    height: 41px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 7px;

  font-family: 'Roboto', sans-serif;

  button {
    display: flex;
    justify-content: center;

    column-gap: 12px;

    background-color: transparent;

    border: 1px #d8d8d8 solid;
    border-radius: 4px;

    padding: 10px 0;

    font-size: 18px;

    cursor: pointer;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;

  background-color: #d8d8d8;

  margin: 113px 0 18px 0;
`;

export const Signup = styled.div`
  display: flex;
  justify-content: center;

  column-gap: 5px;

  font-family: 'Roboto', sans-serif;

  font-size: 18px;

  a {
    color: #ff4f5a;

    cursor: pointer;
  }
`;
