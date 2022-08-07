import React from 'react';
import { Buttons, Container, Line, Logo, Signup } from './styles';

export const SignupContainer: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src="/svg/icon.svg" alt="to do daily icon" />

        <h1>Todo Daily</h1>
      </Logo>

      <h1>Signup</h1>

      <Buttons>
        <button type="button">
          <img src="/svg/googleIcon.svg" alt="google icon" />
          <p>Continue using Google</p>
        </button>

        <button type="button">
          <img src="/svg/gitIcon.svg" alt="github icon" />
          <p>Continue using Github</p>
        </button>
      </Buttons>

      <Line />

      <Signup>
        <p>Not have account?</p>
        <a href="/signin">Signin</a>
      </Signup>
    </Container>
  );
};
