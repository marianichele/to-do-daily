import React from 'react';
import { Buttons, Container, Line, Logo, Signup } from './styles';

export const SigninContainer: React.FC = () => {

  return (
    <Container>
      <Logo>
        <img src="/svg/icon.svg" alt="to do daily icon" />

        <h1>Todo Daily</h1>
      </Logo>

      <h1>Signin</h1>

      <Buttons>
        <button>
          <img src="/svg/googleIcon.svg" alt="google icon" />
          <p>Continue using Google</p>
        </button>

        <button>
          <img src="/svg/gitIcon.svg" alt="github icon" />
          <p>Continue using Github</p>
        </button>
      </Buttons>

      <Line></Line>

      <Signup>
        <p>Not have account?</p>
        <a href='/signup'>Signup</a>
      </Signup>

    </Container>
  );
};
