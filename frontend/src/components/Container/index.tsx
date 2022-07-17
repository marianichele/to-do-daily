import React from 'react';

import { Container as StyledContainer } from './styles';

interface Props {
  children?: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
