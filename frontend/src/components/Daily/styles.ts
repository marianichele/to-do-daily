import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #ff4f5a;

  padding: 10px 136px 12px 22px;

  img {
    background-color: #ff4f5a;
  }

  h1 {
    color: #ffffff;

    font-weight: bold;
    font-size: 36px;
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  align-items: center;

  column-gap: 21px;

  p {
    font-size: 24px;
    font-weight: 400;

    color: #ffffff;
  }

  img {
    width: 55px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 50%;
  }
`;

export const DailyIcon = styled.div`
  display: flex;
  align-items: center;

  column-gap: 10px;
`;

export const Drowpdown = styled.div`
  width: 242px;
  float: right;

  margin-right: 125px;
  margin-top: 7px;

  padding: 20px 0px 0 0;

  border: 1px #d7d7d7 solid;
  border-radius: 16px;
`;

export const DrowpdownIconText = styled.div`
  display: flex;
  column-gap: 17px;

  padding: 0px 18px 17px 18px;

  img {
    width: 19px;
  }

  p {
    font-size: 18px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;

  background-color: #d7d7d7;
`;

export const LogoutButton = styled.div`
  display: flex;
  column-gap: 17px;

  padding: 17px 18px;

  color: #ff4f5a;

  img {
    width: 19px;
  }

  p {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;

  width: 13%;
  height: 100vh;

  padding: 50px 43px;

  background-color: #f9f9f9;
`;

export const TodayIcon = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;

  color: #ff4f5a;

  font-size: 24px;

  cursor: pointer;
`;

export const SidebarIcons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;

  color: #6b6b6b;

  font-size: 24px;

  cursor: pointer;
`;
