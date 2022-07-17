import type { NextPage } from 'next';
import React from 'react';
import { Container } from '_components/Container';
import { LandingPage } from '_components/LandingPage';

const Home: NextPage = () => {
  return (
    <Container>
      <LandingPage />
    </Container>
  );
};

export default Home;
