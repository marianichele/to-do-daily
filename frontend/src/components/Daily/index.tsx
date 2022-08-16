import React, { useState } from 'react';
import {
  Container,
  Content,
  DailyIcon,
  Drowpdown,
  DrowpdownIconText,
  Header,
  HeaderIcons,
  Line,
  LogoutButton,
  Sidebar,
  SidebarIcons,
  TodayIcon
} from './styles';
import { Today } from '_components/Today';

export const DailyContainer: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  function handleOpenProfileDropdown() {
    setIsProfileOpen(true);
  }

  return (
    <Container>
      <Header>
        <DailyIcon>
          <img src="/svg/iconWhite.svg" alt="to do daily icon" />

          <h1>Todo Daily</h1>
        </DailyIcon>

        <HeaderIcons>
          <p>James</p>

          <button type="button" onClick={handleOpenProfileDropdown}>
            <img src="/svg/profileImage.svg" alt="profile" />
          </button>
        </HeaderIcons>
      </Header>

      {isProfileOpen ? (
        <Drowpdown>
          <DrowpdownIconText>
            <img src="/svg/profileIcon.svg" alt="profile icon" />
            <p>Profile</p>
          </DrowpdownIconText>

          <DrowpdownIconText>
            <img src="/svg/settingIcon.svg" alt="setting icon" />
            <p>Setting</p>
          </DrowpdownIconText>

          <Line />

          <LogoutButton>
            <img src="/svg/logoutIcon.svg" alt="logout icon" />
            <p>logout</p>
          </LogoutButton>
        </Drowpdown>
      ) : null}

      <Content>
        <Sidebar>
          <TodayIcon>
            <img src="/svg/ion_calendar-clear.svg" alt="profile" />
            <p>Today</p>
          </TodayIcon>

          <SidebarIcons>
            <img src="/svg/ion_calendar.svg" alt="profile" />
            <p>Yesterday</p>
          </SidebarIcons>

          <SidebarIcons>
            <img src="/svg/ion_calendar-number.svg" alt="profile" />
            <p>Upcoming</p>
          </SidebarIcons>
        </Sidebar>

        <div><Today /></div>
      </Content>
    </Container>
  );
};
