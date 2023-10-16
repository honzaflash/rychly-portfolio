import { Navigation } from './Navigation'
import { Box, Container, Stack } from '@mui/material'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Footer } from './Footer'


export const Layout = () => {
  // redirect to main page from root
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (pathname === '/') {
      navigate('/landing/all', { replace: true })
    }
  }, [navigate, pathname])

  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <Navigation />
      {/* a box spacer of the size of the toolbar so that nothing is hidden underneath <Navigation /> */}
      <Box sx={(theme) => (theme.mixins.toolbar)} />
      <Container sx={{ px: { xs: 3, md: 20 }, py: 10 }}>
        <Outlet />
      </Container>
      <Box sx={{ flexGrow: 1 }} />
      <Footer />
    </Stack>
  )
}
