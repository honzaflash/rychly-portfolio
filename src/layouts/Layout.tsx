import { Navigation } from './Navigation'
import { Box, Container, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Footer } from './Footer'
import { CoolArt, CoolArtContext } from '../components/CoolArt'


export const Layout = () => {
  // redirect to main page from root
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (pathname === '/') {
      navigate('/landing/all', { replace: true })
    }
  }, [navigate, pathname])

  const [hidden, setHidden] = useState(false)

  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <CoolArtContext.Provider value={{ hidden, setHidden }}>
        <Navigation />
        {/* a box spacer of the size of the toolbar so that nothing is hidden underneath <Navigation /> */}
        <Box sx={(theme) => theme.mixins.toolbar} />
        <Container sx={{ px: { xs: 3, md: 20 }, py: 10 }}>
          <Outlet />
        </Container>
        <CoolArt />
        <Box sx={{ flexGrow: 1 }} />
        <Footer />
      </CoolArtContext.Provider>
    </Stack>
  )
}
