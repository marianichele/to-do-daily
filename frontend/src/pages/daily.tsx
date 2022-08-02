import React from 'react';
import type { NextPage } from 'next';
import { Container } from '_components/Container';
import { DailyContainer } from '_components/Daily';

const Signup: NextPage = () => {
  return (
    <Container>
      <DailyContainer />
    </Container>
  );
};

export default Signup;
