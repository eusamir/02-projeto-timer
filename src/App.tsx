import { ThemeProvider } from 'styled-components'
import './App.css'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>hellooo</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}
