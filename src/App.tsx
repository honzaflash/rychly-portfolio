import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom'

import theme from './theme'
import { LandingPage } from './pages/LandingPage'
import { Layout } from './layouts/Layout'
import { Things } from './layouts/Things'


const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/landing',
        element: <Navigate to="/landing/all" />
      },
      {
        path: '/landing/:filter',
        element: <LandingPage />,
      },
      {
        path: '/things',
        element: <Things />,
      },
    ],
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
