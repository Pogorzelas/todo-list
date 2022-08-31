import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { theme } from '../../../theme'
import { BrowserRouter } from 'react-router-dom'

type Props = {
  children: ReactNode
}

function AppProvider({ children }: Props) {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default AppProvider
