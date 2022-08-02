import React from 'react';
import type { NextPage } from 'next';
import { Container } from '_components/Container';
import { SigninContainer } from '_components/Signin';

const Signin: NextPage = () => {
  return (
    <Container>
      <SigninContainer />
    </Container>
  );
};

export default Signin;
