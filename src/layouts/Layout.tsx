import { Navigation } from './Navigation'
import { Box, Container } from '@mui/material'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'


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
    <>
      <Navigation />
      {/* a box spacer of the size of the toolbar so that nothing is hidden underneath <Navigation /> */}
      <Box sx={(theme) => (theme.mixins.toolbar)} />
      <Container sx={{ px: { xs: 3, md: 20 }, py: 10 }}>
        <Outlet />
      </Container>
    </>
  )
}
