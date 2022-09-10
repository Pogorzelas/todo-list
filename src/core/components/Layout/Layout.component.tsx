import type { ReactNode } from 'react';
import React from 'react';
import { StyledContainer } from './Layout.styles';

type Props = {
  children: ReactNode;
  className?: string;
}

function Layout({ children, className }: Props) {
  return (
    <StyledContainer
      className={className}
    >
      {children}
    </StyledContainer
    >
  );
}

export default Layout;
