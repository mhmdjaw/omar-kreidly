import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalProvider } from '../../context'
import theme from '../../theme'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }: ProvidersProps) => {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalProvider>
  )
}

export default Providers
