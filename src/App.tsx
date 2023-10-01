import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/GlobalStyles'
import { AppRoutes } from './routes/AppRoutes.routes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
