import React from 'react';
import { Container, Header } from './styles';

export const DailyContainer: React.FC = () => {

  return (
    <Container>
      <Header>
          <img src="/svg/iconWhite.svg" alt="to do daily icon" />
          <h1>Todo Daily</h1>
        </Header>
    </Container>
  );
};
