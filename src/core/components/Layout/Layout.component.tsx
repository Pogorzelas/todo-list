import React, { ReactNode } from 'react'
import { StyledContainer } from './Layout.styles'

type Props = {
  children: ReactNode
}

function Layout({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>
}

export default Layout
