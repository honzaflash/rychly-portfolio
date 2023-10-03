import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider, createHashRouter } from 'react-router-dom'

import theme from './theme'
import { LandingPage } from './pages/LandingPage'
import { Layout } from './layouts/Layout'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/full-stack',
        element: <LandingPage />,
      },
      {
        path: '/front-end',
        element: <LandingPage />,
      },
      {
        path: '/back-end',
        element: <LandingPage />,
      },
    ]
  },
])



export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App">
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  )
}

export default App
