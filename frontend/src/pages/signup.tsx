import React from 'react';
import type { NextPage } from 'next';
import { Container } from '_components/Container';
import { SignupContainer } from '_components/Signup';

const Signup: NextPage = () => {
  return (
    <Container>
      <SignupContainer />
    </Container>
  );
};

export default Signup;
