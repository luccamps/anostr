import './assets/index.scss'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './components/theme'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './AppRouter'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  )
}

export default App
