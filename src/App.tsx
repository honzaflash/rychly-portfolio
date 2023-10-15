import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom'

import theme from './theme'
import { LandingPage } from './pages/LandingPage'
import { Layout } from './layouts/Layout'
import { Things } from './pages/Things/Things'


const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/landing',
        element: <Navigate to="/landing/all" replace />
      },
      {
        path: '/landing/:filter',
        element: <LandingPage />,
      },
      {
        path: '/things/:projectId?',
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
