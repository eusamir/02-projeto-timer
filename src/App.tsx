import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>hellooo</h1>
    </ThemeProvider>
  )
}
