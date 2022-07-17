import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 40px auto 0 auto;

  hr {
    width: 1146px;

    color: #ff4f5a;

    margin-top: 130px;
    margin-bottom: 38px;
  }

  button,
  a {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  margin: 0 auto;

  div {
    display: flex;
  }

  div:first-child {
    display: flex;
    align-items: flex-end;
    column-gap: 10px;

    font-family: 'Rowdies', cursive;

    h1 {
      color: #ff4f5a;

      font-weight: bold;
      font-size: 36px;
    }
  }

  img {
    width: 41px;
    height: 41px;
  }
`;

export const HeaderLinks = styled.div`
  font-size: 24px;
  font-family: 'Rosario', sans-serif;
  font-weight: 700;

  color: #000;

  a:first-child {
    color: #ff4f5a;

    padding-right: 26px;
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  font-family: 'Rosario', sans-serif;

  margin: 73px auto 0 auto;

  h1 {
    width: 40%;

    color: #000;

    margin: 0 auto 40px auto;

    font-size: 48px;
    text-align: center;
    font-weight: 700;
  }

  button {
    max-width: 250px;

    background-color: #ff4f5a;
    color: #fff;

    border: none;
    border-radius: 8px;

    padding: 7px 29px;
    margin: 0 auto -40px auto;

    font-size: 36px;

    z-index: 10;
  }

  img {
    width: 1363px;
    height: 909px;

    margin: 0 auto;
  }
`;

export const SecondSection = styled.div`
  margin-top: 130px;

  width: 100%;

  h1:first-child {
    font-family: 'Rosario', sans-serif;
    font-size: 48px;
    font-weight: 700;

    text-align: center;

    margin-bottom: 60px;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1000px;

  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-family: 'Roboto', sans-serif;
      font-size: 30px;
    }
  }

  img {
    width: 85px;
    height: 93px;

    margin-bottom: 30px;
  }
`;

export const ThirdSection = styled.div`
  display: flex;
  column-gap: 56px;

  max-width: 1136px;

  margin: 130px auto 0 auto;

  img {
    width: 583px;
  }

  div {
  }

  h1 {
    width: 80%;

    font-size: 48px;
    font-weight: 700;

    padding-top: 30px;
  }

  button {
    max-width: 250px;

    background-color: #ff4f5a;
    color: #fff;

    border: none;
    border-radius: 8px;

    padding: 7px 29px;
    margin-top: 47px;

    font-size: 36px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 1146px;

  margin: 0 auto 180px auto;

  font-family: 'Roboto', sans-serif;
`;

export const FooterLinks = styled.div`
  display: flex;

  column-gap: 141px;

  h1 {
    font-size: 24px;

    color: #ff4f5a;

    margin-bottom: 36px;
  }

  a {
    display: flex;

    font-size: 20px;

    color: #737373;

    margin-bottom: 13px;
  }
`;

export const FooterIcon = styled.div`
  display: flex;
  column-gap: 28px;

  margin-bottom: 62px;

  img {
    width: 56px;
    height: 56px;
  }

  p {
    width: 50%;
    font-size: 24px;
  }
`;

export const Address = styled.div`
  color: #737373;
  font-size: 24px;

  p:first-child {
    color: #000;
  }
`;
